import { notFound } from 'next/navigation'
import EditorialPage from '@/components/editorial-page'
import { isLocale, localizedMetadata } from '@/lib/site'
import { getEditorialPage, localizedSeo } from '@/sanity/lib/content'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const content = await getEditorialPage('materiales', { stega: false })
  return localizedMetadata({ locale, ...localizedSeo(content, locale), path: 'materiales' })
}

export default async function MaterialsPage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <EditorialPage content={await getEditorialPage('materiales')} locale={locale} />
}
