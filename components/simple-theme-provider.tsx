'use client'

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface SimpleThemeProviderProps {
  children: React.ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: string
  enableSystem?: boolean
  themes?: string[]
}

export function SimpleThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "nature",
  enableSystem = true,
  themes = ['light', 'dark', 'nature']
}: SimpleThemeProviderProps) {
  return (
    <ThemeProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      themes={themes}
    >
      {children}
    </ThemeProvider>
  )
}
