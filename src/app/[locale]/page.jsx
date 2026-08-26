import Image from 'next/image'
import Link from 'next/link'
import { ItemCard, SectionHeading } from '@/components/primitives'
import { CONTACT_EMAIL, isLocale, localizedMetadata, pathFor, SITE_URL } from '@/lib/site'
import { getHomeContent, getMaterials, getSolutions, mergeHomeCopy, resolveContentHref } from '@/sanity/lib/content'
import { notFound } from 'next/navigation'

const copy = {
  es: {
    title: 'Del material correcto a una integración que sí escala.',
    description: 'Materiales grafénicos, formulación y co-desarrollo para convertir una hipótesis técnica en una decisión industrial medible.',
    eyebrow: 'Materiales avanzados · México',
    primary: 'Encontrar un material',
    secondary: 'Resolver un reto técnico',
    imageCaption: 'Visualización editorial generada; no representa una instalación o lote específico.',
    signals: [['MX', 'Empresa mexicana'], ['25+', 'Años de experiencia acumulada'], ['04', 'Etapas: definir, seleccionar, validar y escalar']],
    chooseEyebrow: 'Dos puntos de partida',
    chooseTitle: '¿Qué necesita mover hoy?',
    chooseCopy: 'Empiece por la ruta que mejor describe su proyecto. Ambas terminan en criterios de éxito verificables.',
    materialPath: { number: '01', title: 'Necesito un material', copy: 'Compare familias, formatos, técnicas de caracterización y aplicaciones de referencia.', link: 'Explorar el catálogo' },
    problemPath: { number: '02', title: 'Necesito mejorar desempeño', copy: 'Traducimos su reto en una hipótesis, una formulación y un plan de validación.', link: 'Definir mi proyecto' },
    materialsEyebrow: 'Materiales', materialsTitle: 'Una familia para cada interfaz.', materialsCopy: 'La especificación final se confirma según grado, formato, volumen y método de integración.', materialsLink: 'Ver los seis materiales', cardLink: 'Ficha técnica',
    processEyebrow: 'Co-desarrollo', processTitle: 'Menos promesas. Más decisiones con evidencia.', processCopy: 'Una secuencia breve para reducir incertidumbre antes de escalar.',
    steps: [
      ['01', 'Definir', 'Objetivo funcional, matriz, proceso y criterio de éxito.'],
      ['02', 'Seleccionar', 'Material, formato y ventana inicial de formulación.'],
      ['03', 'Validar', 'Muestra o prototipo con caracterización orientada al riesgo.'],
      ['04', 'Escalar', 'Ajuste de proceso, repetibilidad y siguiente decisión técnica.'],
    ],
    solutionsEyebrow: 'Soluciones', solutionsTitle: 'El grafeno no es el producto final.', solutionsCopy: 'Diseñamos la interfaz entre el material, el proceso y el desempeño que importa.', solutionsLink: 'Explorar soluciones',
    evidenceEyebrow: 'Calidad y evidencia', evidenceTitle: 'Cada dato debe responder tres preguntas.',
    evidence: [
      ['¿Qué se midió?', 'Propiedad, unidad y criterio claramente definidos.'],
      ['¿Cómo se midió?', 'Método, preparación de muestra y condiciones relevantes.'],
      ['¿A qué aplica?', 'Grado, formato y lote asociados al resultado.'],
    ],
    evidenceCopy: 'TDS, SDS y CoA cumplen funciones distintas. Nuestro marco documental evita usar “certificado” como sustituto de datos verificables.',
    evidenceLink: 'Conocer el marco de calidad',
    finalEyebrow: 'Su siguiente experimento', finalTitle: 'Cuéntenos qué quiere mejorar.', finalCopy: 'Con la aplicación, la matriz, el proceso y una métrica objetivo podemos proponer el siguiente paso con más precisión.', finalAction: 'Preparar un brief técnico', finalMail: 'Escribir directamente',
  },
  en: {
    title: 'From the right material to an integration that can scale.',
    description: 'Graphene materials, formulation and co-development to turn a technical hypothesis into a measurable industrial decision.',
    eyebrow: 'Advanced materials · Mexico',
    primary: 'Find a material',
    secondary: 'Solve a technical challenge',
    imageCaption: 'Generated editorial visualization; it does not represent a specific facility or batch.',
    signals: [['MX', 'Mexican company'], ['25+', 'Years of combined experience'], ['04', 'Stages: define, select, validate and scale']],
    chooseEyebrow: 'Two starting points',
    chooseTitle: 'What do you need to move today?',
    chooseCopy: 'Start with the path that best describes your project. Both end in verifiable success criteria.',
    materialPath: { number: '01', title: 'I need a material', copy: 'Compare families, formats, characterization techniques and reference applications.', link: 'Explore the catalog' },
    problemPath: { number: '02', title: 'I need better performance', copy: 'We translate your challenge into a hypothesis, a formulation and a validation plan.', link: 'Define my project' },
    materialsEyebrow: 'Materials', materialsTitle: 'A family for every interface.', materialsCopy: 'The final specification is confirmed according to grade, format, volume and integration method.', materialsLink: 'View all six materials', cardLink: 'Technical profile',
    processEyebrow: 'Co-development', processTitle: 'Fewer promises. More evidence-backed decisions.', processCopy: 'A short sequence to reduce uncertainty before scaling.',
    steps: [
      ['01', 'Define', 'Functional target, matrix, process and success criterion.'],
      ['02', 'Select', 'Material, format and initial formulation window.'],
      ['03', 'Validate', 'Sample or prototype with risk-oriented characterization.'],
      ['04', 'Scale', 'Process adjustment, repeatability and the next technical decision.'],
    ],
    solutionsEyebrow: 'Solutions', solutionsTitle: 'Graphene is not the end product.', solutionsCopy: 'We design the interface between the material, the process and the performance that matters.', solutionsLink: 'Explore solutions',
    evidenceEyebrow: 'Quality and evidence', evidenceTitle: 'Every data point should answer three questions.',
    evidence: [
      ['What was measured?', 'Clearly defined property, unit and criterion.'],
      ['How was it measured?', 'Method, sample preparation and relevant conditions.'],
      ['What does it apply to?', 'Grade, format and batch associated with the result.'],
    ],
    evidenceCopy: 'TDS, SDS and CoA serve different purposes. Our documentation framework avoids using “certified” as a substitute for verifiable data.',
    evidenceLink: 'See the quality framework',
    finalEyebrow: 'Your next experiment', finalTitle: 'Tell us what you want to improve.', finalCopy: 'With the application, matrix, process and a target metric, we can propose a more precise next step.', finalAction: 'Prepare a technical brief', finalMail: 'Email us directly',
  },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = mergeHomeCopy(copy[locale], await getHomeContent(), locale)
  return localizedMetadata({ locale, title: t.title, description: t.description })
}

