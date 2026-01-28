import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Capital Group',
  description: 'Miles Malohn - Managing Partner',
  path: '/capital-group',
})

export default function CapitalGroupLayout({ children }: { children: React.ReactNode }) {
  return children
}
