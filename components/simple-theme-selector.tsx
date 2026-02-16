"use client"

import * as React from "react"
import { Monitor, Sun, Moon, Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "./ui/dropdown-menu"
import { Badge } from "./ui/badge"

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

const themeDescriptions = {
  light: "Clean and bright interface",
  dark: "Easy on the eyes for low light",
  system: "Follows your system preference",
}

export function SimpleThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm">
        <Palette className="h-4 w-4 mr-2" />
        Theme
        <Badge variant="secondary" className="ml-2 text-xs">
          system
        </Badge>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Palette className="h-4 w-4 mr-2" />
          Theme
          <Badge variant="secondary" className="ml-2 text-xs">
            {theme || 'system'}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Theme Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Selection */}
        <div className="px-2 py-2">
          <div className="grid gap-1">
            {['light', 'dark', 'system'].map((themeOption) => {
              const Icon = themeIcons[themeOption as keyof typeof themeIcons]
              return (
                <Button
                  key={themeOption}
                  variant={theme === themeOption ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTheme(themeOption)}
                  className="flex items-center gap-2 justify-start h-10"
                >
                  <Icon className="h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium capitalize">{themeOption}</div>
                    <div className="text-xs text-muted-foreground">
                      {themeDescriptions[themeOption as keyof typeof themeDescriptions]}
                    </div>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
