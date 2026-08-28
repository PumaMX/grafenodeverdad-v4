import Image from 'next/image'
import Link from 'next/link'
import { editorialImageStyle, ImageProvenance } from '@/components/editorial-image-meta'
import { CONTACT_EMAIL, pathFor } from '@/lib/site'
import { localized } from '@/sanity/lib/content'

const copy = {
  es: {
    snapshot: 'Ficha de aplicación', technicalName: 'Nombre técnico', problem: 'Problema industrial', solution: 'Solución basada en grafeno', advantages: 'Ventajas esperadas',
    status: 'Estado del proyecto', maturity: 'Madurez actual', evidence: 'Evidencia disponible', milestone: 'Siguiente hito', modality: 'Modalidad de colaboración', trl: 'TRL actual',
    sectors: 'Sectores objetivo', pilot: 'Proyecto piloto', scope: 'Alcance', validation: 'Qué validaremos', gate: 'Criterio de avance',
    precedents: 'Precedentes científicos', precedentIntro: 'Referencias internacionales que orientan la ruta técnica. No implican colaboración, aval, licencia ni transferencia tecnológica a GdV.',
    contribution: 'Qué reporta', implication: 'Qué aporta a la ruta GdV', boundary: 'Límite de la comparación', references: 'Referencias selectivas',
    contact: 'Convirtamos el reto en un piloto verificable', contactRole: 'Director de Investigación, Desarrollo Tecnológico e Innovación (I+D+i)', start: 'Platicar sobre el proyecto',
  },
  en: {
    snapshot: 'Application profile', technicalName: 'Technical name', problem: 'Industrial problem', solution: 'Graphene-based solution', advantages: 'Expected advantages',
    status: 'Project status', maturity: 'Current maturity', evidence: 'Available evidence', milestone: 'Next milestone', modality: 'Collaboration model', trl: 'Current TRL',
    sectors: 'Target sectors', pilot: 'Pilot project', scope: 'Scope', validation: 'What we will validate', gate: 'Advancement criterion',
    precedents: 'Scientific precedents', precedentIntro: 'International references that inform the technical pathway. They do not imply collaboration, endorsement, licensing or technology transfer to GdV.',
    contribution: 'Reported contribution', implication: 'Relevance to GdV’s pathway', boundary: 'Comparison boundary', references: 'Selected references',
    contact: 'Turn the challenge into a verifiable pilot', contactRole: 'Director of Research, Technological Development and Innovation (R&D+i)', start: 'Discuss the project',
  },
}

function TextPanel({ label, children }) {
  if (!children) return null
  return <article className="application-panel"><p className="eyebrow">{label}</p><p>{children}</p></article>
}

function ExternalLink({ href, children }) {
  if (!href) return children
  return <a href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>
}

