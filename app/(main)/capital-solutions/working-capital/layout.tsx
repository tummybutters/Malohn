import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Working Capital',
  description: 'Investment focused, unsecured liquidity and credit for down payments, renovations, reserves, bridge loans, and execution timing.',
  path: '/capital-solutions/working-capital',
})

export default function WorkingCapitalLayout({ children }: { children: React.ReactNode }) {
  return children
}
