import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageBuilder from '@/components/page-builder'
import { materials as materialSeeds } from '@/data/site-content'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getMaterial, localized, localizedSeo } from '@/sanity/lib/content'

const labels = {
  es: { back: 'Todos los materiales', overview: 'Perfil de material', formats: 'Formatos de suministro', uses: 'Aplicaciones de referencia', characterization: 'Caracterización pertinente' },
  en: { back: 'All materials', overview: 'Material profile', formats: 'Supply formats', uses: 'Reference applications', characterization: 'Relevant characterization' },
}

export function generateStaticParams() {
  return materialSeeds.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const material = await getMaterial(slug, { stega: false })
  if (!isLocale(locale) || !material) return {}
  return localizedMetadata({ locale, ...localizedSeo(material, locale), path: `materiales/${slug}` })
}

export default async function MaterialDetailPage({ params }) {
  const { locale, slug } = await params
  const material = await getMaterial(slug)
  if (!isLocale(locale) || !material) notFound()
  const t = labels[locale]
  const sections = [
    ...(material.body?.[locale]?.length ? [{ _key: 'material-body', _type: 'richTextBlock', enabled: true, surface: 'paper', content: material.body }] : []),
    ...(material.gallery?.length ? [{ _key: 'material-gallery', _type: 'galleryBlock', enabled: true, surface: 'paper', columns: 3, images: material.gallery }] : []),
    ...(material.sections || []).map((section) => section._type === 'ctaBlock' ? {
      ...section,
      primary: section.primary?.href?.includes('tipo=muestra') ? { ...section.primary, href: `contacto?tipo=muestra&material=${material.slug}` } : section.primary,
    } : section),
  ]

  return (
    <>
      <section className="detail-hero"><div className="container"><Link className="back-link" href={pathFor(locale, 'materiales')}>← {t.back}</Link><div className="detail-hero__grid"><div><p className="eyebrow eyebrow--accent">{localized(material.eyebrow, locale)}</p><h1>{localized(material.name, locale)}</h1><p>{localized(material.summary, locale)}</p></div><div className="detail-code"><span>{t.overview}</span><strong>{material.code}</strong><small>{locale === 'es' ? 'Especificación por grado y lote' : 'Grade- and batch-specific'}</small></div></div>{material.leadImage?.url && <figure className="detail-hero__media"><Image src={material.leadImage.url} alt={localized(material.leadImage.alt, locale)} fill priority sizes="92vw" />{localized(material.leadImage.caption, locale) && <figcaption>{localized(material.leadImage.caption, locale)}</figcaption>}</figure>}</div></section>
      <section className="section"><div className="container detail-columns"><div className="detail-list"><p className="eyebrow">01 · {t.formats}</p><ul>{(material.formats?.[locale] || []).map((value) => <li key={value}>{value}</li>)}</ul></div><div className="detail-list"><p className="eyebrow">02 · {t.uses}</p><ul>{(material.applications?.[locale] || []).map((value) => <li key={value}>{value}</li>)}</ul></div><div className="detail-list"><p className="eyebrow">03 · {t.characterization}</p><ul>{(material.characterization || []).map((value) => <li key={value}>{value}</li>)}</ul></div></div></section>
      <PageBuilder sections={sections} locale={locale} />
    </>
  )
}
