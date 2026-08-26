import {
  contentSection,
  editorialImage,
  keyFact,
  localizedCta,
  localizedRichText,
  localizedString,
  localizedStringList,
  localizedText,
  processStep,
  seoFields,
} from './objects.js'
import { editorialPage, homePage, material, resource, siteSettings, solution } from './documents.js'
import { materialTemplates, pageTemplates, solutionTemplates } from '../initial-content.js'

export const schemaTypes = [
  localizedString,
  localizedText,
  localizedStringList,
  localizedRichText,
  localizedCta,
  editorialImage,
  keyFact,
  processStep,
  contentSection,
  seoFields,
  siteSettings,
  homePage,
  material,
  solution,
  editorialPage,
  resource,
]

export const initialValueTemplates = [
  ...materialTemplates,
  ...solutionTemplates,
  ...pageTemplates.map((page) => ({ id: page.id, title: page.title, schemaType: 'editorialPage', value: page.value })),
]
