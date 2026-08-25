import '../globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
}

export default function RedirectLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
