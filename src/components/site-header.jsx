'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import BrandMark from './brand-mark'
import { alternateLocale, pathFor } from '@/lib/site'
import { ui } from '@/data/site-content'

const navPaths = [
  ['materials', 'materiales'],
  ['solutions', 'soluciones'],
  ['capabilities', 'capacidades'],
  ['quality', 'calidad'],
  ['company', 'empresa'],
  ['resources', 'recursos'],
]

export default function SiteHeader({ locale }) {
  const [openPath, setOpenPath] = useState(null)
  const pathname = usePathname()
  const open = openPath === pathname
  const t = ui[locale]
  const alternate = alternateLocale(locale)
  const alternatePath = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${alternate}`)

  return (
    <>
      <a className="skip-link" href="#contenido">{t.skip}</a>
      <header className="site-header">
        <div className="site-header__inner">
          <BrandMark locale={locale} />
          <nav id="main-nav" className={`site-nav ${open ? 'is-open' : ''}`} aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'} onClick={(event) => event.target.closest('a') && setOpenPath(null)}>
            {navPaths.map(([key, path]) => (
              <Link key={key} href={pathFor(locale, path)} className={pathname.startsWith(pathFor(locale, path)) ? 'is-active' : ''}>
                {t.nav[key]}
              </Link>
            ))}
            <Link className="language-link" href={alternatePath || `/${alternate}`} hrefLang={alternate}>
              {t.languageLabel}
            </Link>
            <Link className="button button--small button--primary" href={pathFor(locale, 'contacto')}>
              {t.nav.contact}
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
