import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ItemCard, PageHero } from '@/components/primitives'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getMaterials } from '@/sanity/lib/content'

const copy = {
  es: {
    title: 'Materiales grafénicos',
    description: 'Compare familias de materiales, formatos y técnicas de caracterización para seleccionar un punto de partida técnicamente defendible.',
    eyebrow: 'Catálogo técnico',
    label: 'Ver perfil',
    noteTitle: 'La selección no termina en el nombre del material.',
    note: 'Matriz, método de incorporación, concentración, geometría y química superficial pueden cambiar el resultado. Por eso confirmamos cada especificación contra el uso previsto.',
    action: 'Ayúdame a seleccionar',
  },
  en: {
    title: 'Graphene materials',
    description: 'Compare material families, formats and characterization techniques to select a technically defensible starting point.',
    eyebrow: 'Technical catalog',
    label: 'View profile',
    noteTitle: 'Selection does not end with the material name.',
    note: 'Matrix, incorporation method, concentration, geometry and surface chemistry can change the outcome. That is why every specification is confirmed against the intended use.',
    action: 'Help me select',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = copy[locale]
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'materiales' })
}

export default async function MaterialsPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = copy[locale]
  const materials = await getMaterials()

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} />
      <section className="section catalog-section">
        <div className="container card-grid card-grid--three">
          {materials.map((item) => <ItemCard key={item.slug} item={item} locale={locale} href={pathFor(locale, `materiales/${item.slug}`)} label={t.label} />)}
        </div>
      </section>
      <section className="section section--compact">
        <div className="container note-panel">
          <div><p className="eyebrow">{locale === 'es' ? 'Criterio de aplicación' : 'Application criterion'}</p><h2>{t.noteTitle}</h2><p>{t.note}</p></div>
          <Link className="button button--dark" href={pathFor(locale, 'contacto')}>{t.action}</Link>
        </div>
      </section>
    </>
  )
}
