import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Activity,
  CheckCircle,
  Zap,
  Camera,
  Brain,
  Target,
  AlertTriangle,
  TrendingUp,
  Settings,
  Download,
  Search,
  FileText,
} from "lucide-react"

export default function HealthScannerPage() {
  const features = [
    {
      icon: Search,
      title: "Disease Identification",
      description: "AI-powered disease detection using advanced computer vision and machine learning algorithms"
    },
    {
      icon: Target,
      title: "Pest Recognition",
      description: "Comprehensive pest identification with detailed information about treatment and prevention"
    },
    {
      icon: FileText,
      title: "Treatment Plans",
      description: "Customized treatment recommendations based on crop type, severity, and local conditions"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor treatment effectiveness and crop recovery with detailed progress analytics"
    },
    {
      icon: Brain,
      title: "Plant Stress Analysis",
      description: "Advanced stress detection including water stress, nutrient deficiency, and environmental factors"
    },
    {
      icon: AlertTriangle,
      title: "Recovery Monitoring",
      description: "Track plant recovery and health improvement with continuous monitoring capabilities"
    }
  ]

  const scanningCapabilities = [
    {
      category: "Diseases",
      count: "500+",
      examples: ["Leaf blight", "Powdery mildew", "Rust", "Bacterial wilt", "Viral infections"],
      accuracy: "96%"
    },
    {
      category: "Pests",
      count: "300+",
      examples: ["Aphids", "Thrips", "Caterpillars", "Beetles", "Mites"],
      accuracy: "94%"
    },
    {
      category: "Deficiencies",
      count: "50+",
      examples: ["Nitrogen", "Phosphorus", "Potassium", "Iron", "Magnesium"],
      accuracy: "92%"
    },
    {
      category: "Stress Factors",
      count: "25+",
      examples: ["Water stress", "Heat stress", "Cold damage", "Chemical burn", "Physical damage"],
      accuracy: "89%"
    }
  ]

  const specifications = [
    { label: "Detection Accuracy", value: "96% for common diseases" },
    { label: "Processing Time", value: "< 3 seconds per image" },
    { label: "Image Resolution", value: "Min 5MP, optimal 12MP+" },
    { label: "Offline Capability", value: "Basic scanning without internet" },
    { label: "Database Updates", value: "Monthly with new diseases/pests" },
    { label: "Supported Crops", value: "100+ crop varieties" },
    { label: "Languages", value: "12 local Indian languages" },
    { label: "Export Options", value: "PDF reports, CSV data" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              v4.1 • AI-Powered Crop Analysis
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mr-4">
                <Activity className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Health Scanner
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced crop disease and pest detection using AI-powered computer vision. Instantly identify problems and get treatment recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Camera className="mr-2 h-4 w-4" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  Try Demo
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
            <h2 className="text-3xl font-bold mb-4">Advanced Scanning Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health analysis with AI-powered detection and treatment recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
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

      {/* Scanning Capabilities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Can Detect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive database covering major diseases, pests, and plant health issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scanningCapabilities.map((capability) => (
              <Card key={capability.category} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-green-600 mb-2">{capability.count}</div>
                <h3 className="text-lg font-semibold mb-3">{capability.category}</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-4">{capability.accuracy}</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
                <div className="mt-4 space-y-1">
                  {capability.examples.slice(0, 3).map((example) => (
                    <div key={example} className="text-xs text-muted-foreground">{example}</div>
                  ))}
                  <div className="text-xs text-muted-foreground font-semibold">+ many more</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Health Scanner Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 w-fit mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Capture Image</h3>
              <p className="text-sm text-muted-foreground">Take a clear photo of the affected plant part using your smartphone</p>
            </Card>

            <Card className="text-center p-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Advanced AI algorithms analyze the image for diseases, pests, and deficiencies</p>
            </Card>

            <Card className="text-center p-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Get Results</h3>
              <p className="text-sm text-muted-foreground">Receive instant identification with confidence scores and detailed information</p>
            </Card>

            <Card className="text-center p-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-orange-100 to-red-100 w-fit mx-auto mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Treatment Plan</h3>
              <p className="text-sm text-muted-foreground">Get customized treatment recommendations and prevention strategies</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center">
                  <Settings className="mr-3 h-6 w-6 text-green-600" />
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
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-green-800">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">96%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">&lt;3s</div>
                      <div className="text-sm text-muted-foreground">Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-muted-foreground">Diseases</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">100+</div>
                      <div className="text-sm text-muted-foreground">Crops</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                    Latest Updates v4.1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Plant stress analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nutrient deficiency alerts</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Recovery monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Improved offline mode</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Protecting Your Crops Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers using AI-powered health scanning for early disease detection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Camera className="mr-2 h-4 w-4" />
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Download className="mr-2 h-4 w-4" />
              Get User Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
