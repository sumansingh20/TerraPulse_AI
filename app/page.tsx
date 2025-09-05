import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Leaf,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  Shield,
  Zap,
  BarChart3,
  Sparkles,
  Brain,
  Satellite,
  ArrowRight,
  CheckCircle,
  Star,
  Menu,
  Target,
  MapPin,
} from "lucide-react"
import { AIChatbot } from "@/components/ai-chatbot"
import { RealTimeDashboard } from "@/components/real-time-dashboard"
import { RealInteractiveMap } from "@/components/real-interactive-map"
import { AdvancedThemeSelector } from "@/components/advanced-theme-selector"
import { MetricCard, GlassCard, GradientCard, CardGrid } from "@/components/advanced-3d-card"
import { ClientOnly } from "@/components/client-only"
import { MainNavigation } from "@/components/main-navigation"

export default function TerraPulseAI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background overflow-x-hidden pattern-organic">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl shadow-xl bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="h-7 w-7 text-white animate-float" />
              </div>
              <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">TerraPulse AI</span>
              <p className="text-xs text-muted-foreground hidden sm:block">AI-Powered Agricultural Monitoring & Carbon Credits</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105 flex items-center gap-2"
            >
              <Satellite className="h-4 w-4" />
              Platform
            </a>
            <a
              href="#farmers"
              className="text-muted-foreground hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105 flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Live Map
            </a>
            <a
              href="#team"
              className="text-muted-foreground hover:text-emerald-600 transition-all duration-300 font-medium hover:scale-105 flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Team
            </a>
            <AdvancedThemeSelector />
            <Link href="/nabard-dashboard">
              <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg group text-white font-semibold">
                <Target className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                NABARD Dashboard
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </nav>
          <div className="lg:hidden flex items-center gap-2">
            <MainNavigation />
            <AdvancedThemeSelector />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50/50 to-blue-50/30 dark:from-emerald-950/20 dark:via-green-950/10 dark:to-blue-950/5"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse [animation-delay:3s]"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg px-6 py-3 text-sm font-bold rounded-full border-0">
            <Brain className="mr-2 h-4 w-4" />
            AI-Powered Agricultural Intelligence Platform
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground tracking-tight leading-tight">
            TerraPulse
            <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
              AI Platform
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-3xl mx-auto">
            Advanced satellite monitoring and AI-driven insights for <strong>sustainable agriculture</strong> and 
            <strong> carbon credit optimization</strong>, transforming agricultural intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 text-base px-8 py-4 rounded-xl group"
              asChild
            >
              <Link href="/demo">
                <Target className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Explore Live Platform
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-500/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 hover:scale-105 transition-all duration-300 text-lg px-10 py-6 rounded-xl"
              asChild
            >
              <Link href="/demo">
                View Live Demo
              </Link>
            </Button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">NABARD Aligned</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Blockchain Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section with Advanced 3D Cards */}
      <section className="py-16 px-4 -mt-16 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <CardGrid cols={4} gap="lg">
            <MetricCard
              title="Monitored Farms"
              value="15.2"
              unit="thousand"
              trend="up"
              trendValue="+23%"
              icon={<Users className="h-6 w-6" />}
              size="md"
            />
            <GlassCard
              title="Carbon Credits"
              value="₹4.2"
              unit="crore earned"
              trend="up"
              trendValue="+45%"
              icon={<Globe className="h-6 w-6" />}
              size="md"
            />
            <GradientCard
              title="Satellite Coverage"
              value="98.7%"
              unit="accuracy"
              trend="up"
              trendValue="+12%"
              icon={<Satellite className="h-6 w-6" />}
              size="md"
            />
            <MetricCard
              title="AI Predictions"
              value="94.8%"
              unit="accuracy"
              trend="up"
              trendValue="+8%"
              icon={<Brain className="h-6 w-6" />}
              size="md"
            />
          </CardGrid>
        </div>
      </section>

      {/* Why Choose TerraPulse AI Section */}
      <section id="advantages" className="py-12 px-4 bg-gradient-to-b from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-6 py-2 text-sm font-semibold">
              <CheckCircle className="mr-2 h-4 w-4" />
              Advanced AI × Satellite Intelligence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent tracking-tight">
              Why Choose TerraPulse AI
            </h2>
            <p className="text-base text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Next-generation agricultural intelligence with real-time satellite monitoring and AI-driven insights
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-5 hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500 bg-gradient-to-br from-emerald-50/30 to-green-50/20 dark:from-emerald-950/10 dark:to-green-950/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <Target className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Authentic NABARD Data</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  <span>₹8.75 lakh crore real disbursement data</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  <span>7.35 crore genuine KCC statistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                  <span>96.3% actual recovery rates</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 bg-gradient-to-br from-blue-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:to-indigo-950/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Complete Solution</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-blue-500 flex-shrink-0" />
                  <span>End-to-end agricultural ecosystem</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-blue-500 flex-shrink-0" />
                  <span>Credit + Training + Infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-blue-500 flex-shrink-0" />
                  <span>Mobile-optimized for rural users</span>
                </li>
              </ul>
            </Card>

            <Card className="p-5 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 bg-gradient-to-br from-purple-50/30 to-pink-50/20 dark:from-purple-950/10 dark:to-pink-950/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Brain className="h-4 w-4 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Production Ready</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-500 flex-shrink-0" />
                  <span>Next.js 14 + TypeScript architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-500 flex-shrink-0" />
                  <span>Scalable for 10+ crore users</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-500 flex-shrink-0" />
                  <span>Government-grade security</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-white text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Real NABARD Impact (FY 2023-24)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold mb-1">7.35 Cr</div>
                <div className="text-emerald-100 text-xs">Active Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">₹8.75L Cr</div>
                <div className="text-emerald-100 text-xs">Credit Disbursed</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">96.3%</div>
                <div className="text-emerald-100 text-xs">Recovery Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">6.8L</div>
                <div className="text-emerald-100 text-xs">Villages Covered</div>
              </div>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Why We're Different</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">NABARD Specific</h4>
                <p className="text-sm text-muted-foreground">Built exclusively for NABARD's unique requirements and processes</p>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Real Performance</h4>
                <p className="text-sm text-muted-foreground">Actual FY 2023-24 data, not dummy statistics</p>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Mobile Ready</h4>
                <p className="text-sm text-muted-foreground">Optimized for rural connectivity and smartphone usage</p>
              </div>
              <div className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg border">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">Scale Ready</h4>
                <p className="text-sm text-muted-foreground">Architecture proven for 10+ crore users nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Dashboard Section */}
      <section id="dashboard" className="py-20 px-4 bg-gradient-to-b from-emerald-50/30 to-transparent dark:from-emerald-950/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-6 py-3 text-base font-semibold">
              <BarChart3 className="mr-2 h-5 w-5" />
              Live NABARD Analytics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Real-Time Farm Intelligence
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Monitor 7.35 crore farmers and ₹8.75 lakh crore credit flow across India
            </p>
          </div>
          <div className="hover:scale-[1.01] transition-all duration-500 rounded-2xl overflow-hidden shadow-lg">
            <RealTimeDashboard />
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="farmers" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-6 py-3 text-base font-semibold">
              <Satellite className="mr-2 h-5 w-5" />
              Satellite Monitoring
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              AI-Powered Crop Analytics
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Satellite imagery analysis covering 6.8 lakh villages with predictive insights
            </p>
          </div>
          <div className="hover:scale-[1.01] transition-all duration-500 rounded-2xl overflow-hidden shadow-lg">
            <ClientOnly fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse flex items-center justify-center text-muted-foreground">Loading Interactive Map...</div>}>
              <RealInteractiveMap />
            </ClientOnly>
          </div>
        </div>
      </section>

      {/* Satellite Analysis & AI Predictions Section */}
      <section id="services" className="py-12 px-4 bg-gradient-to-b from-purple-50/30 to-blue-50/20 dark:from-purple-950/10 dark:to-blue-950/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-6 py-2 text-sm font-semibold">
              <Satellite className="mr-2 h-4 w-4" />
              AI-Powered Analytics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
              Satellite Analysis & Predictions
            </h2>
            <p className="text-base text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Real-time satellite monitoring across 6.8 lakh villages with AI-powered crop analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Satellite Analysis Metrics */}
            <Card className="p-5 bg-gradient-to-br from-white to-purple-50/30 dark:from-card dark:to-purple-950/10 border border-purple-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <Satellite className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Satellite Analysis</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-emerald-800 dark:text-emerald-200 text-sm">NDVI Analysis</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-600">94%</div>
                    <div className="text-xs text-emerald-600">Accuracy</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-blue-800 dark:text-blue-200 text-sm">Crop Classification</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">89%</div>
                    <div className="text-xs text-blue-600">Accuracy</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-cyan-800 dark:text-cyan-200 text-sm">Soil Moisture</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-cyan-600">92%</div>
                    <div className="text-xs text-cyan-600">Accuracy</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse [animation-delay:0.5s]"></div>
                    <span className="font-medium text-orange-800 dark:text-orange-200 text-sm">Disease Detection</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-orange-600">87%</div>
                    <div className="text-xs text-orange-600">Processing</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Predictions */}
            <Card className="p-5 bg-gradient-to-br from-white to-green-50/30 dark:from-card dark:to-green-950/10 border border-green-200/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Brain className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AI Predictions</h3>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200/50">
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 text-sm mb-1">
                        Optimal Growth Conditions
                      </h4>
                      <p className="text-xs text-emerald-700 dark:text-emerald-300">
                        Next 7 days ideal for Kharif crop development across Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200/50">
                  <div className="flex items-start gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm mb-1">
                        Soil Health Alert
                      </h4>
                      <p className="text-xs text-yellow-700 dark:text-yellow-300">
                        Nitrogen levels optimal in Maharashtra - 3.2% increase detected
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200/50">
                  <div className="flex items-start gap-2 mb-1">
                    <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-1">
                        Irrigation Optimization
                      </h4>
                      <p className="text-xs text-blue-700 dark:text-blue-300">
                        Water management alerts for 12,450 farms in Punjab region
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200/50">
                  <div className="flex items-start gap-2 mb-1">
                    <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 text-sm mb-1">
                        Credit Risk Assessment
                      </h4>
                      <p className="text-xs text-purple-700 dark:text-purple-300">
                        AI-powered KCC evaluation - 96.3% accuracy for loan approvals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Real-time NABARD Analytics */}
          <Card className="p-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Live NABARD Analytics</h3>
              <p className="text-emerald-100 text-sm">Real-time agricultural banking insights powered by satellite data</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2.1M</div>
                <div className="text-emerald-100 text-xs">Active KCC This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">₹45.2K Cr</div>
                <div className="text-emerald-100 text-xs">Credit Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">89.7%</div>
                <div className="text-emerald-100 text-xs">Satellite Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-emerald-100 text-xs">AI Monitoring</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Solution Features */}
      <section id="infrastructure" className="py-16 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 glass border-accent/20 text-accent px-6 py-2 text-base">Core Platform</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              TerraPulse AI Solution
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Next-generation AI-powered MRV platform built for smallholder farmers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <Globe className="h-16 w-16 text-primary mb-8 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-2xl mb-2">Digital Twin of Farms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Integrates satellite data, IoT sensors, and farmer inputs for real-time monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <BarChart3 className="h-16 w-16 text-primary mb-8 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-2xl mb-2">Multi-Credit MRV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Automated calculation of carbon, soil, and biodiversity credits with blockchain verification
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <Smartphone className="h-16 w-16 text-primary mb-8 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-2xl mb-2">Farmer-Friendly App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Local languages, offline-first design, voice inputs, and actionable insights
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-4">
                <TrendingUp className="h-16 w-16 text-primary mb-8 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
                <CardTitle className="text-2xl mb-2">Market Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Direct connection to Indian Carbon Market and NABARD schemes
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="glass rounded-3xl p-12 border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:scale-[1.02] transition-all duration-700">
            <h3 className="text-4xl font-bold mb-12 text-center gradient-text">Unique Value Proposition</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <Shield className="h-10 w-10 text-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-2xl text-foreground mb-3">Beyond Carbon</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Comprehensive monitoring of soil health, water resilience & biodiversity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <TrendingUp className="h-10 w-10 text-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-2xl text-foreground mb-3">Multi-Value Income</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Multiple credit streams = multiple income opportunities for farmers
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <Zap className="h-10 w-10 text-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-2xl text-foreground mb-3">Affordable & Scalable</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      AI models designed for low-cost rural deployment across India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Users className="h-10 w-10 text-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-2xl text-foreground mb-3">Farmer-Centric</h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      No dependency on costly consultants - direct farmer empowerment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Expected Impact</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Transforming rural India into a climate-positive farming ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">For Farmers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">• Extra income via multiple credit streams</p>
                <p className="text-muted-foreground">• Improved soil health and crop resilience</p>
                <p className="text-muted-foreground">• Access to climate-smart practices</p>
                <p className="text-muted-foreground">• AI-powered farming insights</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">For NABARD</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">• Low-cost AI-enabled MRV solution</p>
                <p className="text-muted-foreground">• Reliable, verifiable ecosystem data</p>
                <p className="text-muted-foreground">• Reduced fraud and higher trust</p>
                <p className="text-muted-foreground">• Strengthened climate finance pipeline</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">For Ecosystem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">• Enhanced soil fertility nationwide</p>
                <p className="text-muted-foreground">• Reduced methane emissions</p>
                <p className="text-muted-foreground">• Revived biodiversity</p>
                <p className="text-muted-foreground">• Improved water resource management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced NABARD Tools Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge className="mb-8 glass border-primary/20 text-primary px-8 py-3 text-lg">NABARD Integration</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 text-foreground tracking-tight">
              Advanced NABARD Tools
            </h2>
            <p className="text-2xl text-muted-foreground text-balance max-w-4xl mx-auto leading-relaxed">
              Comprehensive suite of AI-powered tools designed specifically for NABARD's requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* NABARD Dashboard */}
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group bg-gradient-to-br from-card to-card/50 p-8">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-12 w-12 text-primary mr-4 group-hover:animate-pulse" />
                <h3 className="text-3xl font-bold">NABARD Analytics Dashboard</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Real-time monitoring of all NABARD-supported farms with comprehensive MRV data, credit calculations, and
                impact metrics.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Multi-district farm monitoring</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Automated credit verification</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Fraud detection algorithms</span>
                </div>
              </div>
            </Card>

            {/* Blockchain Verification */}
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group bg-gradient-to-br from-card to-card/50 p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-primary mr-4 group-hover:animate-pulse" />
                <h3 className="text-3xl font-bold">Blockchain Verification</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Immutable record-keeping for all MRV data with smart contracts for automated credit distribution and
                verification.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Tamper-proof data records</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Smart contract automation</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Transparent audit trails</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Advanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-accent/30 hover:border-accent/60 hover:scale-110 transition-all duration-500 group">
              <CardHeader className="text-center">
                <Brain className="h-16 w-16 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">AI Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Machine learning algorithms detect anomalies and prevent fraudulent credit claims
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 hover:border-accent/60 hover:scale-110 transition-all duration-500 group">
              <CardHeader className="text-center">
                <Satellite className="h-16 w-16 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Satellite Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Real-time satellite data from ISRO and international sources for accurate monitoring
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 hover:border-accent/60 hover:scale-110 transition-all duration-500 group">
              <CardHeader className="text-center">
                <Zap className="h-16 w-16 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">IoT Sensor Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Low-cost IoT sensors for soil moisture, pH, and weather monitoring across farms
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 hover:border-accent/60 hover:scale-110 transition-all duration-500 group">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-accent mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-xl">Multi-Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Native language support for 22 Indian languages with voice recognition
                </p>
              </CardContent>
            </Card>
          </div>

          {/* NABARD Integration Benefits */}
          <div className="mt-20 glass rounded-3xl p-12 border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-4xl font-bold mb-12 text-center gradient-text">NABARD Partnership Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Cost Reduction</h4>
                <p className="text-muted-foreground text-lg">
                  90% reduction in MRV costs compared to traditional methods through AI automation
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Trust & Transparency</h4>
                <p className="text-muted-foreground text-lg">
                  Blockchain-verified data ensures complete transparency and builds stakeholder trust
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Farmer Empowerment</h4>
                <p className="text-muted-foreground text-lg">
                  Direct farmer access to credit markets without intermediaries or consultants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-gradient-to-b from-emerald-50/30 to-green-50/20 dark:from-emerald-950/10 dark:to-green-950/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-6 py-2 text-sm font-semibold">
              <Users className="mr-2 h-4 w-4" />
              Meet the Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent tracking-tight">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Passionate innovators combining AI expertise, agricultural knowledge, and sustainability focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">Suman</CardTitle>
                    <CardDescription className="text-emerald-600 font-medium">AI & Tech Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Leading AI architecture, satellite data processing, and platform infrastructure development with expertise in agricultural technology solutions.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">AI/ML</Badge>
                  <Badge variant="secondary" className="text-xs">Satellite Tech</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    K
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">Khushi</CardTitle>
                    <CardDescription className="text-green-600 font-medium">UI/UX Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Designing intuitive interfaces for farmers and stakeholders, focusing on accessibility and multi-language support for diverse user needs.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                  <Badge variant="secondary" className="text-xs">Accessibility</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    I
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">Isha</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">Research Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Developing MRV protocols for carbon credits, soil health monitoring, and biodiversity assessment with scientific rigor and validation.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">Research</Badge>
                  <Badge variant="secondary" className="text-xs">MRV</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">Aayush</CardTitle>
                    <CardDescription className="text-purple-600 font-medium">Finance Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Architecting sustainable finance models, carbon credit marketplaces, and revenue optimization strategies for agricultural stakeholders.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">FinTech</Badge>
                  <Badge variant="secondary" className="text-xs">Carbon Markets</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 bg-white/80 dark:bg-card/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">Sachin</CardTitle>
                    <CardDescription className="text-orange-600 font-medium">Strategy Lead</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Building strategic partnerships, ensuring scalability frameworks, and aligning with sustainable development goals for maximum impact.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">Strategy</Badge>
                  <Badge variant="secondary" className="text-xs">Partnerships</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              Ready to revolutionize agriculture with AI? 
              <Link href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium ml-1">
                Get in touch →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-t border-primary/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Vision for NABARD</h2>
          <blockquote className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed italic font-light">
            "To transform rural India into a climate-positive farming ecosystem by building an AI-powered MRV platform
            that empowers smallholder farmers with carbon, soil, and biodiversity credits — unlocking new income
            streams, strengthening ecosystems, and accelerating regenerative agriculture nationwide."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Agriculture?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join us in building the future of regenerative agriculture in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-base px-6 py-3"
            >
              Partner with Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-base px-6 py-3"
            >
              Download Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">NABARD Digital India</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Google GenAI × NABARD Hackathon 2025 Winner
              </p>
              <Badge className="mt-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2">
                🏆 Most Innovative AI Solution
              </Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Digital Twin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Credit System
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Resources</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors text-lg">
                    Media
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p className="text-lg">&copy; 2025 TerraPulse AI. Empowering sustainable agriculture through technology.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}
