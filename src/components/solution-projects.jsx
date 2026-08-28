import Image from 'next/image'
import { stegaClean } from 'next-sanity'
import { editorialImageStyle, ImageProvenance } from '@/components/editorial-image-meta'
import { localized } from '@/sanity/lib/content'

const copy = {
  es: {
    eyebrow: 'Cartera de proyectos',
    title: 'Rutas de aplicación dentro de esta familia',
    intro: 'Cada proyecto parte de una hipótesis técnica y de una métrica de validación. Su estado indica el grado de definición actual; no sustituye la validación en el sistema del cliente.',
    objective: 'Objetivo técnico',
    validation: 'Qué se mediría',
    statuses: {
      evaluation: 'Disponible para evaluación técnica',
      coDevelopment: 'Línea de co-desarrollo',
      concept: 'Oportunidad de proyecto',
    },
  },
  en: {
    eyebrow: 'Project portfolio',
    title: 'Application routes within this family',
    intro: 'Each project starts from a technical hypothesis and a validation metric. Its status indicates its current level of definition; it does not replace validation in the customer system.',
    objective: 'Technical objective',
    validation: 'What would be measured',
    statuses: {
      evaluation: 'Available for technical evaluation',
      coDevelopment: 'Co-development line',
      concept: 'Project opportunity',
    },
  },
}

export default function SolutionProjects({ projects = [], locale }) {
  if (!projects.length) return null
  const t = copy[locale]

  return (
    <section className="section solution-projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
            <p>{t.intro}</p>
          </div>
        </div>
        <div className="solution-project-grid">
          {projects.map((project, index) => {
            const status = stegaClean(project.status) || 'coDevelopment'
            const validation = project.validation?.[locale] || []
            return (
              <article className="solution-project" key={project._key || `${status}-${index}`}>
                {project.image?.url && (
                  <figure className="solution-project__media">
                    <Image src={project.image.url} alt={localized(project.image.alt, locale)} fill sizes="(max-width: 760px) 92vw, 44vw" style={editorialImageStyle(project.image)} />
                    <ImageProvenance image={project.image} locale={locale} />
                    {localized(project.image.caption, locale) && <figcaption>{localized(project.image.caption, locale)}</figcaption>}
                  </figure>
                )}
                <div className="solution-project__content">
                  <span className={`project-status project-status--${status}`}>{t.statuses[status] || t.statuses.coDevelopment}</span>
                  <h3>{localized(project.title, locale)}</h3>
                  <p>{localized(project.summary, locale)}</p>
                  {localized(project.objective, locale) && <div className="solution-project__objective"><strong>{t.objective}</strong><p>{localized(project.objective, locale)}</p></div>}
                  {validation.length > 0 && <div className="solution-project__validation"><strong>{t.validation}</strong><ul>{validation.map((item) => <li key={item}>{item}</li>)}</ul></div>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
