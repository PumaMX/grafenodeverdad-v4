import { materials as fallbackMaterials, solutions as fallbackSolutions } from '@/data/site-content'
import { homeSeed, materialDetailSections, pageSeeds, solutionDetailSections } from '@/data/page-seeds'
import { siteSettingsSeed } from '@/data/global-seed'
import { CONTACT_EMAIL, normalizeContactEmail } from '@/lib/site'
import { stegaClean } from 'next-sanity'
import { sanityFetch } from './live'

const imageProjection = `{
  alt, caption, credit, rights, hotspot, crop, "url": asset->url
}`

const sectionsProjection = `sections[]{
  ...,
  image${imageProjection},
  items[]{..., image${imageProjection}},
  images[]{..., "url": asset->url}
}`

const homeQuery = `*[_type == "homePage" && _id == "homePage"][0]{
  _id, eyebrow, title, description, primaryCta, secondaryCta, imageCaption, directorMessage, signals,
  heroImage${imageProjection},
  gallery[]{..., "url": asset->url},
  seo{title, description, noIndex, image${imageProjection}},
  ${sectionsProjection}
}`

const materialsQuery = `*[_type == "material" && defined(slug.current)] | order(order asc){
  _id, code, "slug": slug.current, name, eyebrow, summary, formats, applications,
  characterization, featured, order, body, gallery[]{..., "url": asset->url},
  leadImage${imageProjection},
  seo{title, description, noIndex, image${imageProjection}},
  ${sectionsProjection}
}`

const solutionsQuery = `*[_type == "solution" && defined(slug.current)] | order(order asc){
  _id, code, "slug": slug.current, name, summary, outcomes, featured, order, body,
  gallery[]{..., "url": asset->url},
  leadImage${imageProjection},
  seo{title, description, noIndex, image${imageProjection}},
  ${sectionsProjection}
}`

const pageQuery = `*[_type == "editorialPage" && pageKey == $pageKey][0]{
  _id, pageKey, eyebrow, title, description,
  heroImage${imageProjection},
  seo{title, description, noIndex, image${imageProjection}},
  ${sectionsProjection}
}`

const settingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]`

async function safeFetch(query, params = {}, options = {}) {
  try {
    const { data } = await sanityFetch({
      query,
      params,
      ...options,
    })
    return data
  } catch {
    return null
  }
}

function usableSections(content, fallback) {
  const sections = content?.sections
  if (!Array.isArray(sections) || sections.length === 0) return fallback
  if (sections.every((section) => section?._type === 'contentSection')) return fallback
  return sections
}

function mergePage(fallback, content) {
  if (!content) return fallback
  return {
    ...fallback,
    ...content,
    sections: usableSections(content, fallback.sections),
  }
}

function mergeDirectorMessage(fallback, content) {
  if (!content) return fallback
  const replacements = {
    es: new Map([
      ['Esta visión se fortalece actualmente con la dirección científica del Dr. José Luis Rodríguez López y con un equipo comprometido con convertir el conocimiento en materiales, procesos y soluciones técnicamente sustentadas.', fallback.paragraphs.es[2]],
      ['Damos la cara.', fallback.paragraphs.es[4]],
    ]),
    en: new Map([
      ['That vision is now strengthened by the scientific leadership of Dr. José Luis Rodríguez López and a team committed to turning knowledge into technically grounded materials, processes and solutions.', fallback.paragraphs.en[2]],
      ['We stand behind our work.', fallback.paragraphs.en[4]],
    ]),
  }
  const paragraphs = { ...fallback.paragraphs, ...content.paragraphs }
  for (const locale of ['es', 'en']) {
    paragraphs[locale] = (paragraphs[locale] || []).map((paragraph) => replacements[locale].get(stegaClean(paragraph).trim()) || paragraph)
  }
  const role = { ...fallback.role, ...content.role }
  if (stegaClean(role.es) === 'Director') role.es = fallback.role.es
  if (stegaClean(role.en) === 'Director') role.en = fallback.role.en
  return {
    ...fallback,
    ...content,
    label: { ...fallback.label, ...content.label },
    title: { ...fallback.title, ...content.title },
    paragraphs,
    role,
  }
}

function mergeCatalog(fallback, content, detailSections) {
  const fallbackWithSections = fallback.map((item) => ({
    ...item,
    sections: item.sections || detailSections,
  }))

  if (!Array.isArray(content) || content.length === 0) return fallbackWithSections
  const bySlug = new Map(content.map((item) => [item.slug, item]))
  const merged = fallbackWithSections.map((item) => {
    const published = bySlug.get(item.slug)
    if (!published) return item
    return {
      ...item,
      ...published,
      sections: usableSections(published, item.sections),
    }
  })
  const known = new Set(fallback.map((item) => item.slug))
  return [
    ...merged,
    ...content
      .filter((item) => !known.has(item.slug))
      .map((item) => ({ ...item, sections: usableSections(item, detailSections) })),
  ]
}

export async function getHomeContent(options = {}) {
  const content = await safeFetch(homeQuery, {}, options)
  return {
    ...mergePage(homeSeed, content),
    directorMessage: mergeDirectorMessage(homeSeed.directorMessage, content?.directorMessage),
  }
}

export async function getMaterials(options = {}) {
  return mergeCatalog(
    fallbackMaterials,
    await safeFetch(materialsQuery, {}, options),
    materialDetailSections,
  )
}

export async function getMaterial(slug, options = {}) {
  return (await getMaterials(options)).find((item) => item.slug === slug)
}

export async function getSolutions(options = {}) {
  return mergeCatalog(
    fallbackSolutions,
    await safeFetch(solutionsQuery, {}, options),
    solutionDetailSections,
  )
}

export async function getSolution(slug, options = {}) {
  return (await getSolutions(options)).find((item) => item.slug === slug)
}

export async function getEditorialPage(pageKey, options = {}) {
  const fallback = pageSeeds[pageKey]
  return mergePage(fallback, await safeFetch(pageQuery, { pageKey }, options))
}

export async function getSiteSettings(options = {}) {
  const settings = { ...siteSettingsSeed, ...(await safeFetch(settingsQuery, {}, options) || {}) }
  const navigation = Array.isArray(settings.navigation) ? [...settings.navigation] : [...siteSettingsSeed.navigation]
  if (!navigation.some((item) => stegaClean(item?.href) === 'academia-industria')) {
    const insertAt = Math.max(0, navigation.findIndex((item) => stegaClean(item?.href) === 'capacidades') + 1)
    navigation.splice(insertAt, 0, siteSettingsSeed.navigation.find((item) => item.href === 'academia-industria'))
  }
  return { ...settings, contactEmail: CONTACT_EMAIL, navigation }
}

export function localized(value, locale, fallback = '') {
  return value?.[locale] || fallback
}

export function localizedSeo(content, locale) {
  return {
    title: localized(content?.seo?.title, locale, localized(content?.title || content?.name, locale)),
    description: localized(content?.seo?.description, locale, localized(content?.description || content?.summary, locale)),
    image: content?.seo?.image?.url,
    noIndex: content?.seo?.noIndex === true,
  }
}

export function mergeHeroCopy(base = {}, content, locale) {
  if (!content) return base
  return {
    ...base,
    eyebrow: localized(content.eyebrow, locale, base.eyebrow),
    title: localized(content.title, locale, base.title),
    description: localized(content.description, locale, base.description),
  }
}

export function mergeHomeCopy(base = {}, content, locale) {
  const merged = mergeHeroCopy(base, content, locale)
  if (!content) return merged
  const localSlides = locale === 'es'
      ? [
        { _key: 'materials', src: '/hero-materials-v5.webp', alt: 'Estructura conceptual de un material bidimensional', caption: 'Visualización editorial generada por IA; no representa una instalación o lote específico.' },
        { _key: 'tem-gdv', src: '/hero-tem-gdv.webp', objectFit: 'contain', alt: 'Micrografía TEM de hojuelas de material grafénico de Grafeno de Verdad con barra de escala de 500 nanómetros', caption: 'Micrografía TEM de material grafénico de GdV; se observan hojuelas laminares superpuestas. Barra de escala: 500 nm.' },
        { _key: 'sem-gdv', src: '/hero-sem-gdv.webp', objectFit: 'contain', alt: 'Micrografía SEM de morfología laminar de material grafénico de Grafeno de Verdad con barra de escala de 300 nanómetros', caption: 'Micrografía SEM de material grafénico de GdV; se observa una morfología laminar apilada y superficies escalonadas. Barra de escala: 300 nm.' },
        { _key: 'raman-ai', src: '/hero-raman-ai.webp', alt: 'Visualización conceptual de espectroscopía Raman aplicada a grafeno', caption: 'Visualización conceptual generada por IA; no corresponde a una medición Raman ni a un equipo específico de GdV.' },
        { _key: 'cvd-ai', src: '/hero-cvd-ai.webp', alt: 'Visualización conceptual de un proceso de depósito químico de vapor', caption: 'Visualización conceptual generada por IA; no es una fotografía ni un diagrama técnico del reactor CVD de GdV.' },
      ]
      : [
        { _key: 'materials', src: '/hero-materials-v5.webp', alt: 'Conceptual structure of a two-dimensional material', caption: 'AI-generated editorial visualization; it does not represent a specific facility or batch.' },
        { _key: 'tem-gdv', src: '/hero-tem-gdv.webp', objectFit: 'contain', alt: 'TEM micrograph of graphene-material flakes from Grafeno de Verdad with a 500-nanometer scale bar', caption: 'TEM micrograph of GdV graphene material showing overlapping lamellar flakes. Scale bar: 500 nm.' },
        { _key: 'sem-gdv', src: '/hero-sem-gdv.webp', objectFit: 'contain', alt: 'SEM micrograph of the lamellar morphology of Grafeno de Verdad graphene material with a 300-nanometer scale bar', caption: 'SEM micrograph of GdV graphene material showing stacked lamellar morphology and stepped surfaces. Scale bar: 300 nm.' },
        { _key: 'raman-ai', src: '/hero-raman-ai.webp', alt: 'Conceptual visualization of Raman spectroscopy applied to graphene', caption: 'AI-generated conceptual visualization; it is not a Raman measurement or a specific piece of GdV equipment.' },
        { _key: 'cvd-ai', src: '/hero-cvd-ai.webp', alt: 'Conceptual visualization of a chemical vapor deposition process', caption: 'AI-generated conceptual visualization; it is not a photograph or technical diagram of GdV’s CVD reactor.' },
      ]
  const managedSlides = [content.heroImage, ...(content.gallery || [])]
    .filter((image) => image?.url)
    .map((image, index) => ({
      _key: image._key || `managed-${index}`,
      src: image.url,
      alt: localized(image.alt, locale, ''),
      caption: localized(image.caption, locale, localized(content.imageCaption, locale, '')),
    }))
  const hasManagedGallery = (content.gallery || []).some((image) => image?.url)
  const slides = (hasManagedGallery
    ? managedSlides
    : [...(managedSlides.length ? managedSlides : [localSlides[0]]), ...localSlides.slice(1)])
    .filter((slide, index, all) => all.findIndex((item) => item.src === slide.src) === index)

  return {
    ...merged,
    primary: localized(content.primaryCta?.label, locale, base.primary),
    primaryHref: content.primaryCta?.href,
    secondary: localized(content.secondaryCta?.label, locale, base.secondary),
    secondaryHref: content.secondaryCta?.href,
    imageCaption: localized(content.imageCaption, locale, base.imageCaption),
    heroImage: content.heroImage?.url,
    heroImageAlt: localized(content.heroImage?.alt, locale, ''),
    slides,
    directorMessage: {
      label: localized(content.directorMessage?.label, locale, locale === 'es' ? 'Mensaje del Director' : "Director's Message"),
      title: localized(content.directorMessage?.title, locale, locale === 'es' ? 'La confianza no se pide: se demuestra' : 'Trust is not asked for. It is demonstrated.'),
      paragraphs: content.directorMessage?.paragraphs?.[locale] || [],
      directorName: content.directorMessage?.directorName || 'Luis Caballero Navarro',
      role: localized(content.directorMessage?.role, locale, locale === 'es' ? 'Director General' : 'Managing Director'),
      companyName: content.directorMessage?.companyName || 'Grafeno de Verdad, S.A. de C.V.',
      address: content.directorMessage?.address || 'Añil 345, Granjas México, 08400 Iztacalco, CDMX',
    },
    signals: content.signals?.length
      ? content.signals.map((item) => ({ key: item._key, value: item.value, label: localized(item.label, locale) }))
      : base.signals,
  }
}

export function resolveContentHref(locale, href, fallback = `/${locale}`) {
  const cleanHref = stegaClean(href)
  if (!cleanHref) return fallback
  if (/^mailto:/i.test(cleanHref)) {
    const [address, query = ''] = cleanHref.slice(7).split('?')
    const normalizedAddress = normalizeContactEmail(address)
    return `mailto:${normalizedAddress}${query ? `?${query}` : ''}`
  }
  if (/^(https?:|mailto:|tel:|#)/.test(cleanHref)) return cleanHref
  if (cleanHref.startsWith(`/${locale}/`) || cleanHref === `/${locale}`) return cleanHref
  return `/${locale}/${cleanHref.replace(/^\//, '')}`
}
