import Link from 'next/link'
import BrandMark from './brand-mark'
import { CONTACT_EMAIL, pathFor } from '@/lib/site'
import { ui } from '@/data/site-content'

export default function SiteFooter({ locale, settings }) {
  const t = ui[locale]
  const contactEmail = settings?.contactEmail || CONTACT_EMAIL
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <BrandMark locale={locale} siteName={settings?.siteName} tagline={settings?.tagline?.[locale]} />
          <p className="site-footer__statement">
            {settings?.footerStatement?.[locale] || (locale === 'es'
              ? 'Materiales grafénicos verificables, diseñados para integrarse y escalar. Hechos en México.'
              : 'Verifiable graphene materials, designed to integrate and scale. Made in Mexico.')}
          </p>
        </div>
        <div>
          <p className="footer-label">{settings?.footerExploreLabel?.[locale] || (locale === 'es' ? 'Explorar' : 'Explore')}</p>
          <Link href={pathFor(locale, 'materiales')}>{t.nav.materials}</Link>
          <Link href={pathFor(locale, 'soluciones')}>{t.nav.solutions}</Link>
          <Link href={pathFor(locale, 'calidad')}>{t.nav.quality}</Link>
        </div>
        <div>
          <p className="footer-label">{settings?.footerContactLabel?.[locale] || (locale === 'es' ? 'Conversemos' : 'Let’s talk')}</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <Link href={pathFor(locale, 'contacto')}>{t.nav.contact}</Link>
        </div>
      </div>
      <div className="container site-footer__legal">
        <span>© {new Date().getFullYear()} {settings?.legalName || 'Grafeno de Verdad, S.A. de C.V.'}</span>
        <span>{settings?.footerLegal?.[locale] || (locale === 'es' ? 'México · Información técnica sujeta a confirmación por grado y lote.' : 'Mexico · Technical information is subject to grade and batch confirmation.')}</span>
      </div>
    </footer>
  )
}
