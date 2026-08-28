import {
  contentSection,
  directorMessage,
  editorialImage,
  keyFact,
  localizedCta,
  localizedRichText,
  localizedString,
  localizedStringList,
  localizedText,
  processStep,
  seoFields,
  scientificPrecedent,
  scientificReference,
  solutionApplicationProfile,
  solutionProject,
} from './objects.js'
import { editorialPage, homePage, material, resource, siteSettings, solution } from './documents.js'
import { materialTemplates, pageTemplates, solutionTemplates } from '../initial-content.js'
import { pageBlockTypes } from './page-blocks.js'

export const schemaTypes = [
  localizedString,
  localizedText,
  localizedStringList,
  localizedRichText,
  localizedCta,
  directorMessage,
  editorialImage,
  keyFact,
  processStep,
  scientificPrecedent,
  scientificReference,
  solutionApplicationProfile,
  solutionProject,
  contentSection,
  seoFields,
  ...pageBlockTypes,
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
