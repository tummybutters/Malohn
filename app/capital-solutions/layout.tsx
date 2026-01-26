import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Capital Solutions for Real Estate Investors',
  description: 'Explore DSCR loans, cash-out financing, and working capital lines engineered for disciplined leverage and long-term portfolio growth.',
  path: '/capital-solutions',
})

export default function CapitalSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
