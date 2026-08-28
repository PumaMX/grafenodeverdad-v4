export const SITE_NAME = 'Grafeno de Verdad'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://grafenodeverdad.vercel.app'
export const CONTACT_EMAIL = 'grafenodeverdad@gmail.com'
export const LOCALES = ['es', 'en']

const LEGACY_CONTACT_EMAILS = new Set([
  'contacto@grafeno.mx',
  'contacto@grafenodeverdad.mx',
  'contacto@grefenodeverdad.mx',
])

export function normalizeContactEmail(value) {
  const normalized = String(value || '').trim().toLowerCase()
  if (!normalized || LEGACY_CONTACT_EMAILS.has(normalized)) return CONTACT_EMAIL
  return normalized
}

export function isLocale(value) {
  return LOCALES.includes(value)
}

export function alternateLocale(locale) {
  return locale === 'es' ? 'en' : 'es'
}

export function pathFor(locale, path = '') {
  const normalized = path ? `/${path.replace(/^\//, '')}` : ''
  return `/${locale}${normalized}`
}

export function localizedMetadata({ locale, title, description, path = '', image, noIndex = false }) {
  const canonicalPath = pathFor(locale, path)
  const alternatePath = pathFor(alternateLocale(locale), path)

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        'es-MX': locale === 'es' ? canonicalPath : alternatePath,
        'en': locale === 'en' ? canonicalPath : alternatePath,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_MX'],
      ...(image ? { images: [{ url: image }] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}
