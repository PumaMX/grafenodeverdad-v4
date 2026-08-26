import { notFound } from 'next/navigation'
import ProjectBriefForm from '@/components/project-brief-form'
import { EditorialSections, PageHero } from '@/components/primitives'
import { CONTACT_EMAIL, isLocale, localizedMetadata } from '@/lib/site'
import { getEditorialPage, mergeHeroCopy } from '@/sanity/lib/content'

const copy = {
  es: { title: 'Empecemos por la pregunta correcta', eyebrow: 'Iniciar proyecto', description: 'Comparta el contexto técnico mínimo. Le responderemos con preguntas, opciones y un siguiente paso; no con una promesa genérica.', response: 'Qué ayuda a responder mejor', points: ['Aplicación y material base', 'Proceso actual y sus restricciones', 'Métrica objetivo o modo de falla', 'Escala de prueba y calendario'], direct: 'También puede escribir directamente a' },
  en: { title: 'Let’s start with the right question', eyebrow: 'Start a project', description: 'Share the minimum technical context. We will reply with questions, options and a next step—not a generic promise.', response: 'What helps us respond better', points: ['Application and base material', 'Current process and constraints', 'Target metric or failure mode', 'Test scale and timeline'], direct: 'You can also email us directly at' },
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = mergeHeroCopy(copy[locale], await getEditorialPage('contacto'), locale)
  return localizedMetadata({ locale, title: t.title, description: t.description, path: 'contacto' })
}

export default async function ContactPage({ params, searchParams }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const query = await searchParams
  const pageContent = await getEditorialPage('contacto')
  const t = mergeHeroCopy(copy[locale], pageContent, locale)
  return (
    <><PageHero eyebrow={t.eyebrow} title={t.title} copy={t.description} image={pageContent?.heroImage} locale={locale} compact />
      <EditorialSections sections={pageContent?.sections} locale={locale} />
      <section className="section contact-section"><div className="container contact-grid"><aside><p className="eyebrow">{t.response}</p><ul>{t.points.map((point) => <li key={point}>{point}</li>)}</ul><p>{t.direct}<br /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p></aside><ProjectBriefForm locale={locale} defaults={{ material: query?.material, solution: query?.solucion }} /></div></section>
    </>
  )
}
