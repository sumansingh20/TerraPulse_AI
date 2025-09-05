import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
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
  Target,
  Calculator,
  Database,
  Bell,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Wrench,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  Phone,
  Camera,
} from "lucide-react"

export default function ToolsPage() {
  const monitoringTools = [
    {
      icon: Satellite,
      name: "Satellite Monitor Pro",
      description: "Advanced satellite imagery analysis for crop health monitoring",
      features: ["Real-time satellite data", "Multi-spectral analysis", "Historical comparisons", "Automated alerts"],
      status: "Active",
      usage: "24/7",
      version: "v3.2",
      newFeatures: ["Hyperspectral imaging", "3D terrain mapping", "Carbon footprint tracking"]
    },
    {
      icon: Eye,
      name: "Field Vision System",
      description: "AI-powered field monitoring with drone and ground sensor integration",
      features: ["Drone mapping", "Soil sensors", "Weather stations", "Growth tracking"],
      status: "Active",
      usage: "Continuous",
      version: "v2.8",
      newFeatures: ["AI crop counting", "Pest heat mapping", "Irrigation zone optimization"]
    },
    {
      icon: Activity,
      name: "Health Scanner",
      description: "Crop disease and pest detection using computer vision",
      features: ["Disease identification", "Pest recognition", "Treatment plans", "Progress tracking"],
      status: "Active",
      usage: "On-demand",
      version: "v4.1",
      newFeatures: ["Plant stress analysis", "Nutrient deficiency alerts", "Recovery monitoring"]
    }
  ]

  const analyticsTools = [
    {
      icon: BarChart3,
      name: "Analytics Dashboard",
      description: "Comprehensive data visualization and reporting platform",
      features: ["Custom dashboards", "Interactive charts", "Export reports", "Real-time data"],
      status: "Active",
      usage: "Daily"
    },
    {
      icon: PieChart,
      name: "Yield Predictor",
      description: "AI-powered yield prediction and optimization tool",
      features: ["Yield forecasting", "Risk analysis", "Optimization tips", "Historical trends"],
      status: "Active",
      usage: "Seasonal"
    },
    {
      icon: LineChart,
      name: "Market Analyzer",
      description: "Real-time market data analysis and price forecasting",
      features: ["Price trends", "Market insights", "Demand forecasting", "Export opportunities"],
      status: "Active",
      usage: "Real-time"
    }
  ]

  const managementTools = [
    {
      icon: Calculator,
      name: "Financial Calculator",
      description: "Comprehensive financial planning and loan calculation tool",
      features: ["Loan calculators", "Subsidy tracker", "ROI analysis", "Budget planning"],
      status: "Active",
      usage: "As needed"
    },
    {
      icon: Calendar,
      name: "Farm Scheduler",
      description: "Intelligent farming activity scheduling and reminder system",
      features: ["Activity planning", "Weather-based scheduling", "Automated reminders", "Team coordination"],
      status: "Active",
      usage: "Daily"
    },
    {
      icon: Database,
      name: "Records Manager",
      description: "Centralized farm data and compliance record management",
      features: ["Data storage", "Compliance tracking", "Document management", "Backup & sync"],
      status: "Active",
      usage: "Continuous"
    }
  ]

  const nabardTools = [
    {
      icon: CreditCard,
      name: "Loan Processing Hub",
      description: "Streamlined loan application and processing system for NABARD",
      features: ["Digital applications", "Document verification", "Credit scoring", "Approval workflows"],
      capabilities: ["Automated eligibility check", "Risk assessment", "Compliance validation", "Instant approvals"]
    },
    {
      icon: FileText,
      name: "Compliance Tracker",
      description: "Comprehensive regulatory compliance monitoring and reporting",
      features: ["Regulatory updates", "Compliance checklists", "Audit trails", "Automated reporting"],
      capabilities: ["Real-time compliance status", "Risk alerts", "Documentation management", "Regulatory calendar"]
    },
    {
      icon: Shield,
      name: "Risk Assessment Engine",
      description: "Advanced risk evaluation and mitigation planning tool",
      features: ["Risk modeling", "Scenario analysis", "Mitigation strategies", "Portfolio analysis"],
      capabilities: ["Weather risk assessment", "Market volatility analysis", "Credit risk evaluation", "Insurance recommendations"]
    },
    {
      icon: Users,
      name: "Stakeholder Portal",
      description: "Multi-stakeholder communication and collaboration platform",
      features: ["Role-based access", "Communication tools", "Document sharing", "Progress tracking"],
      capabilities: ["Farmer onboarding", "Bank integration", "Government coordination", "Expert consultations"]
    }
  ]

  const mobileTools = [
    {
      icon: Smartphone,
      name: "TerraPulse Mobile",
      description: "Complete mobile app for farmers and field agents",
      features: ["Offline capability", "GPS tracking", "Photo capture", "Voice notes"],
      platforms: ["iOS", "Android", "Progressive Web App"]
    },
    {
      icon: MessageSquare,
      name: "AgriChat Assistant",
      description: "AI-powered chatbot for instant agricultural support",
      features: ["24/7 support", "Multi-language", "Expert advice", "Voice interaction"],
      platforms: ["Mobile App", "Web Portal", "WhatsApp", "SMS"]
    },
    {
      icon: Phone,
      name: "Emergency Connect",
      description: "Emergency response and expert consultation system",
      features: ["Emergency alerts", "Expert hotline", "Video consultations", "Priority support"],
      platforms: ["Mobile App", "Web Portal", "Phone System"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Professional Tools Suite
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Tools for
            <br />
            Agricultural Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our complete suite of professional-grade tools designed to empower farmers, 
            agricultural professionals, and NABARD with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link href="/demo">
                Try Tools Now <Wrench className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="monitoring" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="monitoring" className="text-sm">Monitoring</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              <TabsTrigger value="management" className="text-sm">Management</TabsTrigger>
              <TabsTrigger value="nabard" className="text-sm">NABARD</TabsTrigger>
            </TabsList>

            {/* Monitoring Tools */}
            <TabsContent value="monitoring" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Monitoring & Surveillance Tools</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Advanced monitoring solutions for real-time crop health and field condition tracking
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monitoringTools.map((tool, index) => (
                  <Card key={tool.name} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-green-100 text-green-800">{tool.status}</Badge>
                      <Badge variant="outline" className="text-xs">{tool.version}</Badge>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                          <tool.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2 mb-4">
                        {tool.features.map((feature, i) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-3">
                        <h4 className="text-sm font-semibold text-amber-600 mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1" />
                          Latest Updates:
                        </h4>
                        <div className="space-y-1">
                          {tool.newFeatures.map((newFeature, i) => (
                            <div key={newFeature} className="flex items-center space-x-2">
                              <Zap className="h-3 w-3 text-blue-500" />
                              <span className="text-xs text-muted-foreground font-medium">{newFeature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm pt-2 border-t">
                        <span className="text-muted-foreground">Usage:</span>
                        <span className="font-medium text-emerald-600">{tool.usage}</span>
                      </div>
                      
                      <Button asChild className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                        <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tools */}
            <TabsContent value="analytics" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Analytics & Intelligence Tools</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Powerful analytics tools for data-driven agricultural decision making
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {analyticsTools.map((tool) => (
                  <Card key={tool.name} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                          <tool.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">{tool.status}</Badge>
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {tool.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Usage:</span>
                        <span className="font-medium">{tool.usage}</span>
                      </div>
                      
                      <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                        <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Management Tools */}
            <TabsContent value="management" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Management & Operations Tools</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive tools for farm management, planning, and operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTools.map((tool) => (
                  <Card key={tool.name} className="group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                          <tool.icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">{tool.status}</Badge>
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {tool.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-purple-600" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Usage:</span>
                        <span className="font-medium">{tool.usage}</span>
                      </div>
                      
                      <Button asChild className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                        <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* NABARD Tools */}
            <TabsContent value="nabard" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">NABARD Specialized Tools</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specialized tools designed specifically for NABARD's agricultural banking and development needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {nabardTools.map((tool) => (
                  <Card key={tool.name} className="group hover:shadow-xl transition-all duration-300 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                        <tool.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                        <p className="text-muted-foreground mb-4">{tool.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2 text-sm">Core Features:</h4>
                            <div className="space-y-1">
                              {tool.features.map((feature) => (
                                <div key={feature} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2 text-sm">Capabilities:</h4>
                            <div className="space-y-1">
                              {tool.capabilities.map((capability) => (
                                <div key={capability} className="flex items-center space-x-2">
                                  <CheckCircle className="h-3 w-3 text-emerald-600" />
                                  <span className="text-sm text-muted-foreground">{capability}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Revolutionary AI Tools */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              🤖 AI-Powered Revolution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Next-Generation Agricultural AI Tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience breakthrough AI technologies that are revolutionizing agriculture across India and the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-indigo-50 to-purple-50 border-2 border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                    <Brain className="h-8 w-8 text-indigo-600" />
                  </div>
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">NEW</Badge>
                </div>
                <CardTitle className="text-2xl mb-3">AgriGPT Assistant</CardTitle>
                <CardDescription className="text-base">
                  ChatGPT-powered farming advisor with deep agricultural knowledge trained on Indian farming practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">12+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-xs text-muted-foreground">Available</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm">Voice & text conversation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm">Local crop expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm">Smart recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-green-50 to-emerald-50 border-2 border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">HOT</Badge>
                </div>
                <CardTitle className="text-2xl mb-3">Vision AI Scanner</CardTitle>
                <CardDescription className="text-base">
                  Advanced computer vision for instant disease detection and crop analysis using smartphone camera
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">96%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">500+</div>
                    <div className="text-xs text-muted-foreground">Diseases</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant photo analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Offline processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Treatment suggestions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50 to-cyan-50 border-2 border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">SMART</Badge>
                </div>
                <CardTitle className="text-2xl mb-3">Market Predictor AI</CardTitle>
                <CardDescription className="text-base">
                  AI-powered market analysis and price prediction for optimal selling decisions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-xs text-muted-foreground">Prediction</div>
                  </div>
                  <div className="p-3 bg-white/60 rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">15</div>
                    <div className="text-xs text-muted-foreground">Day Forecast</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Price trend analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Sell timing alerts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Export opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-medium">
              <Sparkles className="h-5 w-5 mr-2" />
              More AI tools coming soon!
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Tools Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile & Communication Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our complete toolkit from anywhere with our mobile and communication solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mobileTools.map((tool) => (
              <Card key={tool.name} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 group-hover:from-teal-200 group-hover:to-cyan-200 transition-all duration-300 w-fit mb-4">
                    <tool.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tool.platforms.map((platform) => (
                      <Badge key={platform} variant="outline" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Using These Powerful Tools Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your agricultural operations with our comprehensive suite of professional tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/get-started">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