export default async function HomePage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const [homeContent, materials, solutions] = await Promise.all([getHomeContent(), getMaterials(), getSolutions()])
  const t = mergeHomeCopy(copy[locale], homeContent, locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grafeno de Verdad, S.A. de C.V.',
    url: `${SITE_URL}/${locale}`,
    email: CONTACT_EMAIL,
    areaServed: 'MX',
    knowsAbout: ['Graphene', 'Graphene oxide', '2D materials', 'Nanotechnology'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--accent">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero__copy">{t.description}</p>
            <div className="button-row">
              <Link className="button button--primary" href={resolveContentHref(locale, t.primaryHref, pathFor(locale, 'materiales'))}>{t.primary} <span aria-hidden="true">→</span></Link>
              <Link className="button button--ghost" href={resolveContentHref(locale, t.secondaryHref, pathFor(locale, 'contacto'))}>{t.secondary}</Link>
            </div>
          </div>
          <figure className="hero__visual">
            <div className="hero__image-wrap">
              <Image src={t.heroImage || '/hero-materials-v5.webp'} alt={t.heroImageAlt || ''} fill priority sizes="(max-width: 760px) 92vw, 46vw" className="hero__image" />
              <div className="material-tag"><span>sp²</span><strong>Carbon</strong><small>2D lattice</small></div>
            </div>
            <figcaption>{t.imageCaption}</figcaption>
          </figure>
        </div>
        <ul className="container signal-strip" aria-label={locale === 'es' ? 'Datos clave' : 'Key facts'}>
          {t.signals.map(([value, label]) => <li key={label}><strong>{value}</strong><span>{label}</span></li>)}
        </ul>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading eyebrow={t.chooseEyebrow} title={t.chooseTitle} copy={t.chooseCopy} />
          <div className="journey-grid">
            {[t.materialPath, t.problemPath].map((journey, index) => (
              <Link className="journey" key={journey.number} href={index === 0 ? pathFor(locale, 'materiales') : pathFor(locale, 'contacto')}>
                <span className="journey__number">{journey.number}</span>
                <div><h3>{journey.title}</h3><p>{journey.copy}</p><span className="text-link">{journey.link} →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t.materialsEyebrow}
            title={t.materialsTitle}
            copy={t.materialsCopy}
            action={<Link className="text-link text-link--standalone" href={pathFor(locale, 'materiales')}>{t.materialsLink} →</Link>}
          />
          <div className="card-grid card-grid--three">
            {materials.slice(0, 3).map((item) => <ItemCard key={item.slug} item={item} locale={locale} href={pathFor(locale, `materiales/${item.slug}`)} label={t.cardLink} />)}
          </div>
        </div>
      </section>

      <section className="section section--dark process-section">
        <div className="container">
          <SectionHeading eyebrow={t.processEyebrow} title={t.processTitle} copy={t.processCopy} />
          <ol className="process-grid">
            {t.steps.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t.solutionsEyebrow}
            title={t.solutionsTitle}
            copy={t.solutionsCopy}
            action={<Link className="text-link text-link--standalone" href={pathFor(locale, 'soluciones')}>{t.solutionsLink} →</Link>}
          />
          <div className="solution-list">
            {solutions.slice(0, 5).map((solution, index) => (
              <Link key={solution.slug} href={pathFor(locale, `soluciones/${solution.slug}`)}>
                <span>0{index + 1}</span><h3>{solution.name[locale]}</h3><p>{solution.summary[locale]}</p><b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--evidence">
        <div className="container evidence-grid">
          <div>
            <p className="eyebrow">{t.evidenceEyebrow}</p>
            <h2>{t.evidenceTitle}</h2>
            <p>{t.evidenceCopy}</p>
            <Link className="button button--dark" href={pathFor(locale, 'calidad')}>{t.evidenceLink}</Link>
          </div>
          <div className="evidence-questions">
            {t.evidence.map(([question, answer], index) => <div key={question}><span>0{index + 1}</span><h3>{question}</h3><p>{answer}</p></div>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta__inner">
          <div><p className="eyebrow eyebrow--accent">{t.finalEyebrow}</p><h2>{t.finalTitle}</h2><p>{t.finalCopy}</p></div>
          <div className="button-row"><Link className="button button--primary" href={pathFor(locale, 'contacto')}>{t.finalAction}</Link><a className="button button--ghost" href={`mailto:${CONTACT_EMAIL}`}>{t.finalMail}</a></div>
        </div>
      </section>
    </>
  )
}
