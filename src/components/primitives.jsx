import Image from 'next/image'
import Link from 'next/link'
import { itemText } from '@/data/site-content'
import { editorialImageStyle, ImageProvenance } from '@/components/editorial-image-meta'

export function ArrowIcon() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

export function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {action}
    </div>
  )
}

export function ItemCard({ item, locale, href, label, isSolution = false }) {
  const profile = item.applicationProfile
  const functions = profile?.targetFunctions?.[locale] || []
  const sectors = profile?.sectors?.[locale] || []
  return (
    <Link className={`item-card ${item.leadImage?.url ? 'item-card--with-image' : ''}`} href={href}>
      <div className="item-card__top">
        <span className="code">{item.code}</span>
        <ArrowIcon />
      </div>
      {item.leadImage?.url && (
        <div className="item-card__media">
          <Image src={item.leadImage.url} alt={itemText(item.leadImage, 'alt', locale) || ''} fill sizes="(max-width: 580px) 92vw, (max-width: 820px) 44vw, 30vw" style={editorialImageStyle(item.leadImage)} />
          <ImageProvenance image={item.leadImage} locale={locale} />
        </div>
      )}
      {item.eyebrow && <p className="eyebrow">{itemText(item, 'eyebrow', locale)}</p>}
      {isSolution && <span className="development-badge">{itemText(profile || {}, 'publicStatus', locale) || (locale === 'es' ? 'Aplicación en desarrollo' : 'Application in development')}</span>}
      <h3>{itemText(item, 'name', locale)}</h3>
      <p>{itemText(item, 'summary', locale)}</p>
      {profile && <div className="item-card__application-meta">
        {functions.length > 0 && <p><strong>{locale === 'es' ? 'Función objetivo' : 'Target function'}</strong>{functions.join(' · ')}</p>}
        {sectors.length > 0 && <p><strong>{locale === 'es' ? 'Sectores' : 'Sectors'}</strong>{sectors.slice(0, 3).join(' · ')}</p>}
      </div>}
      <span className="text-link">{label} <span aria-hidden="true">→</span></span>
    </Link>
  )
}

export function PageHero({ eyebrow, title, copy, image, locale = 'es', children, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className={`container ${image?.url ? 'page-hero__layout' : ''}`}>
        <div>
          <p className="eyebrow eyebrow--accent">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__copy">{copy}</p>
          {children}
        </div>
        {image?.url && (
          <figure className="page-hero__media">
            <Image src={image.url} alt={itemText(image, 'alt', locale) || ''} fill priority sizes="(max-width: 760px) 92vw, 38vw" style={editorialImageStyle(image)} />
            <ImageProvenance image={image} locale={locale} />
            {itemText(image, 'caption', locale) && <figcaption>{itemText(image, 'caption', locale)}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  )
}

export function EditorialSections({ sections, locale }) {
  if (!sections?.length) return null

  return sections.filter((section) => section.enabled !== false).map((section, index) => {
    const eyebrow = itemText(section, 'eyebrow', locale)
    const title = itemText(section, 'title', locale)
    const body = itemText(section, 'body', locale)
    const image = section.image
    const label = itemText(section.cta || {}, 'label', locale)
    const href = section.cta?.href
    const resolvedHref = href && (/^(https?:|mailto:|tel:|\/)/.test(href) ? href : `/${locale}/${href}`)

    return (
      <section className={`section editorial-section editorial-section--${section.style || 'light'}`} key={section._key || `${title}-${index}`}>
        <div className={`container editorial-section__grid ${image?.url ? 'editorial-section__grid--media' : ''}`}>
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {body && <p className="lead-copy">{body}</p>}
            {label && resolvedHref && <Link className="button button--primary" href={resolvedHref}>{label}</Link>}
          </div>
          {image?.url && (
            <figure className="editorial-section__media">
              <Image src={image.url} alt={itemText(image, 'alt', locale) || ''} fill sizes="(max-width: 760px) 92vw, 44vw" style={editorialImageStyle(image)} />
              <ImageProvenance image={image} locale={locale} />
              {itemText(image, 'caption', locale) && <figcaption>{itemText(image, 'caption', locale)}</figcaption>}
            </figure>
          )}
        </div>
      </section>
    )
  })
}
