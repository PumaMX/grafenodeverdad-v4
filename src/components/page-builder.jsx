import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { stegaClean } from 'next-sanity'
import { ItemCard, SectionHeading } from '@/components/primitives'
import { editorialImageStyle, ImageProvenance } from '@/components/editorial-image-meta'
import ProjectBriefForm from '@/components/project-brief-form'
import { CONTACT_EMAIL, pathFor } from '@/lib/site'
import { getMaterials, getSolutions, localized, resolveContentHref } from '@/sanity/lib/content'

const surfaceClass = (surface) => {
  surface = stegaClean(surface)
  if (surface === 'dark') return 'section--dark'
  if (surface === 'accent') return 'section--evidence'
  if (surface === 'light') return 'section--light'
  return ''
}

const blockText = (item, field, locale, fallback = '') => localized(item?.[field], locale, fallback)
const blockList = (item, field, locale) => item?.[field]?.[locale] || []

function Action({ action, locale, className = 'button button--primary' }) {
  const label = blockText(action, 'label', locale)
  if (!label || !action?.href) return null
  return <Link className={className} href={resolveContentHref(locale, action.href)}>{label}</Link>
}

function BlockHeading({ block, locale, action }) {
  const title = blockText(block, 'title', locale)
  if (!title) return null
  return (
    <SectionHeading
      eyebrow={blockText(block, 'eyebrow', locale)}
      title={title}
      copy={blockText(block, 'body', locale)}
      action={action}
    />
  )
}

function SplitText({ block, locale }) {
  const image = block.image
  const layout = stegaClean(block.layout) || 'text'
  const hasImage = image?.url && layout !== 'text'
  const heading = <div>{blockText(block, 'eyebrow', locale) && <p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p>}{blockText(block, 'title', locale) && <h2>{blockText(block, 'title', locale)}</h2>}{blockText(block, 'lead', locale) && <p className="builder-lead">{blockText(block, 'lead', locale)}</p>}</div>
  const copy = <div className="builder-copy">{blockText(block, 'body', locale) && <p>{blockText(block, 'body', locale)}</p>}{blockList(block, 'points', locale).length > 0 && <ul className="check-list">{blockList(block, 'points', locale).map((point) => <li key={point}>{point}</li>)}</ul>}<Action action={block.action} locale={locale} /></div>
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className={`container builder-split builder-split--${layout} ${hasImage ? 'builder-split--media' : ''}`}>
        {hasImage ? <>{layout === 'imageLeft' && <BlockImage image={image} locale={locale} />}<div className="builder-split__text">{heading}{copy}</div>{layout === 'imageRight' && <BlockImage image={image} locale={locale} />}</> : <>{heading}{copy}</>}
      </div>
    </section>
  )
}

function BlockImage({ image, locale, className = 'builder-media' }) {
  if (!image?.url) return null
  return (
    <figure className={className}>
      <Image src={image.url} alt={blockText(image, 'alt', locale)} fill sizes="(max-width: 820px) 92vw, 44vw" style={editorialImageStyle(image)} />
      <ImageProvenance image={image} locale={locale} />
      {blockText(image, 'caption', locale) && <figcaption>{blockText(image, 'caption', locale)}</figcaption>}
    </figure>
  )
}

