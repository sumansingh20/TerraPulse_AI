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
  Target,
  MapPin,
  CloudRain,
  Sprout,
  Calculator,
  Database,
  Bell,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Settings,
  Lock,
  Wifi,
} from "lucide-react"

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: Satellite,
      title: "AI-Powered Satellite Monitoring",
      description: "Real-time crop health analysis using advanced satellite imagery and machine learning algorithms",
      benefits: ["24/7 monitoring", "Early disease detection", "Yield prediction", "Weather pattern analysis"],
      category: "Monitoring",
      accuracy: "92%",
      newFeatures: ["Hyperspectral imaging", "3D crop modeling", "Drone integration"]
    },
    {
      icon: Brain,
      title: "Smart Analytics Dashboard",
      description: "Comprehensive analytics platform providing actionable insights for agricultural decision making",
      benefits: ["Real-time data visualization", "Predictive analytics", "Custom reports", "Mobile accessibility"],
      category: "Analytics",
      accuracy: "89%",
      newFeatures: ["Voice commands", "AR visualization", "Auto-insights generation"]
    },
    {
      icon: CloudRain,
      title: "Weather Intelligence",
      description: "Advanced weather forecasting and climate pattern analysis for optimal farming decisions",
      benefits: ["15-day weather forecast", "Micro-climate analysis", "Irrigation optimization", "Risk assessment"],
      category: "Weather",
      accuracy: "94%",
      newFeatures: ["Climate change modeling", "Extreme weather alerts", "Season optimization"]
    },
    {
      icon: Sprout,
      title: "Crop Health Management",
      description: "AI-driven crop health monitoring with early disease and pest detection capabilities",
      benefits: ["Disease identification", "Pest alert system", "Treatment recommendations", "Growth tracking"],
      category: "Health",
      accuracy: "96%",
      newFeatures: ["Plant stress analysis", "Nutrient deficiency detection", "Biological pest control"]
    },
    {
      icon: Calculator,
      title: "Financial Planning Tools",
      description: "Comprehensive financial management tools for farmers and agricultural institutions",
      benefits: ["Loan calculations", "Subsidy tracking", "Budget planning", "ROI analysis"],
      category: "Finance",
      accuracy: "99%",
      newFeatures: ["Blockchain payments", "Crypto farming tokens", "Insurance optimization"]
    },
    {
      icon: Database,
      title: "Data Management System",
      description: "Centralized data management platform for agricultural records and compliance",
      benefits: ["Secure data storage", "Compliance tracking", "Historical analysis", "Data backup"],
      category: "Management",
      accuracy: "100%",
      newFeatures: ["AI data validation", "Smart contracts", "Carbon credit tracking"]
    }
  ]

  const advancedFeatures = [
    {
      icon: Bell,
      title: "Smart Alerts & Notifications",
      description: "Automated alert system for critical farming events and opportunities",
      features: ["Weather warnings", "Market price alerts", "Irrigation reminders", "Harvest timing"]
    },
    {
      icon: Eye,
      title: "Remote Field Monitoring",
      description: "Monitor multiple fields remotely with IoT sensors and satellite data",
      features: ["Soil moisture tracking", "Temperature monitoring", "Humidity sensors", "Growth stage tracking"]
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Deep insights into farm performance and productivity metrics",
      features: ["Yield analysis", "Cost optimization", "Efficiency metrics", "Benchmark comparisons"]
    },
    {
      icon: PieChart,
      title: "Market Intelligence",
      description: "Real-time market data and price analysis for better selling decisions",
      features: ["Price trends", "Market demand", "Export opportunities", "Supply chain insights"]
    },
    {
      icon: LineChart,
      title: "Predictive Modeling",
      description: "AI-powered predictions for yield, weather, and market conditions",
      features: ["Yield forecasting", "Weather modeling", "Risk prediction", "Scenario planning"]
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Configurable workflows tailored to specific farming practices and crops",
      features: ["Custom alerts", "Automated reports", "Scheduled tasks", "Integration options"]
    }
  ]

  const nabardFeatures = [
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated tracking and reporting",
      details: "Built-in compliance frameworks for agricultural regulations and NABARD requirements"
    },
    {
      icon: Lock,
      title: "Secure Data Handling",
      description: "Bank-grade security for sensitive agricultural and financial data",
      details: "End-to-end encryption, role-based access, and audit trails"
    },
    {
      icon: Wifi,
      title: "Offline Capability",
      description: "Continue operations even in areas with limited internet connectivity",
      details: "Offline data collection with automatic sync when connected"
    },
    {
      icon: Users,
      title: "Multi-stakeholder Platform",
      description: "Connect farmers, banks, government agencies, and agricultural experts",
      details: "Collaborative tools and communication channels for all stakeholders"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Comprehensive Features
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent">
            Powerful Features for
            <br />
            Smart Agriculture
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered features designed to revolutionize 
            agriculture through technology, data, and intelligent insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
              <Link href="/demo">
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential tools and capabilities that form the foundation of our agricultural intelligence platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/30 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs">
                    {feature.accuracy} Accurate
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <Badge variant="outline">{feature.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <div key={benefit} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-3">
                      <h4 className="text-sm font-semibold text-emerald-600 mb-2">🆕 Latest Features:</h4>
                      <div className="space-y-1">
                        {feature.newFeatures.map((newFeature, i) => (
                          <div key={newFeature} className="flex items-center space-x-2">
                            <Sparkles className="h-3 w-3 text-amber-500" />
                            <span className="text-xs text-muted-foreground font-medium">{newFeature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary AI Features */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              🚀 Revolutionary AI Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Next-Generation Agriculture Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the future of farming with our cutting-edge AI technologies that are transforming agriculture worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50 border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-900">GPT-4 Agricultural Assistant</h3>
                    <p className="text-purple-700 mb-4">
                      ChatGPT-powered farming advisor that understands local conditions, crop varieties, and provides 
                      personalized recommendations in multiple Indian languages.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800">Natural Language</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Multi-lingual</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Context-Aware</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-900">Computer Vision Analytics</h3>
                    <p className="text-blue-700 mb-4">
                      Advanced image recognition that can identify 500+ diseases, 200+ pests, and assess crop maturity 
                      with 96% accuracy using just smartphone photos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Real-time Detection</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Mobile-first</Badge>
                      <Badge className="bg-blue-100 text-blue-800">Offline Capable</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-white to-green-50 border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                    <Zap className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-green-900">Predictive Farming Engine</h3>
                    <p className="text-green-700 mb-4">
                      AI that predicts optimal planting times, harvest dates, market prices, and weather patterns 
                      up to 6 months in advance with machine learning models.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">6-month Forecasts</Badge>
                      <Badge className="bg-green-100 text-green-800">Price Prediction</Badge>
                      <Badge className="bg-green-100 text-green-800">Risk Analysis</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-3xl transform rotate-6 scale-105 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 rounded-3xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">🤖 AI Performance Metrics</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-300 mb-2">96%</div>
                    <div className="text-sm text-gray-300">Disease Detection Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">94%</div>
                    <div className="text-sm text-gray-300">Weather Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-300 mb-2">89%</div>
                    <div className="text-sm text-gray-300">Yield Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-pink-300 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">AI Monitoring</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Latest AI Update</div>
                      <div className="text-sm text-gray-300">Enhanced multi-crop recognition and soil analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge features that provide deep insights and automation for modern agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NABARD Specific Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NABARD Integration Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized features designed specifically for NABARD's requirements and agricultural banking needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nabardFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                      {feature.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers and agricultural professionals who are already benefiting from our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/demo">
                Try Free Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
