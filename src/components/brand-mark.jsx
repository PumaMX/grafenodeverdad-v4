import Link from 'next/link'

export default function BrandMark({ locale = 'es', compact = false }) {
  return (
    <Link className="brand" href={`/${locale}`} aria-label={locale === 'es' ? 'Grafeno de Verdad, inicio' : 'Grafeno de Verdad, home'}>
      <svg className="brand__symbol" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 8 24 2l10 6v12l10 6v12l-10 6-10-6-10 6-10-6V26l10-6V8Z" />
        <path d="m14 20 10 6 10-6M24 26v12M4 26l10 6 10-6 10 6 10-6" />
        <circle cx="24" cy="26" r="2.4" />
      </svg>
      <span className="brand__type">
        <span>Grafeno de Verdad</span>
        {!compact && <small>{locale === 'es' ? 'Materiales avanzados' : 'Advanced materials'}</small>}
      </span>
    </Link>
  )
}
