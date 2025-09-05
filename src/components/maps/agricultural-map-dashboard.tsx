"use client"

import { memo, useMemo } from 'react'
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
  Sun,
  CloudRain,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Radio
} from "lucide-react"
import { useState, useEffect } from "react"

// Memoized components for better performance
const MemoizedMetric = memo(function MetricCard({ title, value, unit, trend, icon: Icon }: {
  title: string;
  value: string;
  unit: string;
  trend: string;
  icon: any;
}) {
  return (
    <Card className="p-3 border-primary/30">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium">{title}</span>
      </div>
      <div className="text-lg font-bold">{value}<span className="text-xs text-muted-foreground">{unit}</span></div>
      <div className="text-xs text-green-600">{trend}</div>
    </Card>
  )
})

const MemoizedFarmCard = memo(function FarmCard({ farm, isSelected, onClick }: {
  farm: any;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`p-3 rounded-lg border cursor-pointer transition-colors duration-200 ${
        isSelected ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-foreground text-sm">{farm.name}</h4>
        <Badge variant="secondary" className="text-xs">
          {farm.crop}
        </Badge>
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
  )
})

export function OptimizedInteractiveMap() {
  const [selectedLayer, setSelectedLayer] = useState("satellite")
  const [activeRegion, setActiveRegion] = useState("maharashtra")
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null)
  
  // Stable data to reduce re-renders
  const farmData = useMemo(() => [
    { 
      id: "farm1", 
      name: "Green Valley Farm", 
      crop: "Sugarcane", 
      health: 92,
      credits: 1250,
      owner: "Rajesh Patil",
      area: "45 hectares",
      status: "excellent"
    },
    { 
      id: "farm2", 
      name: "Organic Sunrise Farm", 
      crop: "Wheat", 
      health: 88,
      credits: 980,
      owner: "Sunita Sharma",
      area: "32 hectares",
      status: "good"
    },
    { 
      id: "farm3", 
      name: "Heritage Vineyard", 
      crop: "Grapes", 
      health: 95,
      credits: 1890,
      owner: "Mohan Desai",
      area: "67 hectares",
      status: "excellent"
    }
  ], [])

  // Static metrics to reduce updates
  const liveMetrics = useMemo(() => ({
    carbonSequestration: "2.3",
    soilHealth: "87",
    temperature: "28",
    humidity: "65",
    windSpeed: "12",
    rainfall: "45"
  }), [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-500 bg-green-500/10 border-green-500/30"
      case "good": return "text-blue-500 bg-blue-500/10 border-blue-500/30"
      case "warning": return "text-orange-500 bg-orange-500/10 border-orange-500/30"
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-4">
      {/* Simplified Real-time Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <MemoizedMetric
          title="Carbon"
          value={liveMetrics.carbonSequestration}
          unit="tCO2/ha"
          trend="+5.2%"
          icon={Leaf}
        />
        <MemoizedMetric
          title="Soil Health"
          value={liveMetrics.soilHealth}
          unit="/100"
          trend="+2.1%"
          icon={BarChart3}
        />
        <MemoizedMetric
          title="Temperature"
          value={liveMetrics.temperature}
          unit="°C"
          trend="±0.5°"
          icon={Thermometer}
        />
        <MemoizedMetric
          title="Humidity"
          value={liveMetrics.humidity}
          unit="%"
          trend="-3.2%"
          icon={Droplets}
        />
        <MemoizedMetric
          title="Wind Speed"
          value={liveMetrics.windSpeed}
          unit="km/h"
          trend="+1.8%"
          icon={Wind}
        />
        <MemoizedMetric
          title="Rainfall"
          value={liveMetrics.rainfall}
          unit="mm"
          trend="+12%"
          icon={CloudRain}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Simplified Map Visualization */}
        <div className="lg:col-span-2">
          <Card className="border-primary/30 h-[600px] overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Satellite className="h-5 w-5 text-primary" />
                  Farm Monitoring Dashboard
                  <Badge className="ml-2 bg-green-500/10 text-green-600 border-green-500/30">
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
                  <Button
                    size="sm"
                    variant={selectedLayer === "analytics" ? "default" : "outline"}
                    onClick={() => setSelectedLayer("analytics")}
                    className="text-xs"
                  >
                    <Activity className="h-3 w-3 mr-1" />
                    Analytics
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0">
              {/* Simplified Map Interface */}
              <div className="relative h-[500px] bg-gradient-to-br from-green-50 via-blue-50 to-green-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-green-950/20 overflow-hidden rounded-lg">
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                      <div
                        key={i}
                        className={`border border-primary/20 ${
                          selectedLayer === 'analytics' 
                            ? i % 3 === 0 ? 'bg-green-400/20' : i % 3 === 1 ? 'bg-yellow-400/20' : 'bg-blue-400/20'
                            : selectedLayer === 'terrain'
                            ? i % 2 === 0 ? 'bg-green-300/20' : 'bg-blue-300/20'
                            : 'bg-green-200/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Farm Markers */}
                {farmData.map((farm, index) => (
                  <div
                    key={farm.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${25 + index * 20}%`,
                      top: `${30 + index * 15}%`,
                    }}
                    onClick={() => setSelectedFarm(selectedFarm === farm.id ? null : farm.id)}
                  >
                    <div className="relative">
                      <MapPin className={`h-8 w-8 drop-shadow-lg transition-colors ${
                        farm.status === 'excellent' ? 'text-green-500' : 
                        farm.status === 'good' ? 'text-blue-500' : 'text-orange-500'
                      }`} />
                      <div className={`absolute -top-1 -right-1 h-3 w-3 rounded-full ${
                        farm.status === 'excellent' ? 'bg-green-500' : 
                        farm.status === 'good' ? 'bg-blue-500' : 'bg-orange-500'
                      }`}></div>
                      
                      {/* Farm Info Tooltip */}
                      {selectedFarm === farm.id && (
                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                          <div className="bg-background/95 backdrop-blur-sm p-4 rounded-lg border shadow-lg min-w-[220px]">
                            <h4 className="font-semibold text-foreground mb-2">{farm.name}</h4>
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Owner:</span>
                                <span>{farm.owner}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Crop:</span>
                                <span>{farm.crop}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Area:</span>
                                <span>{farm.area}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-muted-foreground text-xs">Health:</span>
                                <Progress value={farm.health} className="h-1 flex-1" />
                                <span className="text-xs">{farm.health}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Credits:</span>
                                <span className="text-green-600 font-medium">{farm.credits}</span>
                              </div>
                            </div>
                            <Badge className={`mt-2 ${getStatusColor(farm.status)}`}>
                              {farm.status.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Live Data Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">Carbon Sequestration</span>
                    </div>
                    <div className="text-lg font-bold text-green-500">
                      +{liveMetrics.carbonSequestration} tCO2/ha
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Monitoring Status</span>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
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
                      <h3 className="text-lg font-bold text-foreground">Farm Monitoring Hub</h3>
                      <p className="text-sm text-muted-foreground">
                        Click markers for detailed farm information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Farm Details Panel */}
        <div className="space-y-4">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Farm Network</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {farmData.map((farm) => (
                <MemoizedFarmCard
                  key={farm.id}
                  farm={farm}
                  isSelected={selectedFarm === farm.id}
                  onClick={() => setSelectedFarm(selectedFarm === farm.id ? null : farm.id)}
                />
              ))}
            </CardContent>
          </Card>

          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                <div className="text-sm font-medium text-foreground">Satellite Coverage</div>
                <div className="text-xs text-muted-foreground mt-1">94% active monitoring</div>
                <Badge className="mt-2 bg-green-500/10 text-green-600 border-green-500/30">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  OPERATIONAL
                </Badge>
              </div>
              <div className="p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                <div className="text-sm font-medium text-foreground">Data Processing</div>
                <div className="text-xs text-muted-foreground mt-1">Real-time analytics active</div>
                <Badge className="mt-2 bg-blue-500/10 text-blue-600 border-blue-500/30">
                  <Activity className="h-3 w-3 mr-1" />
                  PROCESSING
                </Badge>
              </div>
              <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                <div className="text-sm font-medium text-foreground">Credit Generation</div>
                <div className="text-xs text-muted-foreground mt-1">Multi-stream verification</div>
                <Badge className="mt-2 bg-accent/10 text-accent border-accent/30">
                  <Zap className="h-3 w-3 mr-1" />
                  GENERATING
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
