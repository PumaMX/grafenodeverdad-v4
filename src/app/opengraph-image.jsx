import { ImageResponse } from 'next/og'

export const alt = 'Grafeno de Verdad — Materiales avanzados'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, color: '#f4f1e8', background: '#0b100f', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 48, height: 48, border: '3px solid #b8ff3d', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b8ff3d', fontSize: 24 }}>G</div>
        <div style={{ fontSize: 32, fontWeight: 700 }}>Grafeno de Verdad</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 930 }}>
        <div style={{ color: '#b8ff3d', fontSize: 22, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 }}>Advanced materials · Mexico</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>Materiales verificables. Integración que escala.</div>
      </div>
      <div style={{ display: 'flex', gap: 18, color: '#9aa7a2', fontSize: 22 }}><span>Graphene</span><span>·</span><span>2D materials</span><span>·</span><span>Co-development</span></div>
    </div>,
    size,
  )
}
