import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import { OrganizationSchema, LocalBusinessSchema, RealEstateListingSchema } from '@/components/json-ld'

const beVietnamPro = Be_Vietnam_Pro({ subsets: ['latin', 'vietnamese'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Tổng Đài Địa Ốc - Nền tảng bất động sản trực tuyến hàng đầu Việt Nam',
  description: 'Tìm kiếm, mua bán, cho thuê nhà đất, căn hộ trên Tổng Đài Địa Ốc. 12,340+ tin đăng xác thực, công cụ dành cho môi giới, hỗ trợ 24/7.',
  keywords: 'bất động sán, mua bán nhà, cho thuê căn hộ, Tổng Đài Địa Ốc, Vietnam',
  authors: [{ name: 'Tổng Đài Địa Ốc' }],
  creator: 'Tổng Đài Địa Ốc',
  publisher: 'Tổng Đài Địa Ốc',
  metadataBase: new URL('https://tongdaidiaoc.vn'),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://tongdaidiaoc.vn',
    siteName: 'Tổng Đài Địa Ốc',
    title: 'Tổng Đài Địa Ốc - Mua bán, cho thuê bất động sản',
    description: 'Nền tảng bất động sản hàng đầu với 12,340+ tin đăng xác thực',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tổng Đài Địa Ốc - Mua bán nhà đất',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tổng Đài Địa Ốc - Mua bán nhà đất',
    description: 'Đăng tin miễn phí, tìm kiếm bất động sán xác thực',
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
    { media: '(prefers-color-scheme: light)', color: '#1E3A5F' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
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
        <link rel="canonical" href="https://tongdaidiaoc.vn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
      </head>
      <body className={`${beVietnamPro.className} antialiased bg-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
