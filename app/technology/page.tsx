import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Brain,
  Satellite,
  Smartphone,
  Shield,
  Zap,
  Database,
  Cloud,
  ArrowRight,
  Sparkles,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Globe,
  Layers,
  Activity,
  Code,
  Wifi,
  Camera,
} from "lucide-react"
import Link from "next/link"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary animate-float" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </Link>
            <Link href="/technology" className="text-primary font-medium">
              Technology
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Badge className="mb-8 glass border-primary/30 text-primary px-8 py-3 text-base font-medium">
            <Brain className="mr-2 h-5 w-5" />
            Advanced Technology Stack
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight tracking-tight">
            Cutting-Edge <span className="gradient-text">AI Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-4xl mx-auto">
            Discover the sophisticated AI models, satellite integration, and blockchain systems that power TerraPulse
            AI's revolutionary MRV platform.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Technology Architecture
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              A comprehensive ecosystem of AI, satellite data, and blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center">
                <Brain className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-2xl">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Advanced neural networks for crop analysis, yield prediction, and carbon sequestration modeling
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center">
                <Satellite className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-2xl">Satellite Integration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Real-time satellite imagery processing with multi-spectral analysis and change detection
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-2xl">Blockchain Verification</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Immutable credit verification and transparent transaction recording for trust and compliance
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-110 hover:shadow-2xl transition-all duration-500 group">
              <CardHeader className="text-center">
                <Smartphone className="h-16 w-16 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                <CardTitle className="text-2xl">Mobile Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Offline-first mobile app with voice recognition and local language support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Technology Tabs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Deep Dive: Core Technologies
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Explore the technical details behind our innovative platform
            </p>
          </div>

          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="ai" className="text-lg py-3">
                AI Models
              </TabsTrigger>
              <TabsTrigger value="satellite" className="text-lg py-3">
                Satellite Data
              </TabsTrigger>
              <TabsTrigger value="blockchain" className="text-lg py-3">
                Blockchain
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-lg py-3">
                Mobile Tech
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Brain className="mr-3 h-8 w-8 text-primary" />
                    AI & Machine Learning Pipeline
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Advanced neural networks powering intelligent farm monitoring and prediction
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Computer Vision Models</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Camera className="mr-2 h-5 w-5 text-primary" />
                          Crop health assessment from satellite imagery
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                          Yield prediction with 95% accuracy
                        </li>
                        <li className="flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-primary" />
                          Real-time pest and disease detection
                        </li>
                        <li className="flex items-center">
                          <Layers className="mr-2 h-5 w-5 text-primary" />
                          Soil composition analysis
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Predictive Analytics</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Zap className="mr-2 h-5 w-5 text-primary" />
                          Carbon sequestration modeling
                        </li>
                        <li className="flex items-center">
                          <Globe className="mr-2 h-5 w-5 text-primary" />
                          Climate impact forecasting
                        </li>
                        <li className="flex items-center">
                          <Database className="mr-2 h-5 w-5 text-primary" />
                          Biodiversity index calculation
                        </li>
                        <li className="flex items-center">
                          <Network className="mr-2 h-5 w-5 text-primary" />
                          Market price optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Technical Specifications</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">Model Architecture:</span>
                        <p className="text-muted-foreground">Transformer-based neural networks</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Training Data:</span>
                        <p className="text-muted-foreground">10M+ satellite images, 500K+ farm records</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Inference Speed:</span>
                        <p className="text-muted-foreground">Real-time processing (&lt;100ms)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="satellite" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Satellite className="mr-3 h-8 w-8 text-primary" />
                    Satellite Data Integration
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Multi-source satellite imagery with advanced processing capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Data Sources</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Satellite className="mr-2 h-5 w-5 text-primary" />
                          Sentinel-2 (10m resolution, 5-day revisit)
                        </li>
                        <li className="flex items-center">
                          <Satellite className="mr-2 h-5 w-5 text-primary" />
                          Landsat 8/9 (30m resolution, 16-day revisit)
                        </li>
                        <li className="flex items-center">
                          <Satellite className="mr-2 h-5 w-5 text-primary" />
                          Planet Labs (3m resolution, daily coverage)
                        </li>
                        <li className="flex items-center">
                          <Satellite className="mr-2 h-5 w-5 text-primary" />
                          MODIS (250m resolution, twice daily)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Processing Capabilities</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                          Multi-spectral analysis (13 bands)
                        </li>
                        <li className="flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-primary" />
                          NDVI, EVI, SAVI vegetation indices
                        </li>
                        <li className="flex items-center">
                          <Layers className="mr-2 h-5 w-5 text-primary" />
                          Change detection algorithms
                        </li>
                        <li className="flex items-center">
                          <Cloud className="mr-2 h-5 w-5 text-primary" />
                          Cloud masking and atmospheric correction
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Real-time Processing Pipeline</h4>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Badge className="px-4 py-2">Data Ingestion</Badge>
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      <Badge className="px-4 py-2">Preprocessing</Badge>
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      <Badge className="px-4 py-2">AI Analysis</Badge>
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      <Badge className="px-4 py-2">Insights Generation</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Shield className="mr-3 h-8 w-8 text-primary" />
                    Blockchain Verification System
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Immutable credit verification and transparent transaction recording
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Credit Verification</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Lock className="mr-2 h-5 w-5 text-primary" />
                          Immutable carbon credit records
                        </li>
                        <li className="flex items-center">
                          <Shield className="mr-2 h-5 w-5 text-primary" />
                          Soil health certification
                        </li>
                        <li className="flex items-center">
                          <Globe className="mr-2 h-5 w-5 text-primary" />
                          Biodiversity impact tracking
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                          Automated compliance reporting
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Smart Contracts</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Code className="mr-2 h-5 w-5 text-primary" />
                          Automated credit calculation
                        </li>
                        <li className="flex items-center">
                          <Zap className="mr-2 h-5 w-5 text-primary" />
                          Instant payment processing
                        </li>
                        <li className="flex items-center">
                          <Network className="mr-2 h-5 w-5 text-primary" />
                          Multi-party verification
                        </li>
                        <li className="flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-primary" />
                          Real-time audit trails
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Blockchain Infrastructure</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">Network:</span>
                        <p className="text-muted-foreground">Polygon (Layer 2 Ethereum)</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Consensus:</span>
                        <p className="text-muted-foreground">Proof of Stake (PoS)</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Transaction Cost:</span>
                        <p className="text-muted-foreground">&lt;$0.01 per verification</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Smartphone className="mr-3 h-8 w-8 text-primary" />
                    Mobile Platform Technology
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Farmer-friendly mobile app with offline capabilities and voice recognition
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Core Features</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Wifi className="mr-2 h-5 w-5 text-primary" />
                          Offline-first architecture
                        </li>
                        <li className="flex items-center">
                          <Activity className="mr-2 h-5 w-5 text-primary" />
                          Voice input in 12 Indian languages
                        </li>
                        <li className="flex items-center">
                          <Camera className="mr-2 h-5 w-5 text-primary" />
                          AI-powered crop photo analysis
                        </li>
                        <li className="flex items-center">
                          <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                          Real-time dashboard sync
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-foreground">Technical Stack</h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-center">
                          <Code className="mr-2 h-5 w-5 text-primary" />
                          React Native with TypeScript
                        </li>
                        <li className="flex items-center">
                          <Database className="mr-2 h-5 w-5 text-primary" />
                          SQLite for offline storage
                        </li>
                        <li className="flex items-center">
                          <Cloud className="mr-2 h-5 w-5 text-primary" />
                          GraphQL API integration
                        </li>
                        <li className="flex items-center">
                          <Lock className="mr-2 h-5 w-5 text-primary" />
                          End-to-end encryption
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Performance Metrics</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-primary">App Size:</span>
                        <p className="text-muted-foreground">&lt;25MB (optimized for 2G)</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Battery Usage:</span>
                        <p className="text-muted-foreground">&lt;5% per day (background sync)</p>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Offline Duration:</span>
                        <p className="text-muted-foreground">30 days full functionality</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Innovation Highlights
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Breakthrough technologies that set TerraPulse AI apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Edge AI Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  On-device AI inference for instant crop analysis without internet connectivity
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Federated Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborative AI training across farms while preserving data privacy and security
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Digital Twin Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Virtual farm replicas for predictive modeling and scenario planning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API & Integration */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              API & Integration Capabilities
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Seamless integration with existing agricultural and financial systems
            </p>
          </div>

          <Card className="glass border-primary/30">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Available APIs</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center">
                      <Code className="mr-3 h-5 w-5 text-primary" />
                      Farm Data API - Real-time farm metrics
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="mr-3 h-5 w-5 text-primary" />
                      Credit Calculation API - MRV computations
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-3 h-5 w-5 text-primary" />
                      Verification API - Blockchain validation
                    </li>
                    <li className="flex items-center">
                      <Activity className="mr-3 h-5 w-5 text-primary" />
                      Analytics API - Predictive insights
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Integration Partners</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center">
                      <Network className="mr-3 h-5 w-5 text-primary" />
                      NABARD Core Banking Systems
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-3 h-5 w-5 text-primary" />
                      Indian Carbon Market Platform
                    </li>
                    <li className="flex items-center">
                      <Database className="mr-3 h-5 w-5 text-primary" />
                      FPO Management Systems
                    </li>
                    <li className="flex items-center">
                      <Cloud className="mr-3 h-5 w-5 text-primary" />
                      Government Agricultural Portals
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Experience Our Technology</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            See how our advanced AI and satellite technology can transform your agricultural operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              Request Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
            >
              Technical Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TerraPulse AI</span>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Intelligent MRV for regenerative agriculture
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Digital Twin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Credit System
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Technology</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/technology" className="hover:text-foreground transition-colors text-lg">
                    AI Models
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Integration Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors text-lg">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p className="text-lg">&copy; 2025 TerraPulse AI. Empowering sustainable agriculture through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
