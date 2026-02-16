import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Eye,
  CheckCircle,
  Zap,
  MapPin,
  Activity,
  CloudRain,
  TrendingUp,
  Settings,
  Play,
  Download,
  Smartphone,
  Shield,
} from "lucide-react"

export default function FieldVisionPage() {
  const features = [
    {
      icon: MapPin,
      title: "Drone Mapping",
      description: "Advanced aerial mapping with high-resolution cameras and multispectral sensors for comprehensive field coverage"
    },
    {
      icon: Activity,
      title: "Soil Sensors",
      description: "Network of IoT soil sensors monitoring moisture, temperature, pH, and nutrient levels in real-time"
    },
    {
      icon: CloudRain,
      title: "Weather Stations",
      description: "Micro-weather stations providing hyperlocal weather data and environmental monitoring"
    },
    {
      icon: TrendingUp,
      title: "Growth Tracking",
      description: "AI-powered crop growth analysis using computer vision and machine learning algorithms"
    },
    {
      icon: Eye,
      title: "AI Crop Counting",
      description: "Automated crop counting and plant health assessment using advanced computer vision"
    },
    {
      icon: Settings,
      title: "Irrigation Optimization",
      description: "Smart irrigation zone management with precision water application based on real-time data"
    }
  ]

  const specifications = [
    { label: "Drone Coverage", value: "Up to 500 acres per flight" },
    { label: "Camera Resolution", value: "42MP RGB + Multispectral" },
    { label: "Flight Time", value: "45 minutes per battery" },
    { label: "Sensor Network", value: "Up to 200 sensors per field" },
    { label: "Data Frequency", value: "Real-time streaming every 15 minutes" },
    { label: "Weather Accuracy", value: "±0.5°C temperature, ±2% humidity" },
    { label: "Connectivity", value: "4G/5G, LoRaWAN, Satellite backup" },
    { label: "Battery Life", value: "2+ years for soil sensors" }
  ]

  const components = [
    {
      title: "Autonomous Drones",
      description: "Professional-grade agricultural drones with advanced imaging capabilities",
      specs: ["42MP cameras", "Multispectral sensors", "45-min flight time", "GPS precision"]
    },
    {
      title: "Soil Sensor Network",
      description: "Wireless IoT sensors for comprehensive soil monitoring",
      specs: ["Multi-parameter sensing", "Long battery life", "Weather resistant", "Real-time data"]
    },
    {
      title: "Weather Stations",
      description: "Precision micro-weather monitoring systems",
      specs: ["Temperature/Humidity", "Wind speed/direction", "Rainfall measurement", "Solar radiation"]
    },
    {
      title: "Edge Computing Hub",
      description: "On-farm processing unit for real-time data analysis",
      specs: ["AI processing", "Local storage", "Cellular connectivity", "Solar powered"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              v2.8 • AI-Powered Field Monitoring
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mr-4">
                <Eye className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Field Vision System
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered field monitoring with integrated drone mapping, soil sensors, and weather stations for complete farm intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Play className="mr-2 h-4 w-4" />
                Start Monitoring
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced Field Monitoring Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive monitoring solution with cutting-edge technology integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
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

      {/* System Components */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">System Components</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated hardware and software components working together for comprehensive monitoring
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {components.map((component) => (
              <Card key={component.title} className="p-6 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                  <CardDescription className="text-base">
                    {component.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {component.specs.map((spec) => (
                      <div key={spec} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-blue-600" />
                  Technical Specifications
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
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-blue-800">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">500</div>
                      <div className="text-sm text-muted-foreground">Acres Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">15min</div>
                      <div className="text-sm text-muted-foreground">Data Update</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                    Latest Updates v2.8
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">AI crop counting technology</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Pest heat mapping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Irrigation zone optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Enhanced drone autonomy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Field Vision System?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Increase Yield</h3>
              <p className="text-muted-foreground mb-4">
                Advanced monitoring helps optimize crop conditions, leading to 15-25% yield improvements.
              </p>
              <div className="text-2xl font-bold text-green-600">+20% Yield</div>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reduce Costs</h3>
              <p className="text-muted-foreground mb-4">
                Optimize resource usage and reduce waste through precision monitoring and analytics.
              </p>
              <div className="text-2xl font-bold text-blue-600">-30% Costs</div>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 w-fit mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-muted-foreground mb-4">
                Automated systems reduce manual work while providing actionable insights.
              </p>
              <div className="text-2xl font-bold text-purple-600">24/7 Auto</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Field Monitoring Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join progressive farmers using AI-powered field monitoring for smarter agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Get Product Info
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
