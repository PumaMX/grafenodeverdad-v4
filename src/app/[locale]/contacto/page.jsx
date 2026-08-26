import { notFound } from 'next/navigation'
import EditorialPage from '@/components/editorial-page'
import { isLocale, localizedMetadata } from '@/lib/site'
import { getEditorialPage, localizedSeo } from '@/sanity/lib/content'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const content = await getEditorialPage('contacto', { stega: false })
  return localizedMetadata({ locale, ...localizedSeo(content, locale), path: 'contacto' })
}

export default async function ContactPage({ params, searchParams }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <EditorialPage content={await getEditorialPage('contacto')} locale={locale} compact searchParams={await searchParams} />
}
