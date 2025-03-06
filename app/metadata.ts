import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://frankandsonsexterminators.com'),
  title: "Frank And Sons Exterminators - Professional Pest Control Services",
  description: "Expert pest control services for residential and commercial properties. Specializing in insect and rodent control with guaranteed results.",
  keywords: [
    "pest control",
    "exterminators",
    "pest removal",
    "insect control",
    "rodent control",
    "pest management",
    "residential pest control",
    "commercial pest control",
  ],
  authors: [{ name: 'Frank And Sons Exterminators' }],
  creator: 'Frank And Sons Exterminators',
  publisher: 'Frank And Sons Exterminators',
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/images/apple-touch-icon.png',
    shortcut: '/images/favicon.ico',
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Frank And Sons Exterminators - Professional Pest Control Services",
    description: "Expert pest control services for residential and commercial properties. Specializing in insect and rodent control with guaranteed results.",
    url: 'https://frankandsonsexterminators.com',
    siteName: 'Frank And Sons Exterminators',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frank And Sons Exterminators - Professional Pest Control Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Frank And Sons Exterminators - Professional Pest Control Services",
    description: "Expert pest control services for residential and commercial properties. Specializing in insect and rodent control with guaranteed results.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://frankandsonsexterminators.com",
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};