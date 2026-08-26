import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EditorialSections, PageHero } from '@/components/primitives'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getEditorialPage, mergeHeroCopy } from '@/sanity/lib/content'

const copy = {
  es: {
    title: 'Recursos para decidir mejor', eyebrow: 'Biblioteca técnica', description: 'Guías breves para separar señal de ruido al seleccionar, caracterizar e integrar materiales grafénicos.',
    guides: [['01', 'Cómo seleccionar una familia de grafeno', 'Empiece por matriz, proceso y propiedad objetivo; después elija química superficial, geometría y formato.', ['Defina una métrica', 'Mapee restricciones del proceso', 'Seleccione una hipótesis de material']], ['02', 'Qué debe decir un CoA útil', 'Un certificado de análisis conecta resultados acordados con un lote específico y un método identificable.', ['Identidad de lote', 'Resultado y unidad', 'Método o referencia']], ['03', 'Del laboratorio al piloto', 'Escalar exige identificar variables sensibles, ventanas operativas y criterios de repetibilidad.', ['Variables críticas', 'Rango de proceso', 'Decisión de avance']]],
    note: 'Estamos convirtiendo estas guías en documentos descargables. Mientras tanto, podemos enviar una versión técnica asociada a su proyecto.', action: 'Solicitar una guía',
  },
  en: {
    title: 'Resources for better decisions', eyebrow: 'Technical library', description: 'Short guides to separate signal from noise when selecting, characterizing and integrating graphene materials.',
    guides: [['01', 'How to select a graphene family', 'Start with matrix, process and target property; then choose surface chemistry, geometry and format.', ['Define a metric', 'Map process constraints', 'Select a material hypothesis']], ['02', 'What a useful CoA should say', 'A certificate of analysis connects agreed results to a specific batch and an identifiable method.', ['Batch identity', 'Result and unit', 'Method or reference']], ['03', 'From laboratory to pilot', 'Scaling requires identifying sensitive variables, operating windows and repeatability criteria.', ['Critical variables', 'Process range', 'Go/no-go decision']]],
    note: 'We are turning these guides into downloadable documents. In the meantime, we can send a technical version associated with your project.', action: 'Request a guide',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = mergeHeroCopy(copy[locale], await getEditorialPage('recursos'), locale)
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'recursos' })
}

export default async function ResourcesPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const pageContent = await getEditorialPage('recursos')
  const t = mergeHeroCopy(copy[locale], pageContent, locale)
  return (
    <><PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} image={pageContent?.heroImage} locale={locale} />
      <EditorialSections sections={pageContent?.sections} locale={locale} />
      <section className="section"><div className="container resource-list">{t.guides.map(([number, title, description, points]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div></section>
      <section className="section section--compact"><div className="container note-panel"><div><p className="eyebrow">{locale === 'es' ? 'En preparación' : 'In preparation'}</p><h2>{locale === 'es' ? 'Documentación ligada al contexto.' : 'Documentation tied to context.'}</h2><p>{t.note}</p></div><Link className="button button--dark" href={pathFor(locale, 'contacto')}>{t.action}</Link></div></section>
    </>
  )
}
