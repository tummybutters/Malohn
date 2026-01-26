import type { Metadata } from 'next'
import { siteConfig } from '@/lib/constants'
import { metadataBase, sharedOpenGraph, sharedTwitter } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'DSCR Loans & Working Capital for Investors',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...sharedOpenGraph,
    title: 'DSCR Loans & Working Capital for Investors',
    description: siteConfig.description,
    url: '/',
  },
  twitter: {
    ...sharedTwitter,
    title: 'DSCR Loans & Working Capital for Investors',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
