"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useAdvancedThemeSafe } from "./advanced-theme-provider"
import { AdvancedThemeSelector } from "./advanced-theme-selector"
import { Advanced3DCard, MetricCard, GlassCard, GradientCard, CardGrid } from "./advanced-3d-card"
import {
  Palette,
  Sparkles,
  Eye,
  Layers,
  Zap,
  Globe,
  Leaf,
  TrendingUp,
  BarChart3,
  Activity,
  Sun,
  Droplets,
  Mountain,
  Wheat,
  Settings
} from "lucide-react"

const themeFeatures = {
  nature: {
    name: "Nature Theme",
    description: "Fresh green agricultural theme with natural earth tones",
    icon: Leaf,
    color: "text-green-600",
    features: ["Organic patterns", "Green gradients", "Natural animations", "Fresh feel"]
  },
  earth: {
    name: "Earth Theme", 
    description: "Warm earth tones and soil colors for grounded experience",
    icon: Mountain,
    color: "text-amber-600",
    features: ["Soil patterns", "Warm browns", "Earthy textures", "Rustic feel"]
  },
  sky: {
    name: "Sky Theme",
    description: "Cool blue sky and water tones for clean interface",
    icon: Droplets,
    color: "text-blue-600", 
    features: ["Water ripples", "Blue gradients", "Cloud patterns", "Airy feel"]
  },
  harvest: {
    name: "Harvest Theme",
    description: "Golden harvest and autumn colors for prosperity",
    icon: Wheat,
    color: "text-orange-600",
    features: ["Golden accents", "Autumn colors", "Harvest patterns", "Warm glow"]
  },
  carbon: {
    name: "Carbon Theme",
    description: "Professional carbon tracking theme for business",
    icon: Settings,
    color: "text-slate-600",
    features: ["Professional look", "Carbon metrics", "Business patterns", "Clean lines"]
  }
}

export function AdvancedThemeShowcase() {
  const { theme, enableGlassMorphism, enableParticles } = useAdvancedThemeSafe()
  const currentTheme = themeFeatures[theme as keyof typeof themeFeatures] || themeFeatures.nature
  const ThemeIcon = currentTheme.icon

  return (
    <div className="w-full space-y-8">
      {/* Theme Header */}
      <div className="glass rounded-2xl p-8 border border-primary/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full bg-primary/10 ${currentTheme.color}`}>
              <ThemeIcon className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">{currentTheme.name}</h2>
              <p className="text-muted-foreground text-lg">{currentTheme.description}</p>
            </div>
          </div>
          <AdvancedThemeSelector />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Theme Features
            </h3>
            <div className="space-y-2">
              {currentTheme.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="mr-2">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Visual Effects
            </h3>
            <div className="space-y-2">
              <Badge variant={enableGlassMorphism ? "default" : "outline"}>
                Glass Morphism {enableGlassMorphism ? "ON" : "OFF"}
              </Badge>
              <Badge variant={enableParticles ? "default" : "outline"}>
                Particles {enableParticles ? "ON" : "OFF"}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Current Mode
            </h3>
            <div className="flex flex-col gap-2">
              <Badge variant="outline" className="justify-start">
                Theme: {theme}
              </Badge>
              <Badge variant="outline" className="justify-start">
                Advanced Features: Active
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Card Variants Showcase */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Advanced 3D Card Components</h3>
          <p className="text-muted-foreground">Showcasing different card variants with the current theme</p>
        </div>

        <CardGrid cols={4} gap="md">
          <MetricCard
            title="Active Farms"
            value="2,847"
            unit="farms"
            trend="up"
            trendValue="+23%"
            icon={<Globe className="h-6 w-6" />}
            description="Total registered farms"
          />
          <GlassCard
            title="Carbon Credits"
            value="156.2"
            unit="tCO2e"
            trend="up" 
            trendValue="+45%"
            icon={<Leaf className="h-6 w-6" />}
            description="Credits generated this month"
          />
          <GradientCard
            title="Soil Health"
            value="87.3"
            unit="/100"
            trend="up"
            trendValue="+12%"
            icon={<TrendingUp className="h-6 w-6" />}
            description="Average soil health score"
          />
          <MetricCard
            title="AI Accuracy"
            value="94.7"
            unit="%"
            trend="stable"
            trendValue="±0.1%"
            icon={<Activity className="h-6 w-6" />}
            description="Model prediction accuracy"
          />
        </CardGrid>
      </div>

      {/* Theme Comparison Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">All Available Themes</h3>
          <p className="text-muted-foreground">Preview of all theme variations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(themeFeatures).map(([themeKey, themeData]) => {
            const Icon = themeData.icon
            const isActive = theme === themeKey
            
            return (
              <Card
                key={themeKey}
                className={`
                  relative overflow-hidden transition-all duration-300 hover:scale-105
                  ${isActive ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}
                  ${enableGlassMorphism ? 'glass' : 'bg-card'}
                `}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${themeData.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{themeData.name}</CardTitle>
                      {isActive && (
                        <Badge variant="default" size="sm">Active</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {themeData.description}
                  </p>
                  <div className="space-y-2">
                    {themeData.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <Sparkles className="h-3 w-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                {/* Theme Preview Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 theme-${themeKey}`} 
                     style={{ 
                       background: `linear-gradient(90deg, var(--color-theme-primary), var(--color-theme-secondary))` 
                     }} 
                />
              </Card>
            )
          })}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="glass rounded-2xl p-8 border border-primary/20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Theme Demo</h3>
          <p className="text-muted-foreground">See how the theme affects different UI elements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Buttons Demo */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Button Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Primary
              </Button>
              <Button variant="secondary" size="sm">Secondary</Button>
              <Button variant="outline" size="sm">Outline</Button>
              <Button variant="ghost" size="sm">Ghost</Button>
            </div>
          </div>

          {/* Cards Demo */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Card Styles</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border bg-card text-center">
                <div className="h-2 bg-primary/20 rounded mb-2"></div>
                <div className="text-xs text-muted-foreground">Standard</div>
              </div>
              <div className="p-3 rounded-lg glass text-center">
                <div className="h-2 bg-primary/20 rounded mb-2"></div>
                <div className="text-xs text-muted-foreground">Glass</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Switch themes using the selector above to see real-time changes
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">
              <Palette className="h-4 w-4 mr-2" />
              {Object.keys(themeFeatures).length} Themes Available
            </Badge>
            <Badge variant="outline">
              <Layers className="h-4 w-4 mr-2" />
              Advanced Effects Enabled
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
