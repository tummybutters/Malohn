import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Malohn Capital Group Transactions',
  description: 'DSCR Transactions. Working Capital.',
  path: '/transactions',
})

export default function TransactionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
