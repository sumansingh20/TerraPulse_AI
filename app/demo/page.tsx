"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Leaf,
  Satellite,
  Smartphone,
  Shield,
  Cloud,
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  MapPin,
  TrendingUp,
  Activity,
  BarChart3,
  Droplets,
  Thermometer,
  Wind,
  Sun,
} from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedFarm, setSelectedFarm] = useState("farm-1")
  const [currentStep, setCurrentStep] = useState(0)
  const [carbonCredits, setCarbonCredits] = useState(245)
  const [soilHealth, setSoilHealth] = useState(78)
  const [biodiversityIndex, setBiodiversityIndex] = useState(82)

  // Simulate real-time data updates
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCarbonCredits((prev) => prev + Math.random() * 2 - 1)
        setSoilHealth((prev) => Math.max(0, Math.min(100, prev + Math.random() * 4 - 2)))
        setBiodiversityIndex((prev) => Math.max(0, Math.min(100, prev + Math.random() * 3 - 1.5)))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const farms = [
    { id: "farm-1", name: "Rajesh Kumar's Farm", location: "Punjab", area: "12.5 acres", crop: "Rice" },
    { id: "farm-2", name: "Priya Sharma's Farm", location: "Maharashtra", area: "8.2 acres", crop: "Cotton" },
    { id: "farm-3", name: "Amit Patel's Farm", location: "Gujarat", area: "15.7 acres", crop: "Wheat" },
  ]

  const demoSteps = [
    "Select a farm to monitor",
    "View real-time satellite data",
    "Analyze AI-powered insights",
    "Calculate carbon credits",
    "Verify on blockchain",
    "Generate farmer report",
  ]

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
            <Link
              href="/technology"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Technology
            </Link>
            <Link href="/demo" className="text-primary font-medium">
              Demo
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
      <section className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Badge className="mb-6 glass border-primary/30 text-primary px-6 py-2 text-base font-medium">
            <Play className="mr-2 h-5 w-5" />
            Interactive Platform Demo
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 leading-tight tracking-tight">
            Experience <span className="gradient-text">TerraPulse AI</span> Live
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore our AI-powered MRV platform with real farm data and interactive features
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300"
            >
              {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
              {isPlaying ? "Pause Demo" : "Start Demo"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setCurrentStep(0)
                setCarbonCredits(245)
                setSoilHealth(78)
                setBiodiversityIndex(82)
              }}
              className="glass"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>

          {/* Demo Progress */}
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Demo Progress</span>
              <span>
                {currentStep + 1} of {demoSteps.length}
              </span>
            </div>
            <Progress value={((currentStep + 1) / demoSteps.length) * 100} className="mb-4" />
            <p className="text-lg font-medium text-foreground">{demoSteps[currentStep]}</p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Interface */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="dashboard" className="text-lg py-3">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="satellite" className="text-lg py-3">
                Satellite View
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-lg py-3">
                Mobile App
              </TabsTrigger>
              <TabsTrigger value="blockchain" className="text-lg py-3">
                Blockchain
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-8">
              {/* Farm Selection */}
              <Card className="glass border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl flex items-center">
                      <MapPin className="mr-3 h-6 w-6 text-primary" />
                      Farm Selection
                    </CardTitle>
                    <Select value={selectedFarm} onValueChange={setSelectedFarm}>
                      <SelectTrigger className="w-64">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {farms.map((farm) => (
                          <SelectItem key={farm.id} value={farm.id}>
                            {farm.name} - {farm.location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  {farms
                    .filter((f) => f.id === selectedFarm)
                    .map((farm) => (
                      <div key={farm.id} className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Farmer</p>
                          <p className="font-semibold">{farm.name}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-semibold">{farm.location}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Area</p>
                          <p className="font-semibold">{farm.area}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Primary Crop</p>
                          <p className="font-semibold">{farm.crop}</p>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>

              {/* Real-time Metrics */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Leaf className="mr-2 h-5 w-5 text-green-500" />
                      Carbon Credits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-500 mb-2">{carbonCredits.toFixed(1)}</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                      <span className="text-green-500">+2.3% this month</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-blue-500" />
                      Soil Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-500 mb-2">{soilHealth.toFixed(0)}%</div>
                    <Progress value={soilHealth} className="mb-2" />
                    <div className="flex items-center text-sm">
                      <TrendingUp className="mr-1 h-4 w-4 text-blue-500" />
                      <span className="text-blue-500">Improving</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
                      Biodiversity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-500 mb-2">{biodiversityIndex.toFixed(0)}%</div>
                    <Progress value={biodiversityIndex} className="mb-2" />
                    <div className="flex items-center text-sm">
                      <TrendingUp className="mr-1 h-4 w-4 text-purple-500" />
                      <span className="text-purple-500">Excellent</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-orange-500" />
                      Yield Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-500 mb-2">4.2t/ha</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="mr-1 h-4 w-4 text-orange-500" />
                      <span className="text-orange-500">+15% vs last year</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Weather & Environmental Data */}
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Cloud className="mr-3 h-6 w-6 text-primary" />
                    Environmental Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <Thermometer className="h-8 w-8 text-red-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="text-2xl font-bold">28°C</p>
                    </div>
                    <div className="text-center">
                      <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="text-2xl font-bold">65%</p>
                    </div>
                    <div className="text-center">
                      <Wind className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Wind Speed</p>
                      <p className="text-2xl font-bold">12 km/h</p>
                    </div>
                    <div className="text-center">
                      <Sun className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">UV Index</p>
                      <p className="text-2xl font-bold">7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="satellite" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Satellite className="mr-3 h-6 w-6 text-primary" />
                    Satellite Imagery Analysis
                  </CardTitle>
                  <CardDescription>Real-time satellite data processing and AI-powered crop analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Current Satellite View</h4>
                      <div className="aspect-square bg-gradient-to-br from-green-100 to-green-300 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-4 bg-green-200 rounded opacity-60"></div>
                        <div className="absolute inset-8 bg-green-300 rounded opacity-80"></div>
                        <div className="relative z-10 text-center">
                          <Satellite className="h-12 w-12 text-green-700 mx-auto mb-2" />
                          <p className="text-green-800 font-semibold">Live Satellite Feed</p>
                          <p className="text-green-700 text-sm">Resolution: 10m</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">AI Analysis Results</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Crop Health Index</span>
                          <Badge className="bg-green-100 text-green-800">Excellent (92%)</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Growth Stage</span>
                          <Badge className="bg-blue-100 text-blue-800">Flowering</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Stress Detection</span>
                          <Badge className="bg-yellow-100 text-yellow-800">Mild Water Stress</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Pest Risk</span>
                          <Badge className="bg-green-100 text-green-800">Low</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Harvest Readiness</span>
                          <Badge className="bg-orange-100 text-orange-800">3-4 weeks</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Smartphone className="mr-3 h-6 w-6 text-primary" />
                    Mobile App Interface
                  </CardTitle>
                  <CardDescription>
                    Farmer-friendly mobile application with voice support and offline capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Mobile App Preview</h4>
                      <div className="mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 relative">
                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                          <div className="bg-primary text-white p-4 text-center">
                            <h5 className="font-bold">TerraPulse AI</h5>
                            <p className="text-sm opacity-90">राजेश कुमार का फार्म</p>
                          </div>
                          <div className="p-4 space-y-4">
                            <div className="bg-green-50 p-3 rounded-lg">
                              <p className="text-sm font-semibold text-green-800">आज का कार्य</p>
                              <p className="text-xs text-green-600">सिंचाई की जरूरत - खेत A</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm font-semibold text-blue-800">मौसम अपडेट</p>
                              <p className="text-xs text-blue-600">28°C, 65% नमी</p>
                            </div>
                            <div className="bg-orange-50 p-3 rounded-lg">
                              <p className="text-sm font-semibold text-orange-800">कार्बन क्रेडिट</p>
                              <p className="text-xs text-orange-600">245.1 टन CO₂</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold">Voice Input Support</p>
                            <p className="text-sm text-muted-foreground">
                              Farmers can input data using voice commands in 12 Indian languages
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold">Offline Functionality</p>
                            <p className="text-sm text-muted-foreground">
                              Works without internet connection, syncs when online
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold">Smart Notifications</p>
                            <p className="text-sm text-muted-foreground">
                              AI-powered alerts for irrigation, pest control, and harvesting
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div>
                            <p className="font-semibold">Credit Tracking</p>
                            <p className="text-sm text-muted-foreground">
                              Real-time carbon, soil, and biodiversity credit calculations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-8">
              <Card className="glass border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-primary" />
                    Blockchain Verification
                  </CardTitle>
                  <CardDescription>Immutable credit verification and transparent transaction recording</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-green-800">Carbon Credits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-green-600">245.1 tCO₂</p>
                          <p className="text-sm text-green-600">Verified on blockchain</p>
                          <Badge className="mt-2 bg-green-100 text-green-800">Confirmed</Badge>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-blue-800">Soil Health Credits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-blue-600">78 SHI</p>
                          <p className="text-sm text-blue-600">Soil Health Index</p>
                          <Badge className="mt-2 bg-blue-100 text-blue-800">Verified</Badge>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 bg-purple-50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-purple-800">Biodiversity Credits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-2xl font-bold text-purple-600">82 BDI</p>
                          <p className="text-sm text-purple-600">Biodiversity Index</p>
                          <Badge className="mt-2 bg-purple-100 text-purple-800">Active</Badge>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-4">Recent Blockchain Transactions</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-semibold">Carbon Credit Verification</p>
                            <p className="text-sm text-muted-foreground">Block #1,234,567</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-semibold">Soil Health Assessment</p>
                            <p className="text-sm text-muted-foreground">Block #1,234,566</p>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800">Verified</Badge>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <div>
                            <p className="font-semibold">Biodiversity Measurement</p>
                            <p className="text-sm text-muted-foreground">Block #1,234,565</p>
                          </div>
                          <Badge className="bg-purple-100 text-purple-800">Processed</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Demo Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              variant="outline"
            >
              Previous Step
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(demoSteps.length - 1, currentStep + 1))}
              disabled={currentStep === demoSteps.length - 1}
              className="bg-gradient-to-r from-primary to-accent"
            >
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Experience the full power of TerraPulse AI with your own farm data
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
            >
              Schedule Demo Call
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
              <h4 className="font-semibold mb-6 text-foreground text-xl">Experience</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/demo" className="hover:text-foreground transition-colors text-lg">
                    Interactive Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Free Trial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Case Studies
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
