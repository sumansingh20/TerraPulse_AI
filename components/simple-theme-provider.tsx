'use client'

import * as React from "react"
import { ThemeProvider } from "next-themes"

interface SimpleThemeProviderProps {
  children: React.ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: string
  enableSystem?: boolean
}

export function SimpleThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true
}: SimpleThemeProviderProps) {
  return (
    <ThemeProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
