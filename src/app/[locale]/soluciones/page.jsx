import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ItemCard, PageHero } from '@/components/primitives'
import { solutions } from '@/data/site-content'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'

const copy = {
  es: { eyebrow: 'Integración y desempeño', title: 'Soluciones', description: 'Programas de formulación e integración construidos alrededor de su proceso y una métrica de éxito, no alrededor de una palabra de moda.', label: 'Ver solución', note: '¿Su reto no aparece aquí?', noteCopy: 'La ruta a la medida empieza con un brief técnico y una hipótesis que podamos medir.', action: 'Iniciar un desarrollo' },
  en: { eyebrow: 'Integration and performance', title: 'Solutions', description: 'Formulation and integration programs built around your process and a success metric—not around a buzzword.', label: 'View solution', note: 'Is your challenge not listed here?', noteCopy: 'A custom path begins with a technical brief and a hypothesis we can measure.', action: 'Start a development' },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = copy[locale]
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'soluciones' })
}

export default async function SolutionsPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = copy[locale]
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} />
      <section className="section catalog-section"><div className="container card-grid card-grid--three">{solutions.map((item) => <ItemCard key={item.slug} item={item} locale={locale} href={pathFor(locale, `soluciones/${item.slug}`)} label={t.label} />)}</div></section>
      <section className="section section--compact"><div className="container note-panel"><div><p className="eyebrow">{locale === 'es' ? 'Desarrollo especial' : 'Special development'}</p><h2>{t.note}</h2><p>{t.noteCopy}</p></div><Link className="button button--dark" href={pathFor(locale, 'contacto')}>{t.action}</Link></div></section>
    </>
  )
}
