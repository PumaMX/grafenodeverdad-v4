import { materials, solutions } from '@/data/site-content'
import { LOCALES, SITE_URL } from '@/lib/site'

export default function sitemap() {
  const staticPaths = ['', 'materiales', 'soluciones', 'capacidades', 'calidad', 'empresa', 'recursos', 'contacto']
  const materialPaths = materials.map(({ slug }) => `materiales/${slug}`)
  const solutionPaths = solutions.map(({ slug }) => `soluciones/${slug}`)
  const paths = [...staticPaths, ...materialPaths, ...solutionPaths]

  return LOCALES.flatMap((locale) => paths.map((path) => ({
    url: `${SITE_URL}/${locale}${path ? `/${path}` : ''}`,
    lastModified: new Date(),
    changeFrequency: path ? 'monthly' : 'weekly',
    priority: path ? 0.7 : 1,
  })))
}
