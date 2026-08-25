import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/primitives'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'

const copy = {
  es: {
    title: 'Ciencia útil para la industria', eyebrow: 'Grafeno de Verdad · México', description: 'Somos una empresa mexicana enfocada en materiales grafénicos, sistemas 2D y el trabajo técnico necesario para integrarlos.',
    thesis: 'La oportunidad no está en agregar grafeno. Está en entender la interfaz.', thesisCopy: 'Un material avanzado solo crea valor cuando su identidad, dispersión, compatibilidad, proceso y efecto final se conectan. Nuestro trabajo es hacer visible esa cadena y convertirla en decisiones reproducibles.',
    principles: [['Evidencia antes que adjetivos', 'Separamos propiedades típicas, resultados de lote y desempeño validado en aplicación.'], ['Colaborar desde la pregunta', 'Industria y academia aportan capacidades distintas; el alcance identifica quién hace qué.'], ['Escalar con criterio', 'Un resultado de laboratorio es una señal, no una garantía de producción. Diseñamos el siguiente experimento para reducir riesgo.']],
    experience: 'El equipo reúne más de 25 años de experiencia acumulada en investigación, desarrollo e innovación en materiales avanzados. La trayectoria institucional, colaboraciones y activos verificables se incorporarán al sitio conforme se complete su documentación.',
    cta: 'Conocer nuestras capacidades',
  },
  en: {
    title: 'Useful science for industry', eyebrow: 'Grafeno de Verdad · Mexico', description: 'We are a Mexican company focused on graphene materials, 2D systems and the technical work required to integrate them.',
    thesis: 'The opportunity is not in adding graphene. It is in understanding the interface.', thesisCopy: 'An advanced material only creates value when its identity, dispersion, compatibility, process and final effect connect. Our work is to make that chain visible and turn it into reproducible decisions.',
    principles: [['Evidence before adjectives', 'We separate typical properties, batch results and application-validated performance.'], ['Collaborate from the question', 'Industry and academia bring different capabilities; the scope identifies who does what.'], ['Scale with judgment', 'A laboratory result is a signal, not a production guarantee. We design the next experiment to reduce risk.']],
    experience: 'The team brings more than 25 years of combined experience in advanced-materials research, development and innovation. Verifiable institutional history, collaborations and assets will be added as their documentation is completed.',
    cta: 'See our capabilities',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = copy[locale]
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'empresa' })
}

export default async function CompanyPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = copy[locale]
  return (
    <><PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} />
      <section className="section"><div className="container editorial-grid"><div><p className="eyebrow">{locale === 'es' ? 'Nuestra tesis' : 'Our thesis'}</p><h2>{t.thesis}</h2></div><div><p className="lead-copy">{t.thesisCopy}</p><p>{t.experience}</p></div></div></section>
      <section className="section section--light"><div className="container principle-grid">{t.principles.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="final-cta final-cta--light"><div className="container final-cta__inner"><div><p className="eyebrow">{locale === 'es' ? 'Método' : 'Method'}</p><h2>{locale === 'es' ? 'Material + proceso + evidencia.' : 'Material + process + evidence.'}</h2></div><Link className="button button--primary" href={pathFor(locale, 'capacidades')}>{t.cta}</Link></div></section>
    </>
  )
}
