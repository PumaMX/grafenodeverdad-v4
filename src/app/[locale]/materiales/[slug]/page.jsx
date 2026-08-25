import Link from 'next/link'
import { notFound } from 'next/navigation'
import { materials } from '@/data/site-content'
import { isLocale, localizedMetadata, pathFor } from '@/lib/site'

const labels = {
  es: {
    back: 'Todos los materiales', overview: 'Perfil de material', formats: 'Formatos de suministro', uses: 'Aplicaciones de referencia', characterization: 'Caracterización pertinente',
    data: 'Datos que confirmamos antes de cotizar', property: 'Campo', basis: 'Base de entrega', identity: 'Identidad y composición', identityValue: 'Definidas para el grado seleccionado', geometry: 'Geometría y distribución', geometryValue: 'Reportadas según técnica y alcance acordados', concentration: 'Concentración o contenido sólido', concentrationValue: 'Específico para formato y lote', evidence: 'Documentación', evidenceValue: 'TDS, SDS y/o CoA según producto y alcance',
    notice: 'Los valores numéricos y tolerancias se confirman en la ficha del grado o en la propuesta. Esta página no sustituye la especificación contractual.',
    ctaTitle: '¿Es el material adecuado para su proceso?', ctaCopy: 'Comparta matriz, método de incorporación, volumen y métrica objetivo. Le ayudamos a decidir antes de comprar.', sample: 'Solicitar muestra o cotización', project: 'Plantear un reto técnico',
  },
  en: {
    back: 'All materials', overview: 'Material profile', formats: 'Supply formats', uses: 'Reference applications', characterization: 'Relevant characterization',
    data: 'Data confirmed before quoting', property: 'Field', basis: 'Delivery basis', identity: 'Identity and composition', identityValue: 'Defined for the selected grade', geometry: 'Geometry and distribution', geometryValue: 'Reported according to the agreed technique and scope', concentration: 'Concentration or solids content', concentrationValue: 'Specific to format and batch', evidence: 'Documentation', evidenceValue: 'TDS, SDS and/or CoA depending on product and scope',
    notice: 'Numeric values and tolerances are confirmed in the grade data sheet or proposal. This page does not replace the contractual specification.',
    ctaTitle: 'Is this the right material for your process?', ctaCopy: 'Share your matrix, incorporation method, volume and target metric. We can help you decide before purchasing.', sample: 'Request a sample or quote', project: 'Describe a technical challenge',
  },
}

export function generateStaticParams() {
  return materials.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params
  const material = materials.find((item) => item.slug === slug)
  if (!isLocale(locale) || !material) return {}
  return localizedMetadata({ locale, title: material.name[locale], description: material.summary[locale], path: `materiales/${slug}` })
}

export default async function MaterialDetailPage({ params }) {
  const { locale, slug } = await params
  const material = materials.find((item) => item.slug === slug)
  if (!isLocale(locale) || !material) notFound()
  const t = labels[locale]

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <Link className="back-link" href={pathFor(locale, 'materiales')}>← {t.back}</Link>
          <div className="detail-hero__grid">
            <div><p className="eyebrow eyebrow--accent">{material.eyebrow[locale]}</p><h1>{material.name[locale]}</h1><p>{material.summary[locale]}</p></div>
            <div className="detail-code"><span>{t.overview}</span><strong>{material.code}</strong><small>{locale === 'es' ? 'Especificación por grado y lote' : 'Grade- and batch-specific'}</small></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-columns">
          <div className="detail-list"><p className="eyebrow">01 · {t.formats}</p><ul>{material.formats[locale].map((value) => <li key={value}>{value}</li>)}</ul></div>
          <div className="detail-list"><p className="eyebrow">02 · {t.uses}</p><ul>{material.applications[locale].map((value) => <li key={value}>{value}</li>)}</ul></div>
          <div className="detail-list"><p className="eyebrow">03 · {t.characterization}</p><ul>{material.characterization.map((value) => <li key={value}>{value}</li>)}</ul></div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container technical-block">
          <div><p className="eyebrow">{t.data}</p><h2>{locale === 'es' ? 'Una ficha útil distingue dato, método y alcance.' : 'A useful data sheet separates data, method and scope.'}</h2></div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>{t.property}</th><th>{t.basis}</th></tr></thead>
              <tbody>
                <tr><td>{t.identity}</td><td>{t.identityValue}</td></tr>
                <tr><td>{t.geometry}</td><td>{t.geometryValue}</td></tr>
                <tr><td>{t.concentration}</td><td>{t.concentrationValue}</td></tr>
                <tr><td>{t.evidence}</td><td>{t.evidenceValue}</td></tr>
              </tbody>
            </table>
            <p className="table-note">{t.notice}</p>
          </div>
        </div>
      </section>

      <section className="final-cta final-cta--light">
        <div className="container final-cta__inner">
          <div><p className="eyebrow">{material.code}</p><h2>{t.ctaTitle}</h2><p>{t.ctaCopy}</p></div>
          <div className="button-row"><Link className="button button--primary" href={`${pathFor(locale, 'contacto')}?tipo=muestra&material=${material.slug}`}>{t.sample}</Link><Link className="button button--ghost-dark" href={`${pathFor(locale, 'contacto')}?tipo=proyecto`}>{t.project}</Link></div>
        </div>
      </section>
    </>
  )
}
