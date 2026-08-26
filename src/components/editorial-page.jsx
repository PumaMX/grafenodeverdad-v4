import PageBuilder from '@/components/page-builder'
import { PageHero } from '@/components/primitives'
import { localized } from '@/sanity/lib/content'

export default function EditorialPage({ content, locale, compact = false, searchParams = {} }) {
  return (
    <>
      <PageHero
        eyebrow={localized(content?.eyebrow, locale)}
        title={localized(content?.title, locale)}
        copy={localized(content?.description, locale)}
        image={content?.heroImage}
        locale={locale}
        compact={compact}
      />
      <PageBuilder sections={content?.sections} locale={locale} searchParams={searchParams} />
    </>
  )
}
