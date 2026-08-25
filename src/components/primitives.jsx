import Link from 'next/link'
import { itemText } from '@/data/site-content'

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

export function ItemCard({ item, locale, href, label }) {
  return (
    <Link className="item-card" href={href}>
      <div className="item-card__top">
        <span className="code">{item.code}</span>
        <ArrowIcon />
      </div>
      {item.eyebrow && <p className="eyebrow">{itemText(item, 'eyebrow', locale)}</p>}
      <h3>{itemText(item, 'name', locale)}</h3>
      <p>{itemText(item, 'summary', locale)}</p>
      <span className="text-link">{label} <span aria-hidden="true">→</span></span>
    </Link>
  )
}

export function PageHero({ eyebrow, title, copy, children, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className="container">
        <p className="eyebrow eyebrow--accent">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__copy">{copy}</p>
        {children}
      </div>
    </section>
  )
}
