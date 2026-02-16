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
  DollarSign,
  Thermometer,
  Droplets,
  Sun,
  CloudRain,
  Sprout,
  CreditCard,
  Bell,
  Settings,
  User,
  MapPin,
  Calendar,
  Target,
  Award,
  Smartphone
} from "lucide-react"
import { ClientOnly } from "@/components/client-only"
import { InteractiveMap } from "@/components/enhanced-interactive-map"
import Link from "next/link"

export default function FarmerPortal() {
  const [farmerData] = useState({
    name: "Rajesh Kumar Sharma",
    farmName: "Green Valley Farm",
    location: "Pune, Maharashtra",
    farmSize: "25 acres",
    primaryCrop: "Sugarcane",
    secondaryCrops: "Wheat, Cotton",
    carbonCreditsEarned: 145,
    totalEarnings: 85000,
    sustainabilityScore: 87
  })

  const weatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 45,
    windSpeed: 12,
    forecast: "Partly Cloudy"
  }

  const cropHealth = {
    overall: 92,
    ndvi: 0.78,
    soilMoisture: 65,
    pestRisk: "Low",
    diseaseRisk: "Medium",
    recommendedActions: [
      "Apply nitrogen fertilizer in north field",
      "Monitor for leaf spot disease",
      "Irrigation recommended in 2 days"
    ]
  }

  const financialData = {
    availableCredit: 250000,
    usedCredit: 150000,
    nextPayment: "15 Oct 2025",
    interestRate: 4.5,
    creditScore: 750
  }

  const activities = [
    { date: "2025-09-04", action: "Fertilizer application", crop: "Sugarcane", status: "completed" },
    { date: "2025-09-03", action: "Pest monitoring", crop: "All crops", status: "completed" },
    { date: "2025-09-02", action: "Irrigation", crop: "Cotton", status: "completed" },
    { date: "2025-09-01", action: "Soil testing", crop: "Wheat field", status: "pending" }
  ]

  const notifications = [
    { id: 1, type: "weather", message: "Rain expected in 3 days - prepare for irrigation pause", priority: "medium" },
    { id: 2, type: "pest", message: "Bollworm activity detected in nearby farms", priority: "high" },
    { id: 3, type: "market", message: "Sugarcane prices increased by 8% this week", priority: "low" },
    { id: 4, type: "credit", message: "Pre-approved for ₹1,00,000 additional credit", priority: "medium" }
  ]

  const recommendations = [
    {
      title: "Optimize Water Usage",
      description: "Based on soil moisture data, reduce irrigation by 15% in the east field",
      impact: "Save ₹5,000/month",
      effort: "Low"
    },
    {
      title: "Nitrogen Application",
      description: "Apply 50kg/acre nitrogen fertilizer in north sugarcane field",
      impact: "Increase yield by 12%",
      effort: "Medium"
    },
    {
      title: "Pest Prevention",
      description: "Install pheromone traps in cotton field to prevent bollworm infestation",
      impact: "Prevent 20% crop loss",
      effort: "Low"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
              <div className="text-sm text-muted-foreground">Farmer Portal</div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              <Badge variant="destructive" className="ml-1 text-xs px-1">3</Badge>
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {farmerData.name}!</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {farmerData.farmName} • {farmerData.location} • {farmerData.farmSize}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">₹{farmerData.totalEarnings.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Carbon Credits Earned</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Crop Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{cropHealth.overall}%</div>
                <Progress value={cropHealth.overall} className="mt-2 h-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sustainability Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{farmerData.sustainabilityScore}%</div>
                <div className="text-xs text-green-600">+5% this month</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{farmerData.carbonCreditsEarned}</div>
                <div className="text-xs text-muted-foreground">tCO2 this year</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Available Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">₹{(financialData.availableCredit - financialData.usedCredit).toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">of ₹{financialData.availableCredit.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="crops">Crop Monitoring</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Weather Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5" />
                    Weather Today
                  </CardTitle>
                  <CardDescription>{weatherData.forecast}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">{weatherData.temperature}°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{weatherData.humidity}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{weatherData.rainfall}mm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Wind: {weatherData.windSpeed} km/h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {notifications.slice(0, 3).map((notification) => (
                    <div key={notification.id} className="flex items-start gap-3 p-2 border rounded-lg">
                      <Badge 
                        variant={notification.priority === "high" ? "destructive" : notification.priority === "medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {notification.priority}
                      </Badge>
                      <p className="text-sm flex-1">{notification.message}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    View All Notifications
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {activities.slice(0, 4).map((activity, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-muted-foreground">{activity.crop}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-muted-foreground">{activity.date}</div>
                        <Badge variant={activity.status === "completed" ? "default" : "secondary"} className="text-xs">
                          {activity.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>Personalized suggestions to optimize your farm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-3">
                      <div>
                        <h4 className="font-medium">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-green-600">{rec.impact}</span>
                        <Badge variant="outline">{rec.effort}</Badge>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Apply Recommendation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crop Monitoring Tab */}
          <TabsContent value="crops" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Crop Health Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="h-5 w-5" />
                    Crop Health Overview
                  </CardTitle>
                  <CardDescription>Current status of your crops</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Overall Health</Label>
                      <div className="text-2xl font-bold text-green-600">{cropHealth.overall}%</div>
                      <Progress value={cropHealth.overall} className="mt-1" />
                    </div>
                    <div>
                      <Label>NDVI Index</Label>
                      <div className="text-2xl font-bold">{cropHealth.ndvi}</div>
                      <div className="text-xs text-muted-foreground">Excellent vegetation</div>
                    </div>
                    <div>
                      <Label>Soil Moisture</Label>
                      <div className="text-2xl font-bold text-blue-600">{cropHealth.soilMoisture}%</div>
                      <Progress value={cropHealth.soilMoisture} className="mt-1" />
                    </div>
                    <div>
                      <Label>Risk Assessment</Label>
                      <div className="space-y-1">
                        <Badge variant="secondary">Pest: {cropHealth.pestRisk}</Badge>
                        <Badge variant="destructive">Disease: {cropHealth.diseaseRisk}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label>Recommended Actions</Label>
                    <ul className="mt-2 space-y-1">
                      {cropHealth.recommendedActions.map((action, index) => (
                        <li key={index} className="text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Field Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Field Monitoring Map</CardTitle>
                  <CardDescription>Real-time satellite view of your farm</CardDescription>
                </CardHeader>
                <CardContent>
                  <ClientOnly fallback={<div className="h-64 bg-muted/20 rounded-lg animate-pulse flex items-center justify-center text-muted-foreground">Loading Map...</div>}>
                    <div className="h-64">
                      <InteractiveMap />
                    </div>
                  </ClientOnly>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Finance Tab */}
          <TabsContent value="finance" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Credit Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Credit Overview
                  </CardTitle>
                  <CardDescription>Your agricultural credit status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span>Credit Utilization</span>
                      <span>{((financialData.usedCredit / financialData.availableCredit) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(financialData.usedCredit / financialData.availableCredit) * 100} />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>Used: ₹{financialData.usedCredit.toLocaleString()}</span>
                      <span>Available: ₹{financialData.availableCredit.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Next Payment</Label>
                      <div className="font-medium">{financialData.nextPayment}</div>
                    </div>
                    <div>
                      <Label>Interest Rate</Label>
                      <div className="font-medium">{financialData.interestRate}% p.a.</div>
                    </div>
                    <div>
                      <Label>Credit Score</Label>
                      <div className="font-medium text-green-600">{financialData.creditScore}</div>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <Badge variant="default">Good Standing</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Carbon Credits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Carbon Credits
                  </CardTitle>
                  <CardDescription>Your environmental impact earnings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{farmerData.carbonCreditsEarned}</div>
                    <div className="text-muted-foreground">tCO2 credits earned</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-medium">₹{farmerData.totalEarnings.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total Earnings</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium">₹585</div>
                      <div className="text-sm text-muted-foreground">Per tCO2</div>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Sell Credits
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Market Prices
                </CardTitle>
                <CardDescription>Current commodity prices in your region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Sugarcane</span>
                      <Badge variant="default">+8%</Badge>
                    </div>
                    <div className="text-2xl font-bold">₹3,200</div>
                    <div className="text-sm text-muted-foreground">per quintal</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Wheat</span>
                      <Badge variant="secondary">-2%</Badge>
                    </div>
                    <div className="text-2xl font-bold">₹2,150</div>
                    <div className="text-sm text-muted-foreground">per quintal</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Cotton</span>
                      <Badge variant="default">+5%</Badge>
                    </div>
                    <div className="text-2xl font-bold">₹6,800</div>
                    <div className="text-sm text-muted-foreground">per quintal</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sustainability Tab */}
          <TabsContent value="sustainability" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Sustainability Metrics
                </CardTitle>
                <CardDescription>Your environmental impact and sustainable practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Sustainability Score</Label>
                      <div className="text-3xl font-bold text-green-600">{farmerData.sustainabilityScore}%</div>
                      <Progress value={farmerData.sustainabilityScore} className="mt-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Water Conservation</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Soil Health</span>
                        <span className="text-sm font-medium">89%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Organic Practices</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Biodiversity</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Carbon Impact</Label>
                      <div className="text-2xl font-bold text-green-600">-{farmerData.carbonCreditsEarned} tCO2</div>
                      <div className="text-sm text-muted-foreground">Carbon removed this year</div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="default" className="mr-2">Organic Certified</Badge>
                      <Badge variant="secondary" className="mr-2">Water Efficient</Badge>
                      <Badge variant="default" className="mr-2">Carbon Negative</Badge>
                      <Badge variant="secondary">Biodiversity Friendly</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Mobile App Promotion */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Get the Mobile App
            </CardTitle>
            <CardDescription>Access your farm data anytime, anywhere</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Download the TerraPulse AI mobile app for real-time notifications, 
                  quick field updates, and offline access to your farm data.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">
                    Download for Android
                  </Button>
                  <Button size="sm" variant="outline">
                    Download for iOS
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium text-muted-foreground mb-1">{children}</div>
}
