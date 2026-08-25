import '../globals.css'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { isLocale, LOCALES, SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Materiales grafénicos verificables`,
    template: `%s — ${SITE_NAME}`,
  },
  description: 'Materiales grafénicos, formulación, caracterización y co-desarrollo para proyectos que necesitan llegar del laboratorio al piloto.',
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  keywords: ['grafeno', 'óxido de grafeno', 'materiales 2D', 'nanotecnología', 'México'],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: new URL('/opengraph-image', SITE_URL).toString(), width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: 'summary_large_image', images: [new URL('/opengraph-image', SITE_URL).toString()] },
  robots: { index: true, follow: true },
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <SiteHeader locale={locale} />
        <main id="contenido">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  )
}
