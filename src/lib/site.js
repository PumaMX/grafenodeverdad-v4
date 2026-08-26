export const SITE_NAME = 'Grafeno de Verdad'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://grafenodeverdad-v4.vercel.app'
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@grafeno.mx'
export const LOCALES = ['es', 'en']

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
