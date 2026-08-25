import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHero } from '@/components/primitives'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'

const copy = {
  es: {
    title: 'Calidad que se puede leer', eyebrow: 'Evidencia y trazabilidad', description: 'Una afirmación técnica es útil cuando identifica el material, el método, el resultado y su alcance.',
    docsTitle: 'Tres documentos, tres funciones', docs: [['TDS', 'Ficha técnica', 'Describe propiedades típicas, formatos y recomendaciones de uso. No sustituye datos específicos de lote.'], ['SDS', 'Hoja de seguridad', 'Comunica peligros, manejo, almacenamiento y respuesta ante incidentes.'], ['CoA', 'Certificado de análisis', 'Reporta resultados acordados para un lote específico y los vincula con su identificación.']],
    chainTitle: 'La cadena mínima de evidencia', chain: [['01', 'Identidad', 'Código de material, grado, formato y lote.'], ['02', 'Método', 'Técnica, preparación de muestra y condiciones pertinentes.'], ['03', 'Resultado', 'Valor, unidad, criterio o interpretación con límites claros.'], ['04', 'Alcance', 'Qué demuestra el dato y qué todavía requiere validación.']],
    languageTitle: 'Usamos lenguaje preciso', languageCopy: '“Caracterizado” no significa “certificado”; “certificado” no significa necesariamente “acreditado”. Cualquier acreditación, norma o certificación se publicará con su alcance y evidencia verificables.',
    action: 'Solicitar documentación',
  },
  en: {
    title: 'Quality you can read', eyebrow: 'Evidence and traceability', description: 'A technical claim is useful when it identifies the material, method, result and scope.',
    docsTitle: 'Three documents, three purposes', docs: [['TDS', 'Technical data sheet', 'Describes typical properties, formats and use recommendations. It does not replace batch-specific data.'], ['SDS', 'Safety data sheet', 'Communicates hazards, handling, storage and incident response.'], ['CoA', 'Certificate of analysis', 'Reports agreed results for a specific batch and links them to its identity.']],
    chainTitle: 'The minimum evidence chain', chain: [['01', 'Identity', 'Material code, grade, format and batch.'], ['02', 'Method', 'Technique, sample preparation and relevant conditions.'], ['03', 'Result', 'Value, unit, criterion or interpretation with clear limits.'], ['04', 'Scope', 'What the data demonstrates and what still requires validation.']],
    languageTitle: 'We use precise language', languageCopy: '“Characterized” does not mean “certified”; “certified” does not necessarily mean “accredited.” Any accreditation, standard or certification will be published with its verifiable evidence and scope.',
    action: 'Request documentation',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = copy[locale]
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'calidad' })
}

export default async function QualityPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = copy[locale]
  return (
    <><PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} />
      <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">{locale === 'es' ? 'Documentación' : 'Documentation'}</p><h2>{t.docsTitle}</h2></div></div><div className="document-grid">{t.docs.map(([abbr, title, description]) => <article key={abbr}><strong>{abbr}</strong><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
      <section className="section section--dark"><div className="container"><div className="section-heading"><div><p className="eyebrow">{locale === 'es' ? 'Trazabilidad' : 'Traceability'}</p><h2>{t.chainTitle}</h2></div></div><ol className="process-grid">{t.chain.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}</ol></div></section>
      <section className="section section--compact"><div className="container note-panel"><div><p className="eyebrow">{locale === 'es' ? 'Sin ambigüedad' : 'No ambiguity'}</p><h2>{t.languageTitle}</h2><p>{t.languageCopy}</p></div><Link className="button button--dark" href={pathFor(locale, 'contacto')}>{t.action}</Link></div></section>
    </>
  )
}
