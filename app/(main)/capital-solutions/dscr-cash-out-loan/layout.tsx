import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'DSCR Purchase Loan',
  description: 'Asset based underwriting designed to recycle equity without personal income constraints.',
  path: '/capital-solutions/dscr-cash-out-loan',
})

export default function DscrCashOutLoanLayout({ children }: { children: React.ReactNode }) {
  return children
}
