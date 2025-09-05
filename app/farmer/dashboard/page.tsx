"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProtectedRoute from "@/components/protected-route"
import { removeUser } from "@/lib/auth"
import {
  Leaf,
  MapPin,
  TrendingUp,
  Droplets,
  Thermometer,
  Sun,
  CloudRain,
  BarChart3,
  Calendar,
  Bell,
  Settings,
  LogOut,
  User,
  Tractor,
  Wheat,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const RealInteractiveMap = dynamic(() => import("@/components/real-map-viewer"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">Loading map...</div>
})

export default function FarmerDashboard() {
  const [currentWeather] = useState({
    temperature: 28,
    humidity: 65,
    rainfall: 2.5,
    windSpeed: 12,
  })

  const [farmData] = useState({
    totalArea: 45,
    cropTypes: 3,
    soilHealth: 87,
    irrigationStatus: "Active",
    lastUpdated: new Date().toLocaleString()
  })

  const [alerts] = useState([
    {
      id: 1,
      type: "warning",
      message: "Low soil moisture detected in Field A",
      time: "2 hours ago",
      priority: "Medium"
    },
    {
      id: 2,
      type: "info",
      message: "Weather forecast: Rain expected in 3 days",
      time: "1 day ago",
      priority: "Low"
    }
  ])

  const handleLogout = () => {
    removeUser()
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login'
    }
  }

  return (
    <ProtectedRoute requiredRole="farmer">
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
              <p className="text-xs text-muted-foreground">Farmer Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="glass border-primary/30 text-primary">
              <Tractor className="mr-2 h-4 w-4" />
              Farmer Portal
            </Badge>
            <Button variant="outline" size="sm" className="glass bg-transparent">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="glass bg-transparent">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="glass bg-transparent hover:bg-red-500/10 hover:border-red-500/50"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Welcome back, <span className="text-primary">John Farmer</span> 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's an overview of your farm operations and latest updates
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Farm Area</CardTitle>
                <MapPin className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{farmData.totalArea} acres</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2 acres this year
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Crop Types</CardTitle>
                <Wheat className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{farmData.cropTypes} varieties</div>
              <div className="text-xs text-muted-foreground mt-1">
                Rice, Wheat, Cotton
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Soil Health</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{farmData.soilHealth}%</div>
              <Progress value={farmData.soilHealth} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Revenue (Month)</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₹2.4L</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18% vs last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Map and Weather */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Farm Map */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Farm Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time satellite view of your agricultural land
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 rounded-lg overflow-hidden">
                  <RealInteractiveMap 
                    selectedLayer="satellite"
                    farmMarkers={[
                      { id: 1, lat: 28.6139, lng: 77.2090, name: "Main Farm", crop: "Wheat", health: 85 }
                    ]}
                    liveData={{ 
                      carbonSequestration: 12.5,
                      soilHealth: 78,
                      temperature: currentWeather.temperature, 
                      humidity: currentWeather.humidity,
                      windSpeed: currentWeather.windSpeed,
                      rainfall: currentWeather.rainfall
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Weather Dashboard */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Sun className="mr-3 h-5 w-5 text-primary" />
                  Current Weather
                </CardTitle>
                <CardDescription>
                  Live weather conditions for your location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Thermometer className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{Math.round(currentWeather.temperature)}°C</div>
                    <div className="text-xs text-muted-foreground">Temperature</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{Math.round(currentWeather.humidity)}%</div>
                    <div className="text-xs text-muted-foreground">Humidity</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <CloudRain className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.rainfall}mm</div>
                    <div className="text-xs text-muted-foreground">Rainfall</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{currentWeather.windSpeed}</div>
                    <div className="text-xs text-muted-foreground">Wind km/h</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Alerts and Tools */}
          <div className="space-y-8">
            {/* Alerts */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Bell className="mr-3 h-5 w-5 text-primary" />
                  Farm Alerts
                </CardTitle>
                <CardDescription>
                  Important notifications for your attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div 
                      key={alert.id} 
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.type === 'warning' 
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' 
                          : 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            {alert.type === 'warning' ? (
                              <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                            ) : (
                              <Bell className="h-4 w-4 text-blue-500 mr-2" />
                            )}
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                alert.priority === 'Medium' 
                                  ? 'bg-orange-100 text-orange-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {alert.priority}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-foreground">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="mr-3 h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Common farming tools and actions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <BarChart3 className="mr-3 h-4 w-4" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <Calendar className="mr-3 h-4 w-4" />
                  Crop Calendar
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <Droplets className="mr-3 h-4 w-4" />
                  Irrigation Control
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <User className="mr-3 h-4 w-4" />
                  Profile Settings
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="glass border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contact our agricultural support team
                </p>
                <Button 
                  variant="outline" 
                  className="glass bg-transparent"
                  asChild
                >
                  <Link href="/contact">
                    Get Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            Last updated: {farmData.lastUpdated} | 
            <Link href="/privacy" className="text-primary hover:text-primary/80 ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  )
}
