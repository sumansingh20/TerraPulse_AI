"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Satellite,
  MapPin,
  TrendingUp,
  Activity,
  Zap,
  Download,
  Layers,
  BarChart3,
  AlertCircle,
  CheckCircle
} from "lucide-react"

export function SatelliteImageryAnalysis() {
  const [selectedField, setSelectedField] = useState("field-001")
  
  const ndviData = [
    { month: "Jan", value: 0.45, health: "Poor" },
    { month: "Feb", value: 0.52, health: "Fair" },
    { month: "Mar", value: 0.68, health: "Good" },
    { month: "Apr", value: 0.75, health: "Excellent" },
    { month: "May", value: 0.71, health: "Good" },
    { month: "Jun", value: 0.63, health: "Good" }
  ]

  const fieldAnalysis = {
    totalArea: 250.5,
    healthyArea: 215.2,
    stressedArea: 28.1,
    bareArea: 7.2,
    averageNDVI: 0.68,
    changeFromLastMonth: +0.05,
    cropStage: "Vegetative Growth",
    estimatedYield: "4.2 tons/hectare"
  }

  const landUseChanges = [
    {
      id: "change-001",
      location: "Plot A-147",
      changeType: "Forest to Agriculture",
      area: "12.5 hectares",
      date: "2025-08-15",
      status: "Under Review",
      severity: "medium"
    },
    {
      id: "change-002", 
      location: "Plot B-089",
      changeType: "Agriculture to Urban",
      area: "8.3 hectares",
      date: "2025-07-22",
      status: "Verified",
      severity: "high"
    },
    {
      id: "change-003",
      location: "Plot C-234",
      changeType: "Wasteland to Agriculture",
      area: "18.7 hectares", 
      date: "2025-08-01",
      status: "Approved",
      severity: "low"
    }
  ]

  const cropHealthMetrics = [
    {
      metric: "Chlorophyll Content",
      value: 78,
      status: "Good",
      trend: "up",
      color: "text-green-600"
    },
    {
      metric: "Water Stress Index",
      value: 23,
      status: "Low Stress",
      trend: "down", 
      color: "text-green-600"
    },
    {
      metric: "Disease Risk",
      value: 15,
      status: "Low Risk",
      trend: "stable",
      color: "text-green-600"
    },
    {
      metric: "Pest Pressure", 
      value: 32,
      status: "Moderate",
      trend: "up",
      color: "text-yellow-600"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Satellite Imagery Analysis
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Multi-spectral satellite data processing with AI-powered NDVI calculations, land use monitoring, and precision crop health analysis
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Fields Monitored</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <MapPin className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average NDVI</p>
                <p className="text-2xl font-bold">{fieldAnalysis.averageNDVI}</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Healthy Coverage</p>
                <p className="text-2xl font-bold">86%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Alerts Active</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analysis Dashboard */}
      <Tabs defaultValue="ndvi" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="ndvi">NDVI Analysis</TabsTrigger>
          <TabsTrigger value="landuse">Land Use Changes</TabsTrigger>
          <TabsTrigger value="crophealth">Crop Health</TabsTrigger>
          <TabsTrigger value="processing">Data Processing</TabsTrigger>
        </TabsList>

        <TabsContent value="ndvi" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  NDVI Trend Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ndviData.map((data) => (
                    <div key={data.month} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="font-medium w-10">{data.month}</span>
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 h-2 rounded-full" 
                            style={{ width: `${data.value * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{data.value}</p>
                        <Badge 
                          variant="outline" 
                          className={
                            data.health === "Excellent" ? "text-green-600 border-green-600" :
                            data.health === "Good" ? "text-blue-600 border-blue-600" :
                            data.health === "Fair" ? "text-yellow-600 border-yellow-600" :
                            "text-red-600 border-red-600"
                          }
                        >
                          {data.health}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Field Analysis Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Healthy Area</p>
                      <p className="text-xl font-bold text-green-600">{fieldAnalysis.healthyArea} ha</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Stressed Area</p>
                      <p className="text-xl font-bold text-yellow-600">{fieldAnalysis.stressedArea} ha</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Current Crop Stage:</span>
                      <Badge variant="secondary">{fieldAnalysis.cropStage}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Yield:</span>
                      <span className="font-semibold">{fieldAnalysis.estimatedYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Change:</span>
                      <span className="font-semibold text-green-600">
                        +{fieldAnalysis.changeFromLastMonth}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="landuse" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Land Use Change Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {landUseChanges.map((change) => (
                  <div key={change.id} className="bg-muted/50 p-4 rounded-lg border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{change.location}</h4>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            change.severity === "high" ? "destructive" :
                            change.severity === "medium" ? "default" : 
                            "secondary"
                          }
                        >
                          {change.severity.toUpperCase()}
                        </Badge>
                        <Badge variant="outline">{change.status}</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Change Type</p>
                        <p className="font-medium">{change.changeType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Area Affected</p>
                        <p className="font-medium">{change.area}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Detected On</p>
                        <p className="font-medium">{change.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button>View Detailed Map</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crophealth" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Multi-Spectral Crop Health Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cropHealthMetrics.map((metric) => (
                  <div key={metric.metric} className="bg-muted/50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{metric.metric}</h4>
                      <TrendingUp className={`h-5 w-5 ${
                        metric.trend === "up" ? "text-green-500" :
                        metric.trend === "down" ? "text-red-500" :
                        "text-gray-500"
                      }`} />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{metric.value}%</span>
                        <Badge 
                          variant="outline" 
                          className={`${metric.color} border-current`}
                        >
                          {metric.status}
                        </Badge>
                      </div>
                      <Progress value={metric.value} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5" />
                Satellite Data Processing Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Satellite className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold">Sentinel-2</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Last Update: 2 hours ago</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold">Landsat-8</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Last Update: 6 hours ago</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="h-5 w-5 text-purple-600" />
                      <h4 className="font-semibold">MODIS</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Last Update: 1 hour ago</p>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Active
                    </Badge>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Processing Pipeline Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Image Acquisition</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Atmospheric Correction</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>NDVI Calculation</span>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        Processing
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Change Detection</span>
                      <Badge variant="outline" className="text-gray-600 border-gray-600">
                        Queued
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
