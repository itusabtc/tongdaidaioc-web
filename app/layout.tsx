import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { OrganizationSchema, LocalBusinessSchema, RealEstateListingSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Rever - Nền tảng bất động sản trực tuyến hàng đầu Việt Nam',
  description: 'Tìm kiếm và mua bán nhà đất, căn hộ, dự án bất động sản trên Rever. 177,207+ bất động sản xác thực, hỗ trợ 24/7, giá cả minh bạch.',
  keywords: 'bất động sản, mua bán nhà, cho thuê căn hộ, dự án, Rever, Vietnam',
  authors: [{ name: 'Rever' }],
  creator: 'Rever',
  publisher: 'Rever',
  metadataBase: new URL('https://rever.vn'),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://rever.vn',
    siteName: 'Rever - Mua bán nhà đất',
    title: 'Rever - Nền tảng bất động sản trực tuyến hàng đầu',
    description: 'Tìm kiếm bất động sán xác thực với 100% thông tin chính xác',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rever - Mua bán nhà đất',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rever - Mua bán nhà đất xác thực',
    description: '177,207+ bất động sản, 100% xác thực, hỗ trợ 24/7',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-white">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <RealEstateListingSchema />
        <link rel="canonical" href="https://rever.vn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </head>
      <body className="antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
