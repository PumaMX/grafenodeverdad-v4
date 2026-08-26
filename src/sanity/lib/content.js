import { materials as fallbackMaterials, solutions as fallbackSolutions } from '@/data/site-content'
import { homeSeed, materialDetailSections, pageSeeds, solutionDetailSections } from '@/data/page-seeds'
import { siteSettingsSeed } from '@/data/global-seed'
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
  _id, eyebrow, title, description, primaryCta, secondaryCta, imageCaption, signals,
  heroImage${imageProjection},
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
  return mergePage(homeSeed, await safeFetch(homeQuery, {}, options))
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
  return { ...siteSettingsSeed, ...(await safeFetch(settingsQuery, {}, options) || {}) }
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
  return {
    ...merged,
    primary: localized(content.primaryCta?.label, locale, base.primary),
    primaryHref: content.primaryCta?.href,
    secondary: localized(content.secondaryCta?.label, locale, base.secondary),
    secondaryHref: content.secondaryCta?.href,
    imageCaption: localized(content.imageCaption, locale, base.imageCaption),
    heroImage: content.heroImage?.url,
    heroImageAlt: localized(content.heroImage?.alt, locale, ''),
    signals: content.signals?.length
      ? content.signals.map((item) => [item.value, localized(item.label, locale)])
      : base.signals,
  }
}

export function resolveContentHref(locale, href, fallback = `/${locale}`) {
  const cleanHref = stegaClean(href)
  if (!cleanHref) return fallback
  if (/^(https?:|mailto:|tel:|#)/.test(cleanHref)) return cleanHref
  if (cleanHref.startsWith(`/${locale}/`) || cleanHref === `/${locale}`) return cleanHref
  return `/${locale}/${cleanHref.replace(/^\//, '')}`
}
