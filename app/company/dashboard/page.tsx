"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  Building,
  Users,
  TrendingUp,
  BarChart3,
  Globe,
  Calendar,
  Bell,
  Settings,
  LogOut,
  DollarSign,
  Target,
  Award,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function CompanyDashboard() {
  const [companyStats] = useState({
    totalFarmers: 2847,
    activeFarms: 1924,
    totalRevenue: "₹12.4L",
    carbonCredits: "156.2 tCO2e",
    growthRate: 23,
  })

  const [recentActivity] = useState([
    {
      id: 1,
      type: "farmer_signup",
      message: "New farmer registered from Punjab",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "carbon_credit",
      message: "Carbon credit verification completed for 15 farms",
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "system_update",
      message: "AI model accuracy improved to 94.2%",
      time: "1 day ago",
    }
  ])

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
              <p className="text-xs text-muted-foreground">Company Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="glass border-primary/30 text-primary">
              <Building className="mr-2 h-4 w-4" />
              Company Team
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
            Company Overview 🏢
          </h1>
          <p className="text-lg text-muted-foreground">
            Monitor platform performance, farmer engagement, and business metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Farmers</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{companyStats.totalFarmers.toLocaleString()}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +{companyStats.growthRate}% this month
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Farms</CardTitle>
                <Globe className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{companyStats.activeFarms.toLocaleString()}</div>
              <Progress value={(companyStats.activeFarms / companyStats.totalFarmers) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{companyStats.totalRevenue}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Monthly recurring revenue
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-primary/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Credits</CardTitle>
                <Award className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{companyStats.carbonCredits}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +45% verified credits
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Analytics and Performance */}
          <div className="lg:col-span-2 space-y-8">
            {/* Platform Analytics */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <BarChart3 className="mr-3 h-5 w-5 text-primary" />
                  Platform Analytics
                </CardTitle>
                <CardDescription>
                  Usage metrics and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">94.2%</div>
                    <div className="text-sm font-medium">AI Accuracy</div>
                    <div className="text-xs text-muted-foreground">Crop prediction model</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">87.3%</div>
                    <div className="text-sm font-medium">User Satisfaction</div>
                    <div className="text-xs text-muted-foreground">Based on surveys</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                    <div className="text-sm font-medium">Uptime</div>
                    <div className="text-xs text-muted-foreground">Last 30 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Performance */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Globe className="mr-3 h-5 w-5 text-primary" />
                  Regional Performance
                </CardTitle>
                <CardDescription>
                  Farmer adoption by region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { region: "Punjab", farmers: 847, percentage: 85 },
                    { region: "Haryana", farmers: 624, percentage: 72 },
                    { region: "Uttar Pradesh", farmers: 591, percentage: 68 },
                    { region: "Madhya Pradesh", farmers: 485, percentage: 58 },
                    { region: "Maharashtra", farmers: 300, percentage: 45 }
                  ].map((region) => (
                    <div key={region.region} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{region.region}</span>
                          <span className="text-sm text-muted-foreground">{region.farmers} farmers</span>
                        </div>
                        <Progress value={region.percentage} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recent Activity and Tools */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Bell className="mr-3 h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest platform updates and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Management Tools */}
            <Card className="glass border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="mr-3 h-5 w-5 text-primary" />
                  Management Tools
                </CardTitle>
                <CardDescription>
                  Company operations and administration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <Users className="mr-3 h-4 w-4" />
                  User Management
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <BarChart3 className="mr-3 h-4 w-4" />
                  Analytics Reports
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <MessageSquare className="mr-3 h-4 w-4" />
                  Support Tickets
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-primary/10">
                  <Target className="mr-3 h-4 w-4" />
                  Business Goals
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with team members and stakeholders
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full glass bg-transparent"
                    asChild
                  >
                    <Link href="/team">
                      View Team
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full glass bg-transparent"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            TerraPulse AI Company Dashboard | 
            <Link href="/privacy" className="text-primary hover:text-primary/80 ml-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