function Cards({ block, locale }) {
  const presentation = stegaClean(block.presentation) || 'cards'
  const className = presentation === 'principles'
    ? 'principle-grid'
    : presentation === 'capabilities'
      ? 'capability-grid'
      : presentation === 'documents'
        ? 'document-grid'
        : 'builder-card-grid'

  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} action={<Action action={block.action} locale={locale} />} />
        <div className={className} style={presentation === 'cards' ? { '--builder-columns': block.columns || 3 } : undefined}>
          {(block.items || []).map((item, index) => (
            <article className="builder-card" key={item._key || index}>
              {item.image?.url && <BlockImage image={item.image} locale={locale} className="builder-card__media" />}
              {(item.value || item.number) && <strong className="builder-card__value">{item.value || item.number}</strong>}
              {blockText(item, 'title', locale) && <h3>{blockText(item, 'title', locale)}</h3>}
              {blockText(item, 'body', locale) && <p>{blockText(item, 'body', locale)}</p>}
              {blockList(item, 'points', locale).length > 0 && <ul>{blockList(item, 'points', locale).map((point) => <li key={point}>{point}</li>)}</ul>}
              <Action action={item.link} locale={locale} className="text-link" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey({ block, locale }) {
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} />
        <div className="journey-grid">
          {(block.items || []).map((item, index) => (
            <Link className="journey" key={item._key || index} href={resolveContentHref(locale, item.link?.href)}>
              <span className="journey__number">{item.number || String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{blockText(item, 'title', locale)}</h3>
                <p>{blockText(item, 'body', locale)}</p>
                {blockText(item.link, 'label', locale) && <span className="text-link">{blockText(item.link, 'label', locale)} →</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process({ block, locale }) {
  const dark = stegaClean(block.surface) === 'dark'
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} />
        <ol className={`process-grid ${dark ? '' : 'process-grid--light'}`}>
          {(block.items || []).map((item, index) => (
            <li key={item._key || index}>
              <span>{item.number || String(index + 1).padStart(2, '0')}</span>
              <h3>{blockText(item, 'title', locale)}</h3>
              <p>{blockText(item, 'body', locale)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Catalog({ block, locale, items }) {
  const isMaterials = stegaClean(block.catalogType) === 'materials'
  const orderedItems = isMaterials ? items : [...items].sort((a, b) => Number(Boolean(b.applicationProfile)) - Number(Boolean(a.applicationProfile)))
  const visibleItems = block.limit ? orderedItems.slice(0, block.limit) : orderedItems
  const base = isMaterials ? 'materiales' : 'soluciones'
  const label = blockText(block, 'itemLabel', locale, locale === 'es' ? 'Ver perfil' : 'View profile')
  const action = block.moreLink?.href ? <Action action={block.moreLink} locale={locale} className="text-link text-link--standalone" /> : null

  return (
    <section className={`section builder-section catalog-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} action={action} />
        {stegaClean(block.display) === 'list' ? (
          <div className="solution-list">
            {visibleItems.map((item) => (
              <Link key={item.slug} href={pathFor(locale, `${base}/${stegaClean(item.slug)}`)}>
                <span>{item.code}</span>
                <h3>{blockText(item, 'name', locale)}</h3>
                <p>{blockText(item, 'summary', locale)}</p>
                <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>
        ) : (
          <div className="card-grid card-grid--three">
            {visibleItems.map((item) => <ItemCard key={item.slug} item={item} locale={locale} href={pathFor(locale, `${base}/${stegaClean(item.slug)}`)} label={label} isSolution={!isMaterials} />)}
          </div>
        )}
      </div>
    </section>
  )
}

function Evidence({ block, locale }) {
  return (
    <section className={`section builder-section ${surfaceClass(block.surface || 'accent')}`}>
      <div className="container evidence-grid">
        <div>
          {blockText(block, 'eyebrow', locale) && <p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p>}
          <h2>{blockText(block, 'title', locale)}</h2>
          {blockText(block, 'body', locale) && <p>{blockText(block, 'body', locale)}</p>}
          <Action action={block.action} locale={locale} className="button button--dark" />
        </div>
        <div className="evidence-questions">
          {(block.items || []).map((item, index) => <div key={item._key || index}><span>{item.number || String(index + 1).padStart(2, '0')}</span><h3>{blockText(item, 'title', locale)}</h3><p>{blockText(item, 'body', locale)}</p></div>)}
        </div>
      </div>
    </section>
  )
}

function TechnicalTable({ block, locale }) {
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container technical-block">
        <div><p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p><h2>{blockText(block, 'title', locale)}</h2>{blockText(block, 'body', locale) && <p>{blockText(block, 'body', locale)}</p>}</div>
        <div className="table-wrap"><table><thead><tr><th>{blockText(block, 'firstColumn', locale)}</th><th>{blockText(block, 'secondColumn', locale)}</th></tr></thead><tbody>{(block.rows || []).map((row, index) => <tr key={row._key || index}><td>{blockText(row, 'title', locale)}</td><td>{blockText(row, 'body', locale)}</td></tr>)}</tbody></table>{blockText(block, 'note', locale) && <p className="table-note">{blockText(block, 'note', locale)}</p>}</div>
      </div>
    </section>
  )
}

function Resources({ block, locale }) {
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} />
        <div className="resource-list">{(block.items || []).map((item, index) => <article key={item._key || index}><span>{item.number || String(index + 1).padStart(2, '0')}</span><div><h2>{blockText(item, 'title', locale)}</h2><p>{blockText(item, 'body', locale)}</p></div><ul>{blockList(item, 'points', locale).map((point) => <li key={point}>{point}</li>)}</ul></article>)}</div>
      </div>
    </section>
  )
}

function Gallery({ block, locale }) {
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className="container">
        <BlockHeading block={block} locale={locale} />
        <div className="builder-gallery" style={{ '--builder-columns': block.columns || 3 }}>{(block.images || []).map((image, index) => <BlockImage key={image._key || index} image={image} locale={locale} className="builder-gallery__item" />)}</div>
      </div>
    </section>
  )
}

function RichText({ block, locale }) {
  const content = block.content?.[locale] || []
  return (
    <section className={`section builder-section ${surfaceClass(block.surface)}`}>
      <div className={`container builder-rich ${block.image?.url ? 'builder-rich--media' : ''}`}>
        <div>
          {blockText(block, 'eyebrow', locale) && <p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p>}
          {blockText(block, 'title', locale) && <h2>{blockText(block, 'title', locale)}</h2>}
          <div className="portable-text"><PortableText value={content} /></div>
          <Action action={block.action} locale={locale} />
        </div>
        <BlockImage image={block.image} locale={locale} />
      </div>
    </section>
  )
}

function Cta({ block, locale }) {
  const tone = stegaClean(block.tone)
  if (tone === 'panel') {
    return <section className="section section--compact"><div className="container note-panel"><div>{blockText(block, 'eyebrow', locale) && <p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p>}<h2>{blockText(block, 'title', locale)}</h2>{blockText(block, 'body', locale) && <p>{blockText(block, 'body', locale)}</p>}</div><div className="button-row"><Action action={block.primary} locale={locale} className="button button--dark" /><Action action={block.secondary} locale={locale} className="button button--ghost-dark" /></div></div></section>
  }
  return (
    <section className={`final-cta ${tone === 'light' ? 'final-cta--light' : ''}`}>
      <div className="container final-cta__inner"><div>{blockText(block, 'eyebrow', locale) && <p className="eyebrow">{blockText(block, 'eyebrow', locale)}</p>}<h2>{blockText(block, 'title', locale)}</h2>{blockText(block, 'body', locale) && <p>{blockText(block, 'body', locale)}</p>}</div><div className="button-row"><Action action={block.primary} locale={locale} /><Action action={block.secondary} locale={locale} className="button button--ghost" /></div></div>
    </section>
  )
}

function ContactForm({ block, locale, searchParams }) {
  return (
    <section className="section contact-section"><div className="container contact-grid"><aside><p className="eyebrow">{blockText(block, 'sidebarTitle', locale)}</p><ul>{blockList(block, 'points', locale).map((point) => <li key={point}>{point}</li>)}</ul><p>{blockText(block, 'directLabel', locale)}<br /><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p></aside><ProjectBriefForm locale={locale} defaults={{ material: searchParams?.material, solution: searchParams?.solucion }} /></div></section>
  )
}

function LegacySection({ block, locale }) {
  return <SplitText block={{ ...block, _type: 'splitTextBlock', lead: block.body, body: undefined, surface: block.style }} locale={locale} />
}

export default async function PageBuilder({ sections = [], locale, searchParams = {} }) {
  const visible = sections.filter((block) => block?.enabled !== false)
  const needsMaterials = visible.some((block) => block._type === 'catalogBlock' && stegaClean(block.catalogType) === 'materials')
  const needsSolutions = visible.some((block) => block._type === 'catalogBlock' && stegaClean(block.catalogType) === 'solutions')
  const [materials, solutions] = await Promise.all([
    needsMaterials ? getMaterials() : Promise.resolve([]),
    needsSolutions ? getSolutions() : Promise.resolve([]),
  ])

  return visible.map((block, index) => {
    const key = block._key || `${block._type}-${index}`
    if (block._type === 'splitTextBlock') return <SplitText key={key} block={block} locale={locale} />
    if (block._type === 'cardsBlock') return <Cards key={key} block={block} locale={locale} />
    if (block._type === 'journeyBlock') return <Journey key={key} block={block} locale={locale} />
    if (block._type === 'processBlock') return <Process key={key} block={block} locale={locale} />
    if (block._type === 'catalogBlock') return <Catalog key={key} block={block} locale={locale} items={stegaClean(block.catalogType) === 'materials' ? materials : solutions} />
    if (block._type === 'evidenceBlock') return <Evidence key={key} block={block} locale={locale} />
    if (block._type === 'tableBlock') return <TechnicalTable key={key} block={block} locale={locale} />
    if (block._type === 'resourceListBlock') return <Resources key={key} block={block} locale={locale} />
    if (block._type === 'galleryBlock') return <Gallery key={key} block={block} locale={locale} />
    if (block._type === 'richTextBlock') return <RichText key={key} block={block} locale={locale} />
    if (block._type === 'ctaBlock') return <Cta key={key} block={block} locale={locale} />
    if (block._type === 'contactFormBlock') return <ContactForm key={key} block={block} locale={locale} searchParams={searchParams} />
    if (block._type === 'contentSection') return <LegacySection key={key} block={block} locale={locale} />
    return null
  })
}
