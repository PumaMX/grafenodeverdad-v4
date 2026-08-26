import { notFound } from 'next/navigation'
import EditorialPage from '@/components/editorial-page'
import { isLocale, localizedMetadata } from '@/lib/site'
import { getEditorialPage, localizedSeo } from '@/sanity/lib/content'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const content = await getEditorialPage('empresa', { stega: false })
  return localizedMetadata({ locale, ...localizedSeo(content, locale), path: 'empresa' })
}

export default async function CompanyPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <EditorialPage content={await getEditorialPage('empresa')} locale={locale} />
}
