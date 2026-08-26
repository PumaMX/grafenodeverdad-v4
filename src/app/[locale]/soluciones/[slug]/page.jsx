import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageBuilder from '@/components/page-builder'
import { solutions as solutionSeeds } from '@/data/site-content'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getSolution, localized, localizedSeo } from '@/sanity/lib/content'

const labels = {
  es: { back: 'Todas las soluciones', promise: 'Resultado buscado' },
  en: { back: 'All solutions', promise: 'Target outcome' },
}

export function generateStaticParams() {
  return solutionSeeds.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const solution = await getSolution(slug, { stega: false })
  if (!isLocale(locale) || !solution) return {}
  return localizedMetadata({ locale, ...localizedSeo(solution, locale), path: `soluciones/${slug}` })
}

export default async function SolutionDetailPage({ params }) {
  const { locale, slug } = await params
  const solution = await getSolution(slug)
  if (!isLocale(locale) || !solution) notFound()
  const t = labels[locale]
  const sections = [
    ...(solution.body?.[locale]?.length ? [{ _key: 'solution-body', _type: 'richTextBlock', enabled: true, surface: 'paper', content: solution.body }] : []),
    ...(solution.gallery?.length ? [{ _key: 'solution-gallery', _type: 'galleryBlock', enabled: true, surface: 'paper', columns: 3, images: solution.gallery }] : []),
    ...(solution.sections || []).map((section) => section._type === 'ctaBlock' ? {
      ...section,
      primary: section.primary?.href?.includes('tipo=proyecto') ? { ...section.primary, href: `contacto?tipo=proyecto&solucion=${solution.slug}` } : section.primary,
    } : section),
  ]

  return (
    <>
      <section className="detail-hero"><div className="container"><Link className="back-link" href={pathFor(locale, 'soluciones')}>← {t.back}</Link><div className="detail-hero__grid"><div><p className="eyebrow eyebrow--accent">{solution.code}</p><h1>{localized(solution.name, locale)}</h1><p>{localized(solution.summary, locale)}</p></div><div className="detail-code"><span>{t.promise}</span><strong>{solution.outcomes?.[locale]?.[0] || solution.code}</strong><small>{locale === 'es' ? 'Sujeto a validación en su sistema' : 'Subject to validation in your system'}</small></div></div>{solution.leadImage?.url && <figure className="detail-hero__media"><Image src={solution.leadImage.url} alt={localized(solution.leadImage.alt, locale)} fill priority sizes="92vw" />{localized(solution.leadImage.caption, locale) && <figcaption>{localized(solution.leadImage.caption, locale)}</figcaption>}</figure>}</div></section>
      <PageBuilder sections={sections} locale={locale} />
    </>
  )
}
