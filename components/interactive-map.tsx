"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  MapPin, 
  Satellite, 
  Layers, 
  Zap, 
  TrendingUp, 
  Eye, 
  Activity,
  Leaf,
  Droplets,
  Thermometer,
  Wind,
  Sun,
  CloudRain,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Radio
} from "lucide-react"
import { useState, useEffect } from "react"


export function InteractiveMap() {
  const [selectedLayer, setSelectedLayer] = useState("satellite")
  const [activeRegion, setActiveRegion] = useState("maharashtra")
  const [liveData, setLiveData] = useState({
    carbonSequestration: 2.3,
    soilHealth: 87,
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    rainfall: 45
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        carbonSequestration: prev.carbonSequestration + (Math.random() - 0.5) * 0.1,
        soilHealth: Math.max(70, Math.min(95, prev.soilHealth + (Math.random() - 0.5) * 2)),
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(40, Math.min(80, prev.humidity + (Math.random() - 0.5) * 5)),
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 3)),
        rainfall: Math.max(0, Math.min(100, prev.rainfall + (Math.random() - 0.5) * 10))
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const regions = [
    { 
      id: "maharashtra", 
      name: "Maharashtra", 
      farms: 1250, 
      credits: 45600,
      lat: 19.7515,
      lng: 75.7139,
      status: "excellent",
      alerts: 0
    },
    { 
      id: "punjab", 
      name: "Punjab", 
      farms: 890, 
      credits: 32400,
      lat: 31.1471,
      lng: 75.3412,
      status: "good",
      alerts: 1
    },
    { 
      id: "karnataka", 
      name: "Karnataka", 
      farms: 1100, 
      credits: 38900,
      lat: 15.3173,
      lng: 75.7139,
      status: "excellent",
      alerts: 0
    },
    { 
      id: "gujarat", 
      name: "Gujarat", 
      farms: 750, 
      credits: 28700,
      lat: 23.0225,
      lng: 72.5714,
      status: "warning",
      alerts: 2
    },
  ]

  const farmMarkers = [
    { id: 1, lat: 19.8762, lng: 75.3433, name: "Satara Valley Farm", crop: "Sugarcane", health: 92 },
    { id: 2, lat: 19.6515, lng: 75.9064, name: "Pune Organic Farm", crop: "Wheat", health: 88 },
    { id: 3, lat: 19.9975, lng: 73.7898, name: "Nashik Vineyard", crop: "Grapes", health: 95 },
    { id: 4, lat: 18.5204, lng: 73.8567, name: "Solapur Cotton", crop: "Cotton", health: 85 },
    { id: 5, lat: 20.7050, lng: 77.1025, name: "Akola Research", crop: "Soybean", health: 91 }
  ]

  const satelliteFeatures = [
    { name: "NDVI Analysis", status: "active", accuracy: 94 },
    { name: "Crop Classification", status: "active", accuracy: 89 },
    { name: "Soil Moisture", status: "active", accuracy: 92 },
    { name: "Disease Detection", status: "processing", accuracy: 87 }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-500 bg-green-500/10 border-green-500/30"
      case "good": return "text-blue-500 bg-blue-500/10 border-blue-500/30"
      case "warning": return "text-orange-500 bg-orange-500/10 border-orange-500/30"
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-8">
      {/* Real-time Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Leaf className="h-5 w-5" />Carbon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.carbonSequestration.toFixed(1)} <span className="text-sm font-normal">tCO2/ha</span></div>
            <p className="text-xs text-green-600">+5.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><BarChart3 className="h-5 w-5" />Soil Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.soilHealth.toFixed(0)} <span className="text-sm font-normal">/100</span></div>
            <p className="text-xs text-green-600">+2.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Thermometer className="h-5 w-5" />Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.temperature.toFixed(0)} <span className="text-sm font-normal">°C</span></div>
            <p className="text-xs text-muted-foreground">±0.5°</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Droplets className="h-5 w-5" />Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.humidity.toFixed(0)} <span className="text-sm font-normal">%</span></div>
            <p className="text-xs text-red-600">-3.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Wind className="h-5 w-5" />Wind Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.windSpeed.toFixed(0)} <span className="text-sm font-normal">km/h</span></div>
            <p className="text-xs text-green-600">+1.8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><CloudRain className="h-5 w-5" />Rainfall</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.rainfall.toFixed(0)} <span className="text-sm font-normal">mm</span></div>
            <p className="text-xs text-green-600">+12%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Enhanced Map Visualization */}
        <div className="lg:col-span-2">
          <Card className={`bg-card border-primary/30 h-[600px] overflow-hidden`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-primary animate-pulse" />
                  Live Farm Monitoring
                  <Badge className="ml-2 bg-green-500/10 text-green-600 border-green-500/30">
                    <Radio className="h-3 w-3 mr-1 animate-pulse" />
                    Live
                  </Badge>
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={selectedLayer === "satellite" ? "default" : "outline"}
                    onClick={() => setSelectedLayer("satellite")}
                    className="text-xs"
                  >
                    <Satellite className="h-3 w-3 mr-1" />
                    Satellite
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedLayer === "terrain" ? "default" : "outline"}
                    onClick={() => setSelectedLayer("terrain")}
                    className="text-xs"
                  >
                    <Layers className="h-3 w-3 mr-1" />
                    Terrain
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedLayer === "ndvi" ? "default" : "outline"}
                    onClick={() => setSelectedLayer("ndvi")}
                    className="text-xs"
                  >
                    <Activity className="h-3 w-3 mr-1" />
                    NDVI
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0">
              {/* Enhanced Map Interface with Real Satellite Imagery Simulation */}
              <div className="relative h-full bg-gradient-to-br from-green-100 via-blue-50 to-green-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-green-950/20 overflow-hidden">
                {/* Satellite Grid Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={i}
                        className={`border border-primary/20 ${
                          selectedLayer === 'ndvi' 
                            ? `bg-gradient-to-br ${i % 3 === 0 ? 'from-green-400/40 to-green-600/40' : i % 3 === 1 ? 'from-yellow-400/40 to-orange-500/40' : 'from-red-400/40 to-red-600/40'}`
                            : selectedLayer === 'terrain'
                            ? `bg-gradient-to-br ${i % 4 === 0 ? 'from-amber-200/40 to-amber-400/40' : i % 4 === 1 ? 'from-green-200/40 to-green-400/40' : i % 4 === 2 ? 'from-blue-200/40 to-blue-400/40' : 'from-gray-200/40 to-gray-400/40'}`
                            : `bg-gradient-to-br ${i % 2 === 0 ? 'from-green-200/30 to-green-400/30' : 'from-blue-200/30 to-blue-400/30'}`
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Farm Markers */}
                {farmMarkers.map((farm, index) => (
                  <div
                    key={farm.id}
                    className="absolute animate-pulse cursor-pointer group"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${25 + index * 10}%`,
                    }}
                  >
                    <div className="relative">
                      <MapPin className="h-6 w-6 text-primary drop-shadow-lg" />
                      <div className="absolute -top-1 -right-1">
                        <div className={`h-3 w-3 rounded-full animate-ping ${
                          farm.health > 90 ? 'bg-green-500' : farm.health > 80 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      
                      {/* Farm Info Tooltip */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className={`bg-card p-3 rounded-lg border shadow-lg min-w-[200px]`}>
                          <h4 className="font-semibold text-sm text-foreground">{farm.name}</h4>
                          <p className="text-xs text-muted-foreground">{farm.crop}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <div className="text-xs">Health:</div>
                            <Progress value={farm.health} className="h-1 flex-1" />
                            <div className="text-xs font-medium">{farm.health}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Real-time Data Overlays */}
                <div className="absolute top-4 left-4">
                  <div className={`bg-card/90 p-3 rounded-lg border border-primary/30 space-y-2`}>
                    <div className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">Carbon Sequestration</span>
                    </div>
                    <div className="text-lg font-bold text-green-500">
                      +{liveData.carbonSequestration.toFixed(1)} tCO2/ha
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last updated: {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className={`bg-card/90 p-3 rounded-lg border border-blue-500/30 space-y-2`}>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-500" />
                      <span className="text-xs text-muted-foreground">Soil Health Index</span>
                    </div>
                    <div className="text-lg font-bold text-blue-500">
                      {liveData.soilHealth.toFixed(0)}/100
                    </div>
                    <div className="text-xs text-green-600">Excellent Condition</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4">
                  <div className={`bg-card/90 p-3 rounded-lg border border-orange-500/30 space-y-2`}>
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-orange-500" />
                      <span className="text-xs text-muted-foreground">Weather Conditions</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>Temp: {liveData.temperature.toFixed(0)}°C</div>
                      <div>Humidity: {liveData.humidity.toFixed(0)}%</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className={`bg-card/90 p-3 rounded-lg border border-primary/30`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Monitoring Status</span>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
                      <Activity className="h-3 w-3 mr-1 animate-pulse" />
                      Live Active
                    </Badge>
                  </div>
                </div>

                {/* Center Map Info */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <Satellite className="h-12 w-12 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center animate-ping">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Interactive Farm Map</h3>
                      <p className="text-sm text-muted-foreground">
                        Real-time satellite imagery with AI-powered crop monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      {/* Regional Data */}
      <div className="space-y-6">
        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="text-lg">Regional Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {regions.map((region) => (
              <div
                key={region.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeRegion === region.id ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                }`}
                onClick={() => setActiveRegion(region.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{region.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {region.farms} farms
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  {region.credits.toLocaleString()} credits generated
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass border-accent/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              AI Predictions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
              <div className="text-sm font-medium text-foreground">Next Week Forecast</div>
              <div className="text-xs text-muted-foreground mt-1">Optimal conditions for carbon sequestration</div>
            </div>
            <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
              <div className="text-sm font-medium text-foreground">Soil Health Alert</div>
              <div className="text-xs text-muted-foreground mt-1">Nitrogen levels increasing in Zone A</div>
            </div>
            <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <div className="text-sm font-medium text-foreground">Water Management</div>
              <div className="text-xs text-muted-foreground mt-1">Irrigation optimization recommended</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
