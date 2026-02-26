import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

const routes = [
  { path: '/', priority: 1 },
  { path: '/capital-solutions', priority: 0.9 },
  { path: '/capital-solutions/working-capital', priority: 0.8 },
  { path: '/capital-solutions/dscr-cash-out-loan', priority: 0.8 },
  { path: '/capital-solutions/dscr-cash-out', priority: 0.8 },
  { path: '/transactions', priority: 0.7 },
  { path: '/about', priority: 0.6 },
  { path: '/capital-group', priority: 0.6 },
  { path: '/schedule', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
