import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Capital Advisory Team',
  description: 'Meet the Malohn Capital Group advisory team providing disciplined structuring, underwriting clarity, and execution guidance.',
  path: '/capital-group',
})

export default function CapitalGroupLayout({ children }: { children: React.ReactNode }) {
  return children
}
