import { materials, solutions } from '../data/site-content.js'
import { homeSeed, materialDetailSections, pageSeedList, solutionDetailSections } from '../data/page-seeds.js'

const localizedList = (value) => ({ _type: 'localizedStringList', es: value.es, en: value.en })

export const homeInitialValue = homeSeed

export const materialTemplates = materials.map((item, index) => ({
  id: `material-${item.slug}`,
  title: item.name.es,
  schemaType: 'material',
  value: {
    code: item.code,
    slug: { _type: 'slug', current: item.slug },
    order: index + 1,
    featured: index < 3,
    name: { _type: 'localizedString', ...item.name },
    eyebrow: { _type: 'localizedString', ...item.eyebrow },
    summary: { _type: 'localizedText', ...item.summary },
    formats: localizedList(item.formats),
    applications: localizedList(item.applications),
    characterization: item.characterization,
    sections: materialDetailSections,
  },
}))

export const solutionTemplates = solutions.map((item, index) => ({
  id: `solution-${item.slug}`,
  title: item.name.es,
  schemaType: 'solution',
  value: {
    code: item.code,
    slug: { _type: 'slug', current: item.slug },
    order: index + 1,
    featured: index < 5,
    name: { _type: 'localizedString', ...item.name },
    summary: { _type: 'localizedText', ...item.summary },
    outcomes: localizedList(item.outcomes),
    sections: solutionDetailSections,
  },
}))

const pageTitles = { empresa: 'Empresa', capacidades: 'Capacidades', calidad: 'Calidad', recursos: 'Recursos', contacto: 'Contacto', materiales: 'Materiales', soluciones: 'Soluciones' }

export const pageTemplates = pageSeedList.map((value) => ({
  id: `page-${value.pageKey}`,
  documentId: `page.${value.pageKey}`,
  title: pageTitles[value.pageKey],
  value,
}))
