import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Capital Solutions',
    description: 'DSCR loans and working capital solutions engineered for disciplined leverage and long-term portfolio growth.',
    path: '/capital-solutions',
  }),
  robots: {
    index: false,
    follow: true,
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
