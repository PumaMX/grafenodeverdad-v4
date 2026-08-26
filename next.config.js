const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://www.sanity.io https://*.sanity.studio" },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return [
      { source: '/productos/tintas', destination: '/es/soluciones/tintas-conductoras', permanent: true },
      { source: '/productos/masterbatchs', destination: '/es/soluciones/masterbatches-polimeros', permanent: true },
      { source: '/productos/concreto-asfalto', destination: '/es/soluciones/concreto-asfalto', permanent: true },
      { source: '/productos/antifouling', destination: '/es/soluciones/recubrimientos-funcionales', permanent: true },
      { source: '/productos/biomedicina', destination: '/es/soluciones/desarrollo-a-la-medida', permanent: true },
      { source: '/productos/energia', destination: '/es/soluciones/energia', permanent: true },
    ]
  },
}

export default nextConfig
