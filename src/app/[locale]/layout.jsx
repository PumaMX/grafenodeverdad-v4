import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { isLocale, LOCALES } from '@/lib/site'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} />
      <main id="contenido">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  )
}
