import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Schedule a Strategy Call',
  description: 'Request a strategy call to discuss DSCR financing, working capital, and portfolio-level capital structuring.',
  path: '/schedule',
})

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children
}
