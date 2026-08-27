import Link from 'next/link'
import { notFound } from 'next/navigation'
import DirectorMessageDialog from '@/components/director-message-dialog'
import HeroCarousel from '@/components/hero-carousel'
import PageBuilder from '@/components/page-builder'
import { CONTACT_EMAIL, isLocale, localizedMetadata, pathFor, SITE_URL } from '@/lib/site'
import { getHomeContent, localizedSeo, mergeHomeCopy, resolveContentHref } from '@/sanity/lib/content'

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const content = await getHomeContent({ stega: false })
  return localizedMetadata({ locale, ...localizedSeo(content, locale) })
}

export default async function HomePage({ params }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const homeContent = await getHomeContent()
  const t = mergeHomeCopy({}, homeContent, locale)
  const signals = (t.signals || []).filter((signal) => signal.key !== 'mexico' && signal.value !== 'MX')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grafeno de Verdad, S.A. de C.V.',
    url: `${SITE_URL}/${locale}`,
    email: CONTACT_EMAIL,
    areaServed: 'MX',
    knowsAbout: ['Graphene', 'Graphene oxide', '2D materials', 'Nanotechnology'],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--accent">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero__copy">{t.description}</p>
            <div className="button-row">
              <Link className="button button--primary" href={resolveContentHref(locale, t.primaryHref, pathFor(locale, 'materiales'))}>{t.primary} <span aria-hidden="true">→</span></Link>
              <Link className="button button--ghost" href={resolveContentHref(locale, t.secondaryHref, pathFor(locale, 'contacto'))}>{t.secondary}</Link>
            </div>
          </div>
          <HeroCarousel slides={t.slides} locale={locale} />
        </div>
        <ul className="container signal-strip" aria-label={locale === 'es' ? 'Datos clave' : 'Key facts'}>
          <li className="signal-strip__director"><DirectorMessageDialog locale={locale} message={t.directorMessage} /></li>
          {signals.map(({ key, value, label }) => <li key={key || `${value}-${label}`}><strong>{value}</strong><span>{label}</span></li>)}
        </ul>
      </section>
      <PageBuilder sections={homeContent?.sections} locale={locale} />
    </>
  )
}
