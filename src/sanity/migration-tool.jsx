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
      const existing = await client.fetch('*[_id in $ids]{_id, sections}', { ids })
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
          if (sections && shouldReplaceSections(current.sections)) {
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
          <Text size={2} muted>Prepara la portada, las siete páginas interiores, seis materiales y seis soluciones con todos sus bloques editables.</Text>
        </Stack>
        <Card padding={4} radius={3} tone="primary" border>
          <Stack space={3}>
            <Text weight="semibold">Qué hará</Text>
            <Text>Creará documentos que todavía no existan, completará campos vacíos y reemplazará las dos secciones antiguas de introducción por el constructor completo. No sobrescribe textos que ya hayas modificado.</Text>
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
