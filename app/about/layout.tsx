import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About Malohn Capital Group',
  description: 'Institutional-grade capital structuring for lower-middle-market real estate investors with disciplined leverage and long-term performance focus.',
  path: '/about',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
