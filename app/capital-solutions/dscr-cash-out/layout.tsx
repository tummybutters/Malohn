import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'DSCR Cash-Out Strategy',
  description: 'Portfolio-level liquidity planning with DSCR cash-out structures that preserve reserves and long-term cash-flow durability.',
  path: '/capital-solutions/dscr-cash-out',
})

export default function DscrCashOutLayout({ children }: { children: React.ReactNode }) {
  return children
}
