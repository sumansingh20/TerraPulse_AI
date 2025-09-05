"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Satellite,
  MapPin,
  Calendar,
  Download,
  Filter,
  Eye,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Building2,
  Handshake,
  Target,
  Globe
} from "lucide-react"
import { ClientOnly } from "@/components/client-only"
import { InteractiveMap } from "@/components/enhanced-interactive-map"
import { useAdvancedThemeSafe } from "@/components/advanced-theme-provider"
import Link from "next/link"

export default function NABARDDashboard() {
  const { theme } = useAdvancedThemeSafe()
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly")

  // Sample NABARD-specific data
  const nabardMetrics = {
    totalLoans: 875000000000, // ₹8.75 lakh crore (FY 2023-24)
    activeFarmers: 73500000, // 7.35 crore KCC holders
    creditUtilization: 89.2, // Credit deployment efficiency
    ruralInfrastructure: 35621000000, // ₹35,621 crore RIDF disbursed
    sustainablePracticesAdopted: 94.7, // Climate resilient agriculture adoption
    loanRecoveryRate: 96.3 // Recovery performance
  }

  const regionalData = [
    {
      id: "uttar-pradesh",
      name: "Uttar Pradesh",
      farmers: 14200000, // 1.42 crore farmers
      loansDisbursed: 125000000000, // ₹1.25 lakh crore
      recoveryRate: 94.2,
      carbonCredits: 1250000,
      status: "excellent"
    },
    {
      id: "maharashtra",
      name: "Maharashtra", 
      farmers: 11800000, // 1.18 crore farmers
      loansDisbursed: 98000000000, // ₹98,000 crore
      recoveryRate: 96.1,
      carbonCredits: 1100000,
      status: "excellent"
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      farmers: 9500000, // 95 lakh farmers
      loansDisbursed: 76000000000, // ₹76,000 crore
      recoveryRate: 93.8,
      carbonCredits: 890000,
      status: "good"
    },
    {
      id: "madhya-pradesh",
      name: "Madhya Pradesh",
      farmers: 8200000, // 82 lakh farmers
      loansDisbursed: 64000000000, // ₹64,000 crore
      recoveryRate: 95.4,
      carbonCredits: 780000,
      status: "excellent"
    },
    {
      id: "west-bengal",
      name: "West Bengal",
      farmers: 7800000, // 78 lakh farmers
      loansDisbursed: 58000000000, // ₹58,000 crore
      recoveryRate: 91.3,
      carbonCredits: 380000,
      status: "monitoring"
    },
    {
      id: "uttar_pradesh",
      name: "Uttar Pradesh",
      farmers: 42000,
      loansDisbursed: 3100000000,
      recoveryRate: 93.2,
      carbonCredits: 590000,
      status: "good"
    }
  ]

  const impactPrograms = [
    {
      id: 1,
      name: "Sustainable Agriculture Initiative",
      participants: 45000,
      budget: 850000000,
      completion: 78,
      co2Reduction: 125000,
      status: "active"
    },
    {
      id: 2,
      name: "Digital Farming Support Program",
      participants: 32000,
      budget: 620000000,
      completion: 65,
      co2Reduction: 89000,
      status: "active"
    },
    {
      id: 3,
      name: "Carbon Credit Generation Scheme",
      participants: 28000,
      budget: 480000000,
      completion: 82,
      co2Reduction: 156000,
      status: "active"
    },
    {
      id: 4,
      name: "Water Conservation Project",
      participants: 38000,
      budget: 720000000,
      completion: 71,
      co2Reduction: 98000,
      status: "active"
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <span className="text-2xl font-bold gradient-text">NABARD</span>
              <div className="text-sm text-muted-foreground">Agricultural Credit Dashboard</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Link href="/">
              <Button variant="ghost">Back to Platform</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">NABARD Agricultural Credit Dashboard</h1>
              <p className="text-muted-foreground">Real-time monitoring of agricultural credit and sustainability initiatives</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              Last Updated: {new Date().toLocaleDateString()}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Credit Disbursed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{formatCurrency(nabardMetrics.totalLoans)}</div>
                <div className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5% from last quarter
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Farmers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{formatNumber(nabardMetrics.activeFarmers)}</div>
                <div className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8.3% growth
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Credit Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{nabardMetrics.creditUtilization}%</div>
                <Progress value={nabardMetrics.creditUtilization} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Rural Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹{formatNumber(nabardMetrics.ruralInfrastructure / 10000000)} crore</div>
                <div className="text-xs text-muted-foreground">RIDF disbursed (FY 2023-24)</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sustainable Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{nabardMetrics.sustainablePracticesAdopted}%</div>
                <Progress value={nabardMetrics.sustainablePracticesAdopted} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Recovery Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{nabardMetrics.loanRecoveryRate}%</div>
                <div className="text-xs text-green-600">Above target (90%)</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Regional Overview</TabsTrigger>
            <TabsTrigger value="programs">Impact Programs</TabsTrigger>
            <TabsTrigger value="monitoring">Live Monitoring</TabsTrigger>
            <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
          </TabsList>

          {/* Regional Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Regional Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Regional Performance
                  </CardTitle>
                  <CardDescription>Credit disbursement and recovery metrics by state</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionalData.map((region) => (
                      <div key={region.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{region.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatNumber(region.farmers)} farmers • {formatCurrency(region.loansDisbursed)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{region.recoveryRate}%</div>
                          <Badge 
                            variant={region.status === "excellent" ? "default" : region.status === "good" ? "secondary" : "destructive"}
                            className="text-xs"
                          >
                            {region.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Carbon Credit Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    Carbon Credit Generation
                  </CardTitle>
                  <CardDescription>Environmental impact by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionalData.map((region) => (
                      <div key={region.id} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{region.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-green-600">{formatNumber(region.carbonCredits)} tCO2</div>
                          <Progress 
                            value={(region.carbonCredits / 680000) * 100} 
                            className="w-20 h-2" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Impact Programs Tab */}
          <TabsContent value="programs" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {impactPrograms.map((program) => (
                <Card key={program.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{program.name}</CardTitle>
                      <Badge variant={program.status === "active" ? "default" : "secondary"}>
                        {program.status}
                      </Badge>
                    </div>
                    <CardDescription>
                      {formatNumber(program.participants)} participants • Budget: {formatCurrency(program.budget)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Completion Progress</span>
                        <span>{program.completion}%</span>
                      </div>
                      <Progress value={program.completion} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">CO₂ Reduction</span>
                      <span className="text-sm font-medium text-green-600">
                        {formatNumber(program.co2Reduction)} tCO2
                      </span>
                    </div>
                    <Button className="w-full" variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Monitoring Tab */}
          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5" />
                  Live Agricultural Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time satellite monitoring of NABARD-supported agricultural regions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ClientOnly fallback={<div className="h-96 bg-muted/20 rounded-lg animate-pulse flex items-center justify-center text-muted-foreground">Loading Live Monitoring...</div>}>
                  <InteractiveMap />
                </ClientOnly>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports & Analytics Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Credit Analysis Report
                  </CardTitle>
                  <CardDescription>Comprehensive credit disbursement and utilization analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    Sustainability Impact Report
                  </CardTitle>
                  <CardDescription>Environmental benefits and carbon credit generation metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Performance Dashboard
                  </CardTitle>
                  <CardDescription>Key performance indicators and trend analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Dashboard
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Farmer Engagement Report
                  </CardTitle>
                  <CardDescription>Farmer participation and adoption metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Regional Comparison
                  </CardTitle>
                  <CardDescription>State-wise performance comparison and benchmarking</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Goal Achievement Report
                  </CardTitle>
                  <CardDescription>Progress against annual targets and objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and shortcuts for NABARD officials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="flex items-center gap-2 h-12" variant="outline">
                <Users className="h-4 w-4" />
                Farmer Onboarding
              </Button>
              <Button className="flex items-center gap-2 h-12" variant="outline">
                <DollarSign className="h-4 w-4" />
                Credit Assessment
              </Button>
              <Button className="flex items-center gap-2 h-12" variant="outline">
                <BarChart3 className="h-4 w-4" />
                Generate Report
              </Button>
              <Button className="flex items-center gap-2 h-12" variant="outline">
                <Satellite className="h-4 w-4" />
                Monitor Farms
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
