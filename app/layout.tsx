import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { AdvancedThemeProvider } from '@/components/advanced-theme-provider'
import { ParticleEffect, FloatingElements } from '@/components/particle-effects'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import '../styles/themes.css'

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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body 
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background`}
        suppressHydrationWarning
      >
        <AdvancedThemeProvider
          attribute="class"
          defaultTheme="nature"
          enableSystem
          themes={['light', 'dark', 'nature', 'earth', 'sky', 'harvest', 'carbon']}
        >
          <div className="relative z-10">
            {children}
          </div>
          <ParticleEffect />
          <FloatingElements />
          <Toaster />
        </AdvancedThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
