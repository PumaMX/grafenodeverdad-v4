import Link from 'next/link'

const defaultTaglines = {
  es: 'Ingeniería e Innovación en Materiales van der Waals',
  en: 'Engineering and Innovation in van der Waals Materials',
}

const legacyTaglines = new Set(['Materiales avanzados', 'Advanced materials'])

export default function BrandMark({ locale = 'es', compact = false, siteName = 'Grafeno de Verdad, S.A. de C.V.', tagline }) {
  const descriptor = !tagline || legacyTaglines.has(tagline) ? defaultTaglines[locale] : tagline

  return (
    <Link className="brand" href={`/${locale}`} aria-label={locale === 'es' ? `${siteName}, inicio` : `${siteName}, home`}>
      <svg className="brand__symbol" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 8 24 2l10 6v12l10 6v12l-10 6-10-6-10 6-10-6V26l10-6V8Z" />
        <path d="m14 20 10 6 10-6M24 26v12M4 26l10 6 10-6 10 6 10-6" />
        <circle cx="24" cy="26" r="2.4" />
      </svg>
      <span className="brand__type">
        <span className="brand__name">{siteName}</span>
        {!compact && <small>{descriptor}</small>}
      </span>
    </Link>
  )
}
