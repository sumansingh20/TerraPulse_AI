"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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
  CloudRain,
  BarChart3,
  CheckCircle2,
  Radio
} from "lucide-react"
import { useState } from "react"

export function FallbackInteractiveMap() {
  const [selectedLayer, setSelectedLayer] = useState("satellite")
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null)

  const farmData = [
    { id: "farm1", name: "Green Valley Farm", crop: "Sugarcane", health: 92, credits: 1250, status: "excellent" },
    { id: "farm2", name: "Organic Sunrise", crop: "Wheat", health: 88, credits: 980, status: "good" },
    { id: "farm3", name: "Heritage Vineyard", crop: "Grapes", health: 95, credits: 1890, status: "excellent" }
  ]

  const metrics = {
    carbonSequestration: "2.3",
    soilHealth: "87",
    temperature: "28",
    humidity: "65",
    windSpeed: "12",
    rainfall: "45"
  }

  return (
    <div className="space-y-4">
      {/* Simple Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <Leaf className="h-4 w-4 text-green-500" />
            <span className="text-xs">Carbon</span>
          </div>
          <div className="text-sm font-bold">{metrics.carbonSequestration} tCO2/ha</div>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="h-4 w-4 text-blue-500" />
            <span className="text-xs">Soil Health</span>
          </div>
          <div className="text-sm font-bold">{metrics.soilHealth}/100</div>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <Thermometer className="h-4 w-4 text-orange-500" />
            <span className="text-xs">Temperature</span>
          </div>
          <div className="text-sm font-bold">{metrics.temperature}°C</div>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <Droplets className="h-4 w-4 text-cyan-500" />
            <span className="text-xs">Humidity</span>
          </div>
          <div className="text-sm font-bold">{metrics.humidity}%</div>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <Wind className="h-4 w-4 text-purple-500" />
            <span className="text-xs">Wind</span>
          </div>
          <div className="text-sm font-bold">{metrics.windSpeed} km/h</div>
        </Card>
        <Card className="p-3">
          <div className="flex items-center gap-2 mb-1">
            <CloudRain className="h-4 w-4 text-blue-600" />
            <span className="text-xs">Rainfall</span>
          </div>
          <div className="text-sm font-bold">{metrics.rainfall} mm</div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Simple Map Interface */}
        <div className="lg:col-span-2">
          <Card className="border-primary/30 h-[600px]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-primary" />
                  Farm Monitoring
                  <Badge className="ml-2 bg-green-500/10 text-green-600">
                    <Radio className="h-3 w-3 mr-1" />
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
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0">
              <div className="relative h-[500px] bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg overflow-hidden">
                
                {/* Simple Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div
                        key={`grid-${i}`}
                        className={`border border-primary/20 ${
                          i % 2 === 0 ? 'bg-green-200/20' : 'bg-blue-200/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Farm Markers */}
                {farmData.map((farm, index) => (
                  <button
                    key={farm.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${25 + index * 20}%`,
                      top: `${30 + index * 15}%`,
                    }}
                    onClick={() => setSelectedFarm(selectedFarm === farm.id ? null : farm.id)}
                  >
                    <MapPin className={`h-8 w-8 ${
                      farm.status === 'excellent' ? 'text-green-500' : 'text-blue-500'
                    }`} />
                    
                    {selectedFarm === farm.id && (
                      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-background/95 p-3 rounded-lg border shadow-lg min-w-[200px]">
                          <h4 className="font-semibold mb-2">{farm.name}</h4>
                          <div className="space-y-1 text-sm">
                            <div>Crop: {farm.crop}</div>
                            <div className="flex items-center gap-2">
                              <span>Health:</span>
                              <Progress value={farm.health} className="h-1 flex-1" />
                              <span>{farm.health}%</span>
                            </div>
                            <div>Credits: {farm.credits}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                ))}

                {/* Overlay Info */}
                <div className="absolute top-4 left-4">
                  <div className="bg-background/90 p-3 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="text-xs">Carbon Sequestration</span>
                    </div>
                    <div className="text-lg font-bold text-green-500">
                      +{metrics.carbonSequestration} tCO2/ha
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-background/90 p-3 rounded-lg border">
                    <Badge className="bg-green-500/10 text-green-600">
                      <Activity className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                </div>

                {/* Center Info */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center space-y-3">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Satellite className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Farm Monitoring</h3>
                      <p className="text-sm text-muted-foreground">
                        Click markers for details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Farm List */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Farms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {farmData.map((farm) => (
                <div
                  key={farm.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedFarm === farm.id ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedFarm(selectedFarm === farm.id ? null : farm.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{farm.name}</h4>
                    <Badge variant="secondary" className="text-xs">{farm.crop}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 text-green-500" />
                    {farm.credits} credits
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={farm.health} className="h-1 flex-1" />
                    <span className="text-xs">{farm.health}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                <div className="text-sm font-medium">Satellite Coverage</div>
                <div className="text-xs text-muted-foreground mt-1">94% active monitoring</div>
                <Badge className="mt-2 bg-green-500/10 text-green-600">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  OPERATIONAL
                </Badge>
              </div>
              <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                <div className="text-sm font-medium">Data Processing</div>
                <div className="text-xs text-muted-foreground mt-1">Real-time analytics</div>
                <Badge className="mt-2 bg-blue-500/10 text-blue-600">
                  <Activity className="h-3 w-3 mr-1" />
                  PROCESSING
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
