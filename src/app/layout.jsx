import './globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/site'

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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
