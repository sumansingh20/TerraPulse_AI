"use client"

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Satellite, 
  Layers, 
  Zap, 
  TrendingUp, 
  Activity,
  Leaf,
  Droplets,
  Thermometer,
  Wind,
  CloudRain,
  BarChart3,
  Radio,
  Navigation,
  Maximize2,
  Settings
} from "lucide-react"
import { useState, useEffect } from "react"


// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false })
const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false })
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false })

// Import Leaflet CSS in component
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default markers in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  })
}

export function RealInteractiveMap() {
  const [selectedLayer, setSelectedLayer] = useState("satellite")
  const [, setActiveRegion] = useState("maharashtra")
  const [, setMapView] = useState("overview")
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null)
  const [liveData, setLiveData] = useState({
    carbonSequestration: 2.3,
    soilHealth: 87,
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    rainfall: 45
  })

  // Real farm locations in India
  const farmLocations = [
    { 
      id: "farm1", 
      name: "Green Valley Farm", 
      lat: 19.8762, 
      lng: 75.3433, 
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
      lat: 19.6515, 
      lng: 75.9064, 
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
      lat: 19.9975, 
      lng: 73.7898, 
      crop: "Grapes", 
      health: 95,
      credits: 1890,
      owner: "Mohan Desai",
      area: "67 hectares",
      status: "excellent"
    },
    { 
      id: "farm4", 
      name: "Cotton Fields Cooperative", 
      lat: 18.5204, 
      lng: 73.8567, 
      crop: "Cotton", 
      health: 85,
      credits: 750,
      owner: "Agricultural Coop",
      area: "120 hectares",
      status: "good"
    },
    { 
      id: "farm5", 
      name: "Progressive Agriculture Hub", 
      lat: 20.7050, 
      lng: 77.1025, 
      crop: "Soybean", 
      health: 91,
      credits: 1340,
      owner: "Prakash Joshi",
      area: "78 hectares",
      status: "excellent"
    }
  ]

  // IoT Sensor locations
  const sensorLocations = [
    { id: "sensor1", lat: 19.8800, lng: 75.3500, type: "Soil Moisture", value: "68%", status: "active" },
    { id: "sensor2", lat: 19.6600, lng: 75.9100, type: "Weather Station", value: "28°C", status: "active" },
    { id: "sensor3", lat: 20.0000, lng: 73.8000, type: "Air Quality", value: "Good", status: "active" },
    { id: "sensor4", lat: 18.5300, lng: 73.8600, type: "Irrigation", value: "Auto", status: "active" },
  ]

  // Satellite coverage areas
  const satelliteCoverageAreas = [
    { center: [19.8762, 75.3433] as [number, number], radius: 5000, coverage: 94 },
    { center: [19.6515, 75.9064] as [number, number], radius: 4500, coverage: 89 },
    { center: [19.9975, 73.7898] as [number, number], radius: 6000, coverage: 97 },
  ]

  // Map tile layers
  const tileLayers = {
    satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    terrain: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    standard: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        carbonSequestration: Math.max(1.5, Math.min(3.5, prev.carbonSequestration + (Math.random() - 0.5) * 0.1)),
        soilHealth: Math.max(70, Math.min(95, prev.soilHealth + (Math.random() - 0.5) * 2)),
        temperature: Math.max(20, Math.min(35, prev.temperature + (Math.random() - 0.5) * 2)),
        humidity: Math.max(40, Math.min(80, prev.humidity + (Math.random() - 0.5) * 5)),
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 3)),
        rainfall: Math.max(0, Math.min(100, prev.rainfall + (Math.random() - 0.5) * 10))
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Custom marker icons
  const createCustomIcon = (type: string, status: string) => {
    const color = status === 'excellent' ? '#10b981' : status === 'good' ? '#3b82f6' : '#ef4444'
    return L.divIcon({
      className: 'custom-marker',
      html: `<div class="marker-icon" style="background: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">${type === 'farm' ? '🌾' : '📡'}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-500 bg-green-500/10 border-green-500/30"
      case "good": return "text-blue-500 bg-blue-500/10 border-blue-500/30"
      case "warning": return "text-orange-500 bg-orange-500/10 border-orange-500/30"
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      {/* Real-time Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Leaf className="h-4 w-4" />Carbon</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.carbonSequestration.toFixed(1)} <span className="text-sm font-normal">tCO2/ha</span></div>
            <p className="text-xs text-green-600">+5.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><BarChart3 className="h-4 w-4" />Soil Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.soilHealth.toFixed(0)} <span className="text-sm font-normal">/100</span></div>
            <p className="text-xs text-green-600">+2.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Thermometer className="h-4 w-4" />Temperature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.temperature.toFixed(0)} <span className="text-sm font-normal">°C</span></div>
            <p className="text-xs text-muted-foreground">±0.5°</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Droplets className="h-4 w-4" />Humidity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.humidity.toFixed(0)} <span className="text-sm font-normal">%</span></div>
            <p className="text-xs text-red-600">-3.2%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><Wind className="h-4 w-4" />Wind Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.windSpeed.toFixed(0)} <span className="text-sm font-normal">km/h</span></div>
            <p className="text-xs text-green-600">+1.8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2"><CloudRain className="h-4 w-4" />Rainfall</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{liveData.rainfall.toFixed(0)} <span className="text-sm font-normal">mm</span></div>
            <p className="text-xs text-green-600">+12%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Real Interactive Map */}
        <div className="lg:col-span-2">
          <Card className="border-primary/30 h-[600px] overflow-hidden">
            <CardHeader className="pb-3">
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
                    variant={selectedLayer === "standard" ? "default" : "outline"}
                    onClick={() => setSelectedLayer("standard")}
                    className="text-xs"
                  >
                    <Activity className="h-3 w-3 mr-1" />
                    Standard
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-full p-0 relative">
              {/* Real Leaflet Map */}
              <div className="h-[500px] w-full rounded-lg overflow-hidden">
                <MapContainer
                  center={[19.7515, 75.7139]} // Maharashtra center
                  zoom={8}
                  style={{ height: '100%', width: '100%' }}
                  className="z-10"
                >
                  <TileLayer
                    url={tileLayers[selectedLayer as keyof typeof tileLayers]}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  
                  {/* Farm Markers */}
                  {farmLocations.map((farm) => (
                    <Marker
                      key={farm.id}
                      position={[farm.lat, farm.lng]}
                      icon={createCustomIcon('farm', farm.status)}
                    >
                      <Popup>
                        <div className="p-2 min-w-[250px]">
                          <h3 className="font-bold text-lg mb-2">{farm.name}</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Owner:</span>
                              <span className="font-medium">{farm.owner}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Crop:</span>
                              <span className="font-medium">{farm.crop}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Area:</span>
                              <span className="font-medium">{farm.area}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Health:</span>
                              <div className="flex items-center gap-2">
                                <Progress value={farm.health} className="h-2 w-16" />
                                <span className="font-medium">{farm.health}%</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Credits:</span>
                              <span className="font-medium text-green-600">{farm.credits}</span>
                            </div>
                            <Badge className={getStatusColor(farm.status)}>
                              {farm.status.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/* IoT Sensor Markers */}
                  {sensorLocations.map((sensor) => (
                    <Marker
                      key={sensor.id}
                      position={[sensor.lat, sensor.lng]}
                      icon={createCustomIcon('sensor', sensor.status)}
                    >
                      <Popup>
                        <div className="p-2">
                          <h4 className="font-bold">{sensor.type}</h4>
                          <p className="text-sm text-muted-foreground">Current Value: {sensor.value}</p>
                          <Badge className="mt-2 bg-blue-500/10 text-blue-600 border-blue-500/30">
                            {sensor.status.toUpperCase()}
                          </Badge>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/* Satellite Coverage Areas */}
                  {satelliteCoverageAreas.map((area, index) => (
                    <Circle
                      key={index}
                      center={area.center}
                      radius={area.radius}
                      pathOptions={{
                        fillColor: '#3b82f6',
                        fillOpacity: 0.1,
                        color: '#3b82f6',
                        weight: 2,
                        opacity: 0.6
                      }}
                    >
                      <Popup>
                        <div className="p-2">
                          <h4 className="font-bold">Satellite Coverage</h4>
                          <p className="text-sm">Coverage: {area.coverage}%</p>
                          <p className="text-xs text-muted-foreground">Radius: {(area.radius/1000).toFixed(1)}km</p>
                        </div>
                      </Popup>
                    </Circle>
                  ))}
                </MapContainer>
              </div>

              {/* Map Controls Overlay */}
              <div className="absolute top-4 right-4 z-20">
                <div className="flex flex-col gap-2">
                  <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Live Data Overlay */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-background/90 backdrop-blur-sm p-3 rounded-lg border border-primary/30 space-y-2">
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
            </CardContent>
          </Card>
        </div>

        {/* Farm Details Panel */}
        <div className="space-y-4">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Active Farms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {farmLocations.slice(0, 3).map((farm) => (
                <div
                  key={farm.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-300 hover:border-primary/50 ${
                    selectedFarm === farm.id ? "border-primary bg-primary/5" : "border-muted"
                  }`}
                  onClick={() => setSelectedFarm(selectedFarm === farm.id ? null : farm.id)}
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
              ))}
            </CardContent>
          </Card>

          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Live Sensors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sensorLocations.slice(0, 3).map((sensor) => (
                <div key={sensor.id} className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="text-sm font-medium text-foreground">{sensor.type}</div>
                  <div className="text-xs text-muted-foreground mt-1">Value: {sensor.value}</div>
                  <Badge className="mt-2 bg-green-500/10 text-green-600 border-green-500/30">
                    <Activity className="h-3 w-3 mr-1 animate-pulse" />
                    {sensor.status.toUpperCase()}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
