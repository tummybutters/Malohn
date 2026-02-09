import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'DSCR Cash Out',
  description: 'Structured capital that unlocks liquidity while protecting long term portfolio performance.',
  path: '/capital-solutions/dscr-cash-out',
})

export default function DscrCashOutLayout({ children }: { children: React.ReactNode }) {
  return children
}
