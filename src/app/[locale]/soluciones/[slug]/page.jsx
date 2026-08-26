import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { solutions as solutionSeeds } from '@/data/site-content'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getSolution } from '@/sanity/lib/content'

const labels = {
  es: { back: 'Todas las soluciones', promise: 'Resultado buscado', approach: 'Ruta de trabajo', phaseTitle: 'De la pregunta a la decisión', phases: [['01', 'Brief', 'Aplicación, sustrato o matriz, proceso actual y métrica objetivo.'], ['02', 'Diseño', 'Selección de material, formulación y plan experimental.'], ['03', 'Prueba', 'Muestra o prototipo y caracterización pertinente.'], ['04', 'Decisión', 'Lectura de resultados y recomendación para iterar, escalar o detener.']], deliverables: 'Resultados de la etapa', delivery: ['Definición de alcance', 'Material o formulación experimental', 'Registro de variables críticas', 'Reporte y recomendación técnica'], caveat: 'El alcance, técnicas, cantidad de muestra y entregables se acuerdan antes de iniciar. No asumimos desempeño sin validarlo en el sistema objetivo.', cta: 'Convierta su reto en un brief', ctaCopy: 'Cuatro datos bastan para empezar: aplicación, material base, proceso y métrica que desea mover.', action: 'Iniciar proyecto' },
  en: { back: 'All solutions', promise: 'Target outcome', approach: 'Work path', phaseTitle: 'From question to decision', phases: [['01', 'Brief', 'Application, substrate or matrix, current process and target metric.'], ['02', 'Design', 'Material selection, formulation and experimental plan.'], ['03', 'Test', 'Sample or prototype and relevant characterization.'], ['04', 'Decide', 'Readout and recommendation to iterate, scale or stop.']], deliverables: 'Stage outputs', delivery: ['Scope definition', 'Experimental material or formulation', 'Critical variable record', 'Technical report and recommendation'], caveat: 'Scope, techniques, sample quantity and deliverables are agreed before starting. We do not assume performance without validating it in the target system.', cta: 'Turn your challenge into a brief', ctaCopy: 'Four data points are enough to begin: application, base material, process and the metric you need to move.', action: 'Start a project' },
}

export function generateStaticParams() {
  return solutionSeeds.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const solution = await getSolution(slug)
  if (!isLocale(locale) || !solution) return {}
  return localizedMetadata({ locale, title: solution.name[locale], description: solution.summary[locale], path: `soluciones/${slug}` })
}

export default async function SolutionDetailPage({ params }) {
  const { locale, slug } = await params
  const solution = await getSolution(slug)
  if (!isLocale(locale) || !solution) notFound()
  const t = labels[locale]
  return (
    <>
      <section className="detail-hero"><div className="container"><Link className="back-link" href={pathFor(locale, 'soluciones')}>← {t.back}</Link><div className="detail-hero__grid"><div><p className="eyebrow eyebrow--accent">{solution.code}</p><h1>{solution.name[locale]}</h1><p>{solution.summary[locale]}</p></div><div className="detail-code"><span>{t.promise}</span><strong>{solution.outcomes?.[locale]?.[0] || solution.code}</strong><small>{locale === 'es' ? 'Sujeto a validación en su sistema' : 'Subject to validation in your system'}</small></div></div>{solution.leadImage?.url && <figure className="detail-hero__media"><Image src={solution.leadImage.url} alt={solution.leadImage.alt?.[locale] || ''} fill priority sizes="92vw" />{solution.leadImage.caption?.[locale] && <figcaption>{solution.leadImage.caption[locale]}</figcaption>}</figure>}</div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">{t.approach}</p><h2>{t.phaseTitle}</h2></div></div><ol className="process-grid process-grid--light">{t.phases.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
      <section className="section section--light"><div className="container technical-block"><div><p className="eyebrow">{t.deliverables}</p><h2>{solution.name[locale]}</h2><p>{t.caveat}</p></div><ul className="check-list">{t.delivery.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="final-cta final-cta--light"><div className="container final-cta__inner"><div><p className="eyebrow">{solution.code}</p><h2>{t.cta}</h2><p>{t.ctaCopy}</p></div><Link className="button button--primary" href={`${pathFor(locale, 'contacto')}?tipo=proyecto&solucion=${solution.slug}`}>{t.action}</Link></div></section>
    </>
  )
}
