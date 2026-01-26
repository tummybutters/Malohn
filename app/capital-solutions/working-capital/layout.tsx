import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Working Capital for Real Estate Investors',
  description: 'Unsecured working capital to bridge down payments, reserves, and acquisition timing—structured to complement DSCR financing and protect cash flow.',
  path: '/capital-solutions/working-capital',
})

export default function WorkingCapitalLayout({ children }: { children: React.ReactNode }) {
  return children
}
