import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Capital Group',
  description: 'Leadership and advisory team.',
  path: '/capital-group',
})

export default function CapitalGroupLayout({ children }: { children: React.ReactNode }) {
  return children
}
