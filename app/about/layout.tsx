import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About Malohn Capital Group',
  description: 'At Malohn Capital Group, we are redefining lower-middle market finance. Our mission is to deliver institutional grade financial strategy to everyday investors introducing Wall Street level structuring, discipline, and sophistication to markets that have long been underserved.',
  path: '/about',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
