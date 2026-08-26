import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EditorialSections, PageHero } from '@/components/primitives'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'
import { getEditorialPage, mergeHeroCopy } from '@/sanity/lib/content'

const copy = {
  es: {
    title: 'Capacidades', eyebrow: 'De la materia prima a la decisión', description: 'Integramos formulación, caracterización y transferencia tecnológica en un solo hilo de trabajo.',
    capabilities: [
      ['01', 'Diseño de material', 'Selección de familia, química superficial, formato y variables críticas según el sistema objetivo.'],
      ['02', 'Formulación', 'Dispersión, compatibilización, reología y método de incorporación para matrices líquidas o sólidas.'],
      ['03', 'Caracterización dirigida', 'Selección de técnicas como Raman, XPS, TGA, SEM, TEM, AFM o UV–Vis según la pregunta técnica.'],
      ['04', 'Integración y prototipo', 'Incorporación del material en tinta, recubrimiento, polímero, electrodo u otro sistema de prueba.'],
      ['05', 'Escalamiento', 'Mapeo de variables, repetibilidad y transferencia de una ventana de proceso viable.'],
      ['06', 'Consultoría científica', 'Revisión de literatura, diagnóstico experimental, debida diligencia y hoja de ruta tecnológica.'],
    ],
    boundaryTitle: 'Capacidad no significa disponibilidad automática.', boundaryCopy: 'Equipos, técnicas, volúmenes y tiempos se confirman en cada propuesta, ya sea con infraestructura propia o una red de colaboración. La documentación identifica el método y el responsable de cada medición.', action: 'Definir alcance',
  },
  en: {
    title: 'Capabilities', eyebrow: 'From raw material to decision', description: 'We connect formulation, characterization and technology transfer in one continuous workflow.',
    capabilities: [
      ['01', 'Material design', 'Selection of family, surface chemistry, format and critical variables for the target system.'],
      ['02', 'Formulation', 'Dispersion, compatibilization, rheology and incorporation method for liquid or solid matrices.'],
      ['03', 'Targeted characterization', 'Selection of techniques such as Raman, XPS, TGA, SEM, TEM, AFM or UV–Vis based on the technical question.'],
      ['04', 'Integration and prototype', 'Material incorporation into an ink, coating, polymer, electrode or another test system.'],
      ['05', 'Scale-up', 'Variable mapping, repeatability and transfer of a viable process window.'],
      ['06', 'Scientific consulting', 'Literature review, experimental diagnosis, due diligence and technology roadmapping.'],
    ],
    boundaryTitle: 'Capability does not mean automatic availability.', boundaryCopy: 'Equipment, techniques, volumes and lead times are confirmed in each proposal, whether through in-house infrastructure or a collaboration network. Documentation identifies the method and the party responsible for each measurement.', action: 'Define scope',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = mergeHeroCopy(copy[locale], await getEditorialPage('capacidades'), locale)
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'capacidades' })
}

export default async function CapabilitiesPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const pageContent = await getEditorialPage('capacidades')
  const t = mergeHeroCopy(copy[locale], pageContent, locale)
  return (
    <><PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} image={pageContent?.heroImage} locale={locale} />
      <EditorialSections sections={pageContent?.sections} locale={locale} />
      <section className="section"><div className="container capability-grid">{t.capabilities.map(([number, title, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{description}</p></article>)}</div></section>
      <section className="section section--compact"><div className="container note-panel"><div><p className="eyebrow">{locale === 'es' ? 'Transparencia de alcance' : 'Scope transparency'}</p><h2>{t.boundaryTitle}</h2><p>{t.boundaryCopy}</p></div><Link className="button button--dark" href={pathFor(locale, 'contacto')}>{t.action}</Link></div></section>
    </>
  )
}
