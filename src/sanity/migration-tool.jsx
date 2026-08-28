'use client'

import { useMemo, useState } from 'react'
import { Button, Card, Flex, Heading, Stack, Text } from '@sanity/ui'
import { useClient } from 'sanity'
import { homeInitialValue, materialTemplates, pageTemplates, solutionTemplates } from './initial-content.js'
import { siteSettingsSeed } from '../data/global-seed.js'

const seedDocuments = [
  { _id: 'siteSettings', _type: 'siteSettings', ...siteSettingsSeed },
  { _id: 'homePage', _type: 'homePage', ...homeInitialValue },
  ...pageTemplates.map((template) => ({ _id: template.documentId, _type: 'editorialPage', ...template.value })),
  ...materialTemplates.map((template) => ({ _id: `material.${template.value.slug.current}`, _type: 'material', ...template.value })),
  ...solutionTemplates.map((template) => ({ _id: `solution.${template.value.slug.current}`, _type: 'solution', ...template.value })),
]

function shouldReplaceSections(sections) {
  return !Array.isArray(sections) || sections.length === 0 || sections.every((section) => section?._type === 'contentSection')
}

function upgradeDirectorMessage(current, fallback) {
  const legacyParagraphs = {
    es: new Map([
      ['Esta visión se fortalece actualmente con la dirección científica del Dr. José Luis Rodríguez López y con un equipo comprometido con convertir el conocimiento en materiales, procesos y soluciones técnicamente sustentadas.', fallback.paragraphs.es[2]],
      ['Damos la cara.', fallback.paragraphs.es[4]],
    ]),
    en: new Map([
      ['That vision is now strengthened by the scientific leadership of Dr. José Luis Rodríguez López and a team committed to turning knowledge into technically grounded materials, processes and solutions.', fallback.paragraphs.en[2]],
      ['We stand behind our work.', fallback.paragraphs.en[4]],
    ]),
  }
  const paragraphs = {}
  let changed = false

  for (const locale of ['es', 'en']) {
    const source = current?.paragraphs?.[locale]?.length ? current.paragraphs[locale] : fallback.paragraphs[locale]
    if (!current?.paragraphs?.[locale]?.length) changed = true
    paragraphs[locale] = source.map((paragraph) => {
      const replacement = legacyParagraphs[locale].get(paragraph)
      if (replacement) changed = true
      return replacement || paragraph
    })
  }

  const role = { ...current?.role }
  if (!role.es || role.es === 'Director') {
    role.es = fallback.role.es
    changed = true
  }
  if (!role.en || role.en === 'Director') {
    role.en = fallback.role.en
    changed = true
  }

  if (!current?.address) changed = true

  return changed
    ? { paragraphs, role, address: current?.address || fallback.address }
    : null
}

