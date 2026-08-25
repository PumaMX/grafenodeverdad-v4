export default function manifest() {
  return {
    name: 'Grafeno de Verdad',
    short_name: 'GDV',
    description: 'Materiales grafénicos verificables, diseñados para integrarse y escalar.',
    start_url: '/es',
    display: 'standalone',
    background_color: '#0b100f',
    theme_color: '#b8ff3d',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  }
}
