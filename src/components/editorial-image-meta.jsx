import { stegaClean } from 'next-sanity'

const provenanceLabels = {
  es: {
    gdv: 'Evidencia de GdV',
    thirdParty: 'Material autorizado',
    conceptual: 'Visualización conceptual',
  },
  en: {
    gdv: 'GdV evidence',
    thirdParty: 'Authorized material',
    conceptual: 'Conceptual visualization',
  },
}

export function editorialImageStyle(image) {
  const fit = stegaClean(image?.fit) === 'contain' ? 'contain' : 'cover'
  const hotspot = image?.hotspot
  const objectPosition = hotspot && Number.isFinite(hotspot.x) && Number.isFinite(hotspot.y)
    ? `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
    : '50% 50%'

  return { objectFit: fit, objectPosition }
}

export function ImageProvenance({ image, locale = 'es' }) {
  const provenance = stegaClean(image?.provenance)
  const label = provenanceLabels[locale]?.[provenance]
  if (!label) return null
  return <span className={`image-provenance image-provenance--${provenance}`}>{label}</span>
}