export function ContentInstallerTool() {
  const client = useClient({ apiVersion: '2026-08-25' })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const ids = useMemo(() => seedDocuments.map((document) => document._id), [])

  async function install() {
    if (!window.confirm('Esto creará el contenido faltante y sustituirá únicamente las secciones antiguas o vacías por la estructura completa de V5. ¿Continuar?')) return
    setStatus('working')
    setMessage('Revisando el contenido actual…')

    try {
      const existing = await client.fetch('*[_id in $ids]{_id, sections, contactEmail, navigation, directorMessage, title, description, name, summary, leadImage, heroImage, applicationProfile}', { ids })
      const existingById = new Map(existing.map((document) => [document._id, document]))
      let created = 0
      let completed = 0
      const transaction = client.transaction()

      for (const document of seedDocuments) {
        const current = existingById.get(document._id)
        if (!current) {
          transaction.create(document)
          created += 1
          continue
        }

        const { _id, _type, sections, ...fields } = document
        transaction.patch(_id, (patch) => {
          let next = patch.setIfMissing(fields)
          if (_id === 'siteSettings') {
            const legacyEmails = ['contacto@grafeno.mx', 'contacto@grafenodeverdad.mx', 'contacto@grefenodeverdad.mx']
            if (!current.contactEmail || legacyEmails.includes(current.contactEmail.toLowerCase())) {
              next = next.set({ contactEmail: 'grafenodeverdad@gmail.com' })
            }
            if (!current.navigation?.some((item) => item?.href === 'academia-industria')) {
              const navigation = [...(current.navigation || [])]
              const academiaLink = fields.navigation.find((item) => item.href === 'academia-industria')
              const capabilitiesIndex = navigation.findIndex((item) => item?.href === 'capacidades')
              navigation.splice(capabilitiesIndex + 1, 0, academiaLink)
              next = next.set({ navigation })
            }
          }
          if (_id === 'homePage') {
            const directorUpgrade = upgradeDirectorMessage(current.directorMessage, fields.directorMessage)
            if (directorUpgrade) {
              next = next.set({
                'directorMessage.paragraphs': directorUpgrade.paragraphs,
                'directorMessage.role': directorUpgrade.role,
                'directorMessage.address': directorUpgrade.address,
              })
            }
          }
          if (_id === 'page.soluciones') {
            const legacyKeys = (current.sections || []).map((section) => section?._key).filter(Boolean)
            const isLegacySolutionsPage = legacyKeys.length === 0 || (legacyKeys.length === 2 && legacyKeys.includes('solutions') && legacyKeys.includes('custom-note'))
            if (current.title?.es === 'Soluciones') next = next.set({ title: fields.title })
            if (current.description?.es === 'Programas de formulación e integración construidos alrededor de su proceso y una métrica de éxito, no alrededor de una palabra de moda.') next = next.set({ description: fields.description })
            if (!current.heroImage) next = next.set({ heroImage: fields.heroImage })
            if (isLegacySolutionsPage) {
              next = next.set({ sections })
              completed += 1
            }
          }
          if (_id === 'solution.tintas-conductoras' && current.name?.es === 'Tintas conductoras') {
            next = next.set({ name: fields.name, summary: fields.summary })
          }
          if (_id === 'solution.recubrimientos-funcionales' && current.name?.es === 'Recubrimientos funcionales') {
            next = next.set({ name: fields.name, summary: fields.summary, outcomes: fields.outcomes })
          }
          if (_id !== 'page.soluciones' && sections && shouldReplaceSections(current.sections)) {
            next = next.set({ sections })
            completed += 1
          }
          return next
        })
      }

      await transaction.commit({ autoGenerateArrayKeys: true })
      setStatus('done')
      setMessage(`Contenido V5 listo: ${created} documentos creados y ${completed} páginas completadas. Los textos ya editados se conservaron.`)
    } catch (error) {
      setStatus('error')
      setMessage(error?.message || 'No fue posible instalar el contenido.')
    }
  }

  return (
    <Card height="fill" padding={5} tone="transparent">
      <Stack space={5} style={{ maxWidth: 760, margin: '0 auto' }}>
        <Stack space={3}>
          <Heading size={4}>Instalar contenido completo de V5</Heading>
          <Text size={2} muted>Prepara la portada, las ocho páginas interiores, seis materiales y diez familias de soluciones. Incluye las fichas editables de tintas conductoras, textiles funcionales y recubrimientos marinos.</Text>
        </Stack>
        <Card padding={4} radius={3} tone="primary" border>
          <Stack space={3}>
            <Text weight="semibold">Qué hará</Text>
            <Text>Creará documentos que todavía no existan, completará campos vacíos y actualizará la estructura anterior de Soluciones. No modifica la portada ni sobrescribe textos ya editados fuera de los campos heredados reconocidos.</Text>
          </Stack>
        </Card>
        <Flex align="center" gap={3} wrap="wrap">
          <Button text={status === 'working' ? 'Instalando…' : status === 'done' ? 'Contenido instalado' : 'Instalar contenido V5'} tone="primary" disabled={status === 'working' || status === 'done'} onClick={install} />
          <Text size={1} muted>{seedDocuments.length} documentos administrables</Text>
        </Flex>
        {message && <Card padding={4} radius={2} tone={status === 'error' ? 'critical' : status === 'done' ? 'positive' : 'caution'}><Text>{message}</Text></Card>}
      </Stack>
    </Card>
  )
}
