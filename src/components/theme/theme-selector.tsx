"use client"

import * as React from "react"
import { Monitor, Sun, Moon, Palette, Droplets, Mountain, Sun as Harvest, Leaf, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import { useAdvancedThemeSafe } from "./advanced-theme-provider"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "./ui/dropdown-menu"
import { Badge } from "./ui/badge"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
  nature: Leaf,
  earth: Mountain,
  sky: Droplets,
  harvest: Harvest,
  carbon: Settings,
}

const themeDescriptions = {
  light: "Clean and bright interface",
  dark: "Easy on the eyes for low light",
  system: "Follows your system preference",
  nature: "Fresh green agricultural theme",
  earth: "Warm earth tones and soil colors",
  sky: "Cool blue sky and water tones",
  harvest: "Golden harvest and autumn colors",
  carbon: "Professional carbon tracking theme",
}

export function AdvancedThemeSelector() {
  const { theme, setTheme } = useTheme()
  const {
    theme: advancedTheme,
    setTheme: setAdvancedTheme,
    enableGlassMorphism,
    setEnableGlassMorphism,
    enableParticles,
    setEnableParticles,
  } = useAdvancedThemeSafe()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="glass hover:bg-white/20">
          <Palette className="h-4 w-4 mr-2" />
          Theme
          <Badge variant="secondary" className="ml-2 text-xs">
            {advancedTheme}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 glass">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Advanced Theme Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* Theme Selection */}
        <div className="px-2 py-2">
          <Label className="text-sm font-medium">Color Themes</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {['nature', 'earth', 'sky', 'harvest', 'carbon'].map((themeOption) => {
              const Icon = themeIcons[themeOption as keyof typeof themeIcons]
              return (
                <Button
                  key={themeOption}
                  variant={advancedTheme === themeOption ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setAdvancedTheme(themeOption)}
                  className="flex items-center gap-2 justify-start h-12"
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

        <DropdownMenuSeparator />

        {/* Base Theme (Light/Dark) */}
        <div className="px-2 py-2">
          <Label className="text-sm font-medium">Base Mode</Label>
          <div className="flex gap-1 mt-2">
            {['light', 'dark', 'system'].map((baseTheme) => {
              const Icon = themeIcons[baseTheme as keyof typeof themeIcons]
              return (
                <Button
                  key={baseTheme}
                  variant={theme === baseTheme ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTheme(baseTheme)}
                  className="flex-1"
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {baseTheme.charAt(0).toUpperCase() + baseTheme.slice(1)}
                </Button>
              )
            })}
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Advanced Features */}
        <div className="px-2 py-2 space-y-3">
          <Label className="text-sm font-medium">Visual Effects</Label>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">Glass Morphism</Label>
              <p className="text-xs text-muted-foreground">
                Translucent glass-like effects
              </p>
            </div>
            <Switch
              checked={enableGlassMorphism}
              onCheckedChange={setEnableGlassMorphism}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-sm">Particle Effects</Label>
              <p className="text-xs text-muted-foreground">
                Animated background particles
              </p>
            </div>
            <Switch
              checked={enableParticles}
              onCheckedChange={setEnableParticles}
            />
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Theme Preview */}
        <div className="px-2 py-2">
          <Label className="text-sm font-medium mb-2 block">Preview</Label>
          <div className={`h-20 rounded-md border theme-${advancedTheme} ${enableGlassMorphism ? 'glass' : ''} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="absolute bottom-2 left-2 right-2">
              <div className="h-2 bg-primary/30 rounded mb-1" />
              <div className="h-2 bg-secondary/30 rounded w-2/3" />
            </div>
            {enableParticles && (
              <div className="absolute inset-0">
                <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-bounce" />
                <div className="absolute top-4 right-4 w-1 h-1 bg-secondary rounded-full animate-bounce [animation-delay:0.5s]" />
                <div className="absolute bottom-4 left-8 w-1 h-1 bg-accent rounded-full animate-bounce [animation-delay:1s]" />
              </div>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
