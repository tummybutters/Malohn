import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Capital Solutions',
  description: 'We align DSCR financing with unsecured working capital to unlock scalable liquidity, preserve equity efficiency, and build a capital architecture designed for long term portfolio growth.',
  path: '/capital-solutions',
})

export default function CapitalSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
