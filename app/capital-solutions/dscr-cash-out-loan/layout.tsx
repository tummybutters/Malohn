import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'DSCR Cash-Out Loans',
  description: 'Asset-based underwriting to unlock equity with property-cash-flow qualification and disciplined leverage planning for rental portfolios.',
  path: '/capital-solutions/dscr-cash-out-loan',
})

export default function DscrCashOutLoanLayout({ children }: { children: React.ReactNode }) {
  return children
}
