import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Recent Transactions & Case Studies',
  description: 'Representative DSCR and working-capital transactions showcasing leverage structures, funding sizes, and portfolio outcomes.',
  path: '/transactions',
})

export default function TransactionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
