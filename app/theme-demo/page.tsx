import { AdvancedThemeShowcase } from "@/components/advanced-theme-showcase"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Sparkles, Eye } from "lucide-react"

export default function ThemeDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Palette className="h-10 w-10 text-primary animate-pulse" />
                <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-spin" />
              </div>
              <h1 className="text-4xl font-bold gradient-text">Advanced Theme System</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the next-generation agricultural theme system with real-time visual effects, 
              glass morphism, and interactive components designed for professional farming applications.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge className="bg-primary/10 text-primary border-primary/30">
                <Eye className="h-4 w-4 mr-2" />
                5 Agricultural Themes
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/30">
                <Sparkles className="h-4 w-4 mr-2" />
                Advanced Visual Effects
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Theme Showcase */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <AdvancedThemeShowcase />
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-12 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technical Implementation</h2>
            <p className="text-lg text-muted-foreground">
              Built with modern web technologies for optimal performance and accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-lg">Real-time Theme Switching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Dynamic CSS custom properties with React context for instant theme changes without page reload
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30">
              <CardHeader>
                <CardTitle className="text-lg">Glass Morphism Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  CSS backdrop-filter with translucent backgrounds for modern visual depth and clarity
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg">Particle System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Canvas-based particle effects with theme-specific colors and interactive connections
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-green-500/30">
              <CardHeader>
                <CardTitle className="text-lg">3D Card Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Multi-layered depth effects with hover animations and trend indicators for data visualization
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Accessibility Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  High contrast mode, reduced motion preferences, and keyboard navigation support
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Performance Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  React.useMemo optimization, efficient CSS transitions, and hardware-accelerated animations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
