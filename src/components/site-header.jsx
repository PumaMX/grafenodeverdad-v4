'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import BrandMark from './brand-mark'
import { alternateLocale, pathFor } from '@/lib/site'
import { ui } from '@/data/site-content'
import { stegaClean } from 'next-sanity'

const navPaths = [
  ['materials', 'materiales'],
  ['solutions', 'soluciones'],
  ['capabilities', 'capacidades'],
  ['academia', 'academia-industria'],
  ['quality', 'calidad'],
  ['company', 'empresa'],
  ['resources', 'recursos'],
]

export default function SiteHeader({ locale, settings }) {
  const [openPath, setOpenPath] = useState(null)
  const pathname = usePathname()
  const open = openPath === pathname
  const t = ui[locale]
  const alternate = alternateLocale(locale)
  const alternatePath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${alternate}`)
  const navigation = settings?.navigation?.length
    ? settings.navigation
    : navPaths.map(([key, href]) => ({ _key: key, href, label: { [locale]: t.nav[key] } }))
  const tagline = settings?.tagline?.[locale]
  const brandName = settings?.legalName || settings?.siteName || 'Grafeno de Verdad, S.A. de C.V.'

  return (
    <>
      <a className="skip-link" href="#contenido">{t.skip}</a>
      <header className="site-header">
        <div className="site-header__inner">
          <BrandMark locale={locale} siteName={brandName} tagline={tagline} />
          <nav id="main-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'} onClick={(event) => event.target.closest('a') && setOpenPath(null)}>
            {navigation.map((item, index) => {
              const path = stegaClean(item.href || '')
              const href = /^(https?:|mailto:|tel:)/.test(path) ? path : pathFor(locale, path)
              return (
              <Link key={item._key || `${path}-${index}`} href={href} className={pathname.startsWith(href) ? 'is-active' : ''}>
                {item.label?.[locale]}
              </Link>
              )
            })}
            <Link className="language-link" href={alternatePath || `/${alternate}`} hrefLang={alternate}>
              {t.languageLabel}
            </Link>
            <Link className="button button--small button--primary" href={pathFor(locale, stegaClean(settings?.contactCta?.href || 'contacto'))}>
              {settings?.contactCta?.label?.[locale] || t.nav.contact}
            </Link>
          </nav>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpenPath(open ? null : pathname)}>
            <span>{open ? t.close : t.menu}</span>
            <span className="menu-button__icon" aria-hidden="true">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </header>
    </>
  )
}
