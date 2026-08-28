import { materials, solutions, ui } from '../src/data/site-content.js'

const collections = { materials, solutions }
const errors = []

for (const [name, items] of Object.entries(collections)) {
  const slugs = new Set()
  for (const item of items) {
    if (!item.slug || !item.code) errors.push(`${name}: item without slug or code`)
    if (slugs.has(item.slug)) errors.push(`${name}: duplicate slug ${item.slug}`)
    slugs.add(item.slug)
    for (const locale of Object.keys(ui)) {
      for (const field of ['name', 'summary']) {
        if (!item[field]?.[locale]) errors.push(`${name}/${item.slug}: missing ${field}.${locale}`)
      }
      for (const [index, project] of (item.projects || []).entries()) {
        for (const field of ['title', 'summary', 'objective', 'validation']) {
          const value = project[field]?.[locale]
          if (!value || (Array.isArray(value) && value.length === 0)) errors.push(`${name}/${item.slug}/project-${index + 1}: missing ${field}.${locale}`)
        }
      }
    }
    for (const [index, project] of (item.projects || []).entries()) {
      if (!['evaluation', 'coDevelopment', 'concept'].includes(project.status)) errors.push(`${name}/${item.slug}/project-${index + 1}: invalid status`)
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Content OK: ${materials.length} materials, ${solutions.length} solutions, ${Object.keys(ui).length} locales.`)
