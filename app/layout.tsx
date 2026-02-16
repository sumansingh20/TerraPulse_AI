import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'TerraPulse AI - Advanced Agricultural Intelligence',
  description: 'Next-generation agricultural monitoring with AI-powered insights, real-time data integration, and carbon credit verification.',
  keywords: 'agriculture, AI, carbon credits, farming, soil health, weather monitoring, satellite imagery',
  authors: [{ name: 'TerraPulse AI Team' }],
  creator: 'TerraPulse AI',
  publisher: 'TerraPulse AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'TerraPulse AI - Advanced Agricultural Intelligence',
    description: 'Transform your farming with AI-powered insights and real-time monitoring',
    url: 'https://terrapulse-ai.com',
    siteName: 'TerraPulse AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TerraPulse AI - Advanced Agricultural Intelligence',
    description: 'Transform your farming with AI-powered insights and real-time monitoring',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body 
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <div className="relative z-10">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