export default function SolutionApplicationProfile({ profile, locale, solution }) {
  if (!profile) return null
  const t = copy[locale]
  const websiteCopy = profile.websiteCopy?.[locale] || []
  const functions = profile.targetFunctions?.[locale] || []
  const sectors = profile.sectors?.[locale] || []
  const figure = profile.technicalFigure

  return (
    <>
      <section className="section application-intro">
        <div className="container application-intro__grid">
          <div>
            <p className="eyebrow">{t.snapshot}</p>
            <h2>{localized(profile.technicalName, locale)}</h2>
          </div>
          <div className="application-intro__copy">{websiteCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="section section--light application-core">
        <div className="container">
          <div className="application-panel-grid">
            <TextPanel label={t.problem}>{localized(profile.industrialProblem, locale)}</TextPanel>
            <TextPanel label={t.solution}>{localized(profile.grapheneSolution, locale)}</TextPanel>
            <TextPanel label={t.advantages}>{localized(profile.expectedAdvantages, locale)}</TextPanel>
          </div>
        </div>
      </section>

      <section className="section application-status">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{localized(profile.publicStatus, locale)}</p><h2>{t.status}</h2></div><div className="trl-marker"><span>{t.trl}</span><strong>{profile.trl}</strong></div></div>
          <div className="application-status-grid">
            <TextPanel label={t.maturity}>{localized(profile.maturity, locale)}</TextPanel>
            <TextPanel label={t.evidence}>{localized(profile.evidence, locale)}</TextPanel>
            <TextPanel label={t.milestone}>{localized(profile.nextMilestone, locale)}</TextPanel>
            <TextPanel label={t.modality}>{localized(profile.modality, locale)}</TextPanel>
          </div>
          <div className="application-taxonomy">
            <div><p className="eyebrow">{locale === 'es' ? 'Funciones objetivo' : 'Target functions'}</p><ul>{functions.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div><p className="eyebrow">{t.sectors}</p><ul>{sectors.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      {figure?.url && (
        <section className="section section--light application-figure"><div className="container"><figure>
          <div className="application-figure__media"><Image src={figure.url} alt={localized(figure.alt, locale)} fill sizes="(max-width: 760px) 92vw, 760px" style={editorialImageStyle(figure)} /><ImageProvenance image={figure} locale={locale} /></div>
          <figcaption>{localized(figure.caption, locale)} {figure.sourceUrl && <ExternalLink href={figure.sourceUrl}>{locale === 'es' ? 'Consultar fuente' : 'View source'}</ExternalLink>}</figcaption>
        </figure></div></section>
      )}

      <section className="section application-pilot">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">{locale === 'es' ? 'De la conversación a la evidencia' : 'From conversation to evidence'}</p><h2>{t.pilot}</h2></div></div>
          <div className="application-pilot-grid">
            <TextPanel label={`01 · ${t.scope}`}>{localized(profile.pilotScope, locale)}</TextPanel>
            <TextPanel label={`02 · ${t.validation}`}>{localized(profile.pilotValidation, locale)}</TextPanel>
            <TextPanel label={`03 · ${t.gate}`}>{localized(profile.pilotGate, locale)}</TextPanel>
          </div>
        </div>
      </section>

      {profile.precedents?.length > 0 && (
        <section className="section section--light application-precedents"><div className="container">
          <div className="section-heading"><div><p className="eyebrow">{locale === 'es' ? 'Fundamento técnico' : 'Technical foundation'}</p><h2>{t.precedents}</h2><p>{localized(profile.scientificContext, locale) || t.precedentIntro}</p></div></div>
          <div className="precedent-list">{profile.precedents.map((item) => <article key={item._key || item.milestone}>
            <h3><ExternalLink href={item.url}>{item.milestone}</ExternalLink></h3>
            <dl><div><dt>{t.contribution}</dt><dd>{localized(item.contribution, locale)}</dd></div><div><dt>{t.implication}</dt><dd>{localized(item.implication, locale)}</dd></div><div><dt>{t.boundary}</dt><dd>{localized(item.boundary, locale)}</dd></div></dl>
          </article>)}</div>
        </div></section>
      )}

      {profile.references?.length > 0 && (
        <section className="section application-references"><div className="container">
          <p className="eyebrow">{locale === 'es' ? 'Lectura técnica' : 'Technical reading'}</p><h2>{t.references}</h2>
          <ol>{profile.references.map((reference) => <li key={reference._key || reference.citation}><ExternalLink href={reference.url}>{reference.citation}</ExternalLink>{localized(reference.context, locale) && <p>{localized(reference.context, locale)}</p>}</li>)}</ol>
        </div></section>
      )}

      <section className="final-cta application-contact"><div className="container final-cta__inner"><div><p className="eyebrow">{localized(profile.publicStatus, locale)}</p><h2>{t.contact}</h2><p>{localized(profile.contactPrompt, locale)}</p><address><strong>Dr. José Luis Rodríguez López</strong><br />{t.contactRole}<br /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></address></div><Link className="button button--primary" href={pathFor(locale, `contacto?tipo=proyecto&solucion=${solution.slug}`)}>{t.start}</Link></div></section>
    </>
  )
}
