import type { Metadata } from 'next'
import { siteConfig } from '@/lib/constants'

export const metadataBase = new URL(siteConfig.url)

export const sharedOpenGraph = {
  type: 'website' as const,
  siteName: siteConfig.name,
  locale: 'en_US',
  images: [
    {
      url: siteConfig.ogImage,
      alt: `${siteConfig.name} logo`,
    },
  ],
}

export const sharedTwitter = {
  card: 'summary_large_image' as const,
  images: [siteConfig.ogImage],
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return {
    title,
    description,
    alternates: { canonical: normalizedPath },
    openGraph: {
      title,
      description,
      url: normalizedPath,
    },
    twitter: {
      title,
      description,
    },
  }
}
