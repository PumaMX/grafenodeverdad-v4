import { materials as fallbackMaterials, solutions as fallbackSolutions } from '@/data/site-content'
import { sanityClient } from './client'

const homeQuery = `*[_type == "homePage" && _id == "homePage"][0]{
  eyebrow, title, description, primaryCta, secondaryCta, imageCaption, signals,
  heroImage{alt, caption, credit, rights, "url": asset->url}
}`

const materialsQuery = `*[_type == "material" && defined(slug.current)] | order(order asc){
  _id, code, "slug": slug.current, name, eyebrow, summary, formats, applications,
  characterization, featured, order,
  leadImage{alt, caption, credit, rights, "url": asset->url}
}`

const solutionsQuery = `*[_type == "solution" && defined(slug.current)] | order(order asc){
  _id, code, "slug": slug.current, name, summary, outcomes, featured, order,
  leadImage{alt, caption, credit, rights, "url": asset->url}
}`

const pageQuery = `*[_type == "editorialPage" && pageKey == $pageKey][0]{
  pageKey, eyebrow, title, description,
  heroImage{alt, caption, credit, rights, "url": asset->url},
  sections[]{..., image{alt, caption, credit, rights, "url": asset->url}}
}`

async function safeFetch(query, params = {}) {
  try {
    return await sanityClient.fetch(query, params, { next: { revalidate: 60 } })
  } catch {
    return null
  }
}

function mergeCatalog(fallback, content) {
  if (!Array.isArray(content) || content.length === 0) return fallback
  const bySlug = new Map(content.map((item) => [item.slug, item]))
  const merged = fallback.map((item) => ({ ...item, ...(bySlug.get(item.slug) || {}) }))
  const known = new Set(fallback.map((item) => item.slug))
  return [...merged, ...content.filter((item) => !known.has(item.slug))]
}

export async function getHomeContent() {
  return safeFetch(homeQuery)
}

export async function getMaterials() {
  return mergeCatalog(fallbackMaterials, await safeFetch(materialsQuery))
}

export async function getMaterial(slug) {
  return (await getMaterials()).find((item) => item.slug === slug)
}

export async function getSolutions() {
  return mergeCatalog(fallbackSolutions, await safeFetch(solutionsQuery))
}

export async function getSolution(slug) {
  return (await getSolutions()).find((item) => item.slug === slug)
}

export async function getEditorialPage(pageKey) {
  return safeFetch(pageQuery, { pageKey })
}

export function localized(value, locale, fallback = '') {
  return value?.[locale] || fallback
}

export function mergeHeroCopy(base, content, locale) {
  if (!content) return base
  return {
    ...base,
    eyebrow: localized(content.eyebrow, locale, base.eyebrow),
    title: localized(content.title, locale, base.title),
    description: localized(content.description, locale, base.description),
  }
}

export function mergeHomeCopy(base, content, locale) {
  const merged = mergeHeroCopy(base, content, locale)
  if (!content) return merged
  const chooseSection = content.sections?.[0]
  const processSection = content.sections?.[1]
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
    chooseEyebrow: localized(chooseSection?.eyebrow, locale, base.chooseEyebrow),
    chooseTitle: localized(chooseSection?.title, locale, base.chooseTitle),
    chooseCopy: localized(chooseSection?.body, locale, base.chooseCopy),
    processEyebrow: localized(processSection?.eyebrow, locale, base.processEyebrow),
    processTitle: localized(processSection?.title, locale, base.processTitle),
    processCopy: localized(processSection?.body, locale, base.processCopy),
  }
}

export function resolveContentHref(locale, href, fallback) {
  if (!href) return fallback
  if (/^(https?:|mailto:|tel:)/.test(href)) return href
  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) return href
  return `/${locale}/${href.replace(/^\//, '')}`
}
