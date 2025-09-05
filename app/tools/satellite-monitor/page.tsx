import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Satellite,
  CheckCircle,
  Star,
  Zap,
  Globe,
  BarChart3,
  Clock,
  Camera,
  Map,
  AlertTriangle,
  Download,
  Settings,
  Play,
} from "lucide-react"

export default function SatelliteMonitorPage() {
  const features = [
    {
      icon: Globe,
      title: "Real-time Satellite Data",
      description: "Access live satellite imagery from multiple sources including Sentinel, Landsat, and commercial providers"
    },
    {
      icon: BarChart3,
      title: "Multi-spectral Analysis",
      description: "Advanced spectral analysis across visible, near-infrared, and thermal bands for comprehensive crop assessment"
    },
    {
      icon: Clock,
      title: "Historical Comparisons",
      description: "Compare current conditions with historical data spanning up to 10 years for trend analysis"
    },
    {
      icon: AlertTriangle,
      title: "Automated Alerts",
      description: "Receive instant notifications for crop stress, weather threats, and optimal harvest timing"
    },
    {
      icon: Camera,
      title: "Hyperspectral Imaging",
      description: "Advanced hyperspectral analysis for detecting early signs of disease and nutrient deficiencies"
    },
    {
      icon: Map,
      title: "3D Terrain Mapping",
      description: "Generate detailed 3D terrain models for precision agriculture and water management planning"
    }
  ]

  const specifications = [
    { label: "Satellite Sources", value: "Sentinel-2, Landsat 8/9, WorldView, PlanetScope" },
    { label: "Resolution", value: "Up to 3m spatial resolution" },
    { label: "Update Frequency", value: "Daily to weekly depending on source" },
    { label: "Spectral Bands", value: "13 bands (443nm - 2190nm)" },
    { label: "Coverage", value: "Global coverage with focus on Indian subcontinent" },
    { label: "Data Processing", value: "Cloud-based with edge computing capabilities" },
    { label: "API Integration", value: "RESTful API with real-time streaming" },
    { label: "Storage", value: "Unlimited cloud storage included" }
  ]

  const useCases = [
    {
      title: "Crop Health Monitoring",
      description: "Monitor NDVI, SAVI, and other vegetation indices to assess crop health and identify stressed areas",
      benefits: ["Early disease detection", "Yield prediction", "Treatment optimization"]
    },
    {
      title: "Irrigation Management",
      description: "Analyze soil moisture content and evapotranspiration rates for efficient water usage",
      benefits: ["30% water savings", "Improved crop yields", "Reduced operational costs"]
    },
    {
      title: "Pest & Disease Detection",
      description: "Identify pest infestations and disease outbreaks through spectral signature analysis",
      benefits: ["95% accuracy in detection", "Early intervention possible", "Reduced pesticide usage"]
    },
    {
      title: "Weather Risk Assessment",
      description: "Monitor weather patterns and predict potential risks to crop production",
      benefits: ["Storm tracking", "Drought prediction", "Frost warnings"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              v3.2 • Professional Monitoring Tool
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-green-100 mr-4">
                <Satellite className="h-12 w-12 text-emerald-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Satellite Monitor Pro
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced satellite imagery analysis for comprehensive crop health monitoring with real-time data processing and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
                <Play className="mr-2 h-4 w-4" />
                Start Monitoring
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Satellite Monitoring Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive satellite-based monitoring with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading satellite monitoring capabilities with professional-grade accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-emerald-600" />
                  System Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center py-2 border-b border-muted">
                      <span className="font-medium text-muted-foreground">{spec.label}</span>
                      <span className="text-right font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-emerald-800">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">95%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">3m</div>
                      <div className="text-sm text-muted-foreground">Resolution</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                    Latest Updates v3.2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Hyperspectral imaging support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">3D terrain mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Carbon footprint tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">Enhanced AI processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Satellite Monitor Pro transforms agricultural operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-emerald-600 mb-3">Key Benefits:</h4>
                    {useCase.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Monitoring Your Crops Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers using Satellite Monitor Pro for precision agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
