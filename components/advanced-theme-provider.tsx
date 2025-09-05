"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Advanced theme configurations
export const themeConfig = {
  themes: [
    'light',
    'dark', 
    'nature',
    'earth',
    'sky',
    'harvest',
    'carbon'
  ],
  colors: {
    nature: {
      primary: 'hsl(142 76% 36%)',
      secondary: 'hsl(120 60% 25%)',
      accent: 'hsl(84 81% 44%)',
      background: 'hsl(120 25% 98%)',
      foreground: 'hsl(120 15% 15%)',
    },
    earth: {
      primary: 'hsl(30 100% 20%)',
      secondary: 'hsl(30 60% 30%)',
      accent: 'hsl(45 85% 35%)',
      background: 'hsl(30 20% 98%)',
      foreground: 'hsl(30 15% 15%)',
    },
    sky: {
      primary: 'hsl(200 100% 45%)',
      secondary: 'hsl(220 60% 35%)',
      accent: 'hsl(190 85% 40%)',
      background: 'hsl(200 25% 98%)',
      foreground: 'hsl(200 15% 15%)',
    },
    harvest: {
      primary: 'hsl(45 100% 40%)',
      secondary: 'hsl(35 80% 35%)',
      accent: 'hsl(25 85% 45%)',
      background: 'hsl(45 25% 98%)',
      foreground: 'hsl(45 15% 15%)',
    },
    carbon: {
      primary: 'hsl(210 40% 35%)',
      secondary: 'hsl(210 30% 25%)',
      accent: 'hsl(142 76% 36%)',
      background: 'hsl(210 20% 98%)',
      foreground: 'hsl(210 15% 15%)',
    }
  },
  animations: {
    nature: 'animate-pulse-nature',
    earth: 'animate-float',
    sky: 'animate-shimmer',
    harvest: 'animate-bounce',
    carbon: 'animate-pulse'
  }
}

interface AdvancedThemeContextType {
  theme: string
  setTheme: (theme: string) => void
  themeColors: any
  themeAnimation: string
  enableGlassMorphism: boolean
  setEnableGlassMorphism: (enabled: boolean) => void
  enableParticles: boolean
  setEnableParticles: (enabled: boolean) => void
}

const AdvancedThemeContext = React.createContext<AdvancedThemeContextType | undefined>(undefined)

interface AdvancedThemeProviderProps {
  readonly children: React.ReactNode
  readonly attribute?: string
  readonly defaultTheme?: string
  readonly enableSystem?: boolean
  readonly themes?: string[]
}

export function AdvancedThemeProvider({ children, ...props }: AdvancedThemeProviderProps) {
  const [enableGlassMorphism, setEnableGlassMorphism] = React.useState(true)
  const [enableParticles, setEnableParticles] = React.useState(false)
  const [currentTheme, setCurrentTheme] = React.useState('nature')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const themeColors = themeConfig.colors[currentTheme as keyof typeof themeConfig.colors] || themeConfig.colors.nature
  const themeAnimation = themeConfig.animations[currentTheme as keyof typeof themeConfig.animations] || themeConfig.animations.nature

  // Apply theme colors to CSS variables
  React.useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--color-theme-${key}`, value)
    })
    
    // Apply theme class to body
    document.body.className = document.body.className.replace(/theme-\w+/g, '')
    document.body.classList.add(`theme-${currentTheme}`)
  }, [themeColors, currentTheme, mounted])

  // Apply glass morphism styles
  React.useEffect(() => {
    if (!mounted) return
    
    const root = document.documentElement
    root.classList.toggle('glass-enabled', enableGlassMorphism)
  }, [enableGlassMorphism, mounted])

  const contextValue = React.useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
    themeColors,
    themeAnimation,
    enableGlassMorphism,
    setEnableGlassMorphism,
    enableParticles,
    setEnableParticles
  }), [currentTheme, themeColors, themeAnimation, enableGlassMorphism, enableParticles])

  if (!mounted) {
    return <div>{children}</div>
  }

  return (
    <NextThemesProvider
      themes={themeConfig.themes}
      defaultTheme="nature"
      enableSystem
    >
      <AdvancedThemeContext.Provider value={contextValue}>
        <div className={`theme-${currentTheme} ${enableGlassMorphism ? 'glass-enabled' : ''}`}>
          {children}
        </div>
      </AdvancedThemeContext.Provider>
    </NextThemesProvider>
  )
}

export const useAdvancedTheme = () => {
  const context = React.useContext(AdvancedThemeContext)
  if (context === undefined) {
    throw new Error('useAdvancedTheme must be used within an AdvancedThemeProvider')
  }
  return context
}

// Safe version that returns defaults if no provider
export const useAdvancedThemeSafe = () => {
  const context = React.useContext(AdvancedThemeContext)
  if (context === undefined) {
    return {
      theme: 'nature',
      setTheme: () => {},
      themeColors: themeConfig.colors.nature,
      themeAnimation: themeConfig.animations.nature,
      enableGlassMorphism: true,
      setEnableGlassMorphism: () => {},
      enableParticles: false,
      setEnableParticles: () => {}
    }
  }
  return context
}
