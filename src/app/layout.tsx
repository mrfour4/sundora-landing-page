import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import { NavigationProvider } from '@/components/navigation-context';
import { Toaster } from '@/components/ui/sonner';
import { montserrat } from './fonts';
import './globals.css';

const siteUrl = process.env.WEBSITE_URL ?? 'https://sundoratower.vn';

const SITE_NAME = 'Sundora Tower Đà Nẵng';
const TAGLINE = 'Nắng vàng bên dòng sông thơ';
const DESCRIPTION =
  'Được thiết kế dành riêng cho những chủ nhân duy mỹ và tinh tế, với vị trí tuyệt đẹp bên bờ sông Hàn, tầm nhìn không giới hạn, thiết kế ấn tượng và hệ tiện ích cao cấp, Sundora Tower kiến tạo phong cách sống mới tại Đà Nẵng.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: TAGLINE,
  keywords: [
    'Sundora Tower',
    'Sundora Tower Đà Nẵng',
    'căn hộ cao cấp Đà Nẵng',
    'chung cư ven sông Hàn',
    'căn hộ view sông Hàn',
    'bất động sản Đà Nẵng',
    'tiện ích cao cấp',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: TAGLINE,
    locale: 'vi_VN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sundora Tower bên sông Hàn Đà Nẵng',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: TAGLINE,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  applicationName: 'Sundora',
  appleWebApp: {
    capable: true,
    title: 'Sundora',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: SITE_NAME,
        inLanguage: 'vi-VN',
        description: TAGLINE,
      },
      {
        '@type': 'ApartmentComplex',
        '@id': `${siteUrl}#apartment`,
        name: SITE_NAME,
        url: siteUrl,
        description: DESCRIPTION,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Đà Nẵng',
          addressCountry: 'VN',
        },
        image: {
          '@type': 'ImageObject',
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
        },
      },
    ],
  };

  return (
    <html lang="vi">
      <body className={`${montserrat.className} antialiased`}>
        <NavigationProvider>{children}</NavigationProvider>
        <Toaster richColors theme="light" position="top-center" />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
