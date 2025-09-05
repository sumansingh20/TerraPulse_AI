"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Thermometer,
  Droplets,
  Beaker,
  Zap,
  Activity,
  Wifi,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Settings
} from "lucide-react"

export function SoilHealthMonitor() {
  const [selectedSensor, setSelectedSensor] = useState("all")

  const soilMetrics = {
    carbonContent: {
      value: 2.8,
      unit: "%",
      status: "Good",
      trend: "+0.3%",
      target: 3.5
    },
    pH: {
      value: 6.8,
      unit: "",
      status: "Optimal",
      trend: "+0.1",
      target: 7.0
    },
    moisture: {
      value: 45,
      unit: "%",
      status: "Adequate",
      trend: "-5%",
      target: 50
    },
    nitrogen: {
      value: 285,
      unit: "kg/ha",
      status: "High",
      trend: "+15%",
      target: 250
    },
    phosphorus: {
      value: 42,
      unit: "kg/ha", 
      status: "Medium",
      trend: "+3%",
      target: 50
    },
    potassium: {
      value: 180,
      unit: "kg/ha",
      status: "Low",
      trend: "-8%",
      target: 220
    }
  }

  const iotSensors = [
    {
      id: "SOIL-001",
      location: "Plot A-1 (North)",
      status: "Online",
      lastUpdate: "2 min ago",
      batteryLevel: 87,
      temperature: 24.5,
      moisture: 42,
      ph: 6.9,
      connectivity: "Strong"
    },
    {
      id: "SOIL-002", 
      location: "Plot A-2 (Central)",
      status: "Online",
      lastUpdate: "1 min ago",
      batteryLevel: 92,
      temperature: 25.2,
      moisture: 48,
      ph: 6.7,
      connectivity: "Strong"
    },
    {
      id: "SOIL-003",
      location: "Plot A-3 (South)",
      status: "Warning",
      lastUpdate: "15 min ago",
      batteryLevel: 23,
      temperature: 26.1,
      moisture: 38,
      ph: 7.2,
      connectivity: "Weak"
    },
    {
      id: "SOIL-004",
      location: "Plot B-1 (East)",
      status: "Offline",
      lastUpdate: "2 hours ago",
      batteryLevel: 5,
      temperature: null,
      moisture: null,
      ph: null,
      connectivity: "None"
    }
  ]

  const nutrientAnalysis = [
    {
      nutrient: "Nitrogen (N)",
      current: 285,
      optimal: "200-300",
      deficiency: "Low",
      recommendation: "Reduce nitrogen fertilizer application",
      impact: "Excessive vegetative growth"
    },
    {
      nutrient: "Phosphorus (P)",
      current: 42,
      optimal: "40-60",
      deficiency: "Moderate",
      recommendation: "Apply phosphate fertilizer",
      impact: "Root development enhancement needed"
    },
    {
      nutrient: "Potassium (K)",
      current: 180,
      optimal: "200-250", 
      deficiency: "High",
      recommendation: "Immediate potash application required",
      impact: "Disease resistance and water regulation affected"
    },
    {
      nutrient: "Sulfur (S)",
      current: 18,
      optimal: "15-25",
      deficiency: "Low",
      recommendation: "Maintain current levels",
      impact: "Protein synthesis support adequate"
    },
    {
      nutrient: "Calcium (Ca)",
      current: 380,
      optimal: "300-500",
      deficiency: "Low",
      recommendation: "Continue lime application schedule",
      impact: "Cell wall structure maintained"
    },
    {
      nutrient: "Magnesium (Mg)",
      current: 95,
      optimal: "80-120", 
      deficiency: "Low",
      recommendation: "Monitor and maintain",
      impact: "Chlorophyll production sufficient"
    }
  ]

  const carbonSequestration = [
    {
      depth: "0-15 cm",
      carbonContent: 3.2,
      sequestrationRate: "+0.45 tCO2/ha/year",
      organicMatter: 5.8,
      microbialActivity: "High"
    },
    {
      depth: "15-30 cm", 
      carbonContent: 2.1,
      sequestrationRate: "+0.32 tCO2/ha/year",
      organicMatter: 3.9,
      microbialActivity: "Medium"
    },
    {
      depth: "30-45 cm",
      carbonContent: 1.4,
      sequestrationRate: "+0.18 tCO2/ha/year",
      organicMatter: 2.1,
      microbialActivity: "Low"
    }
  ]

  const recommendations = [
    {
      priority: "High",
      action: "Apply Potash Fertilizer",
      reason: "Potassium levels are 18% below optimal range",
      timeline: "Within 7 days",
      impact: "Improve disease resistance and water regulation"
    },
    {
      priority: "Medium",
      action: "Increase Organic Matter",
      reason: "Carbon sequestration can be enhanced",
      timeline: "Next planting cycle",
      impact: "Boost soil carbon by 0.5% annually"
    },
    {
      priority: "Medium", 
      action: "Optimize Irrigation",
      reason: "Moisture levels fluctuating below target",
      timeline: "Adjust weekly schedule",
      impact: "Maintain consistent 45-50% moisture"
    },
    {
      priority: "Low",
      action: "Monitor pH Trends",
      reason: "pH slowly trending toward optimal",
      timeline: "Monthly monitoring",
      impact: "Maintain nutrient availability"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-brown-600 bg-clip-text text-transparent">
          Soil Health Monitoring System
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Real-time IoT sensor data integration with comprehensive soil analysis, carbon measurement, and precision nutrient management recommendations
        </p>
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Soil Carbon</p>
                <p className="text-2xl font-bold">{soilMetrics.carbonContent.value}%</p>
                <p className="text-xs text-green-600">{soilMetrics.carbonContent.trend}</p>
              </div>
              <Beaker className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">pH Level</p>
                <p className="text-2xl font-bold">{soilMetrics.pH.value}</p>
                <p className="text-xs text-blue-600">{soilMetrics.pH.trend}</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Moisture</p>
                <p className="text-2xl font-bold">{soilMetrics.moisture.value}%</p>
                <p className="text-xs text-orange-600">{soilMetrics.moisture.trend}</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-green-200 hover:border-green-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Sensors</p>
                <p className="text-2xl font-bold">3/4</p>
                <p className="text-xs text-yellow-600">1 offline</p>
              </div>
              <Wifi className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Monitoring Dashboard */}
      <Tabs defaultValue="sensors" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="sensors">IoT Sensors</TabsTrigger>
          <TabsTrigger value="nutrients">Nutrient Analysis</TabsTrigger>
          <TabsTrigger value="carbon">Carbon Sequestration</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="sensors" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Real-Time IoT Sensor Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {iotSensors.map((sensor) => (
                  <div key={sensor.id} className="bg-muted/50 p-6 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{sensor.id}</h4>
                        <p className="text-sm text-muted-foreground">{sensor.location}</p>
                      </div>
                      <Badge 
                        variant={
                          sensor.status === "Online" ? "default" :
                          sensor.status === "Warning" ? "secondary" :
                          "destructive"
                        }
                        className={
                          sensor.status === "Online" ? "text-green-600 border-green-600" :
                          sensor.status === "Warning" ? "text-yellow-600 border-yellow-600" :
                          "text-red-600 border-red-600"
                        }
                      >
                        {sensor.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Temperature</p>
                        <p className="font-semibold">
                          {sensor.temperature ? `${sensor.temperature}°C` : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Moisture</p>
                        <p className="font-semibold">
                          {sensor.moisture ? `${sensor.moisture}%` : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">pH Level</p>
                        <p className="font-semibold">
                          {sensor.ph ? sensor.ph : "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Battery</p>
                        <div className="flex items-center gap-2">
                          <Progress value={sensor.batteryLevel} className="h-2 flex-1" />
                          <span className="text-sm">{sensor.batteryLevel}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span>Last Update: {sensor.lastUpdate}</span>
                      <div className="flex items-center gap-1">
                        <Wifi className={`h-4 w-4 ${
                          sensor.connectivity === "Strong" ? "text-green-500" :
                          sensor.connectivity === "Weak" ? "text-yellow-500" :
                          "text-red-500"
                        }`} />
                        <span>{sensor.connectivity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nutrients" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="h-5 w-5" />
                Comprehensive Nutrient Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nutrientAnalysis.map((nutrient) => (
                  <div key={nutrient.nutrient} className="bg-muted/50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{nutrient.nutrient}</h4>
                      <Badge 
                        variant="outline"
                        className={
                          nutrient.deficiency === "Low" ? "text-green-600 border-green-600" :
                          nutrient.deficiency === "Moderate" ? "text-yellow-600 border-yellow-600" :
                          "text-red-600 border-red-600"
                        }
                      >
                        {nutrient.deficiency} Deficiency
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Current Level</p>
                        <p className="text-xl font-bold">{nutrient.current} kg/ha</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Optimal Range</p>
                        <p className="font-semibold">{nutrient.optimal} kg/ha</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Recommendation</p>
                        <p className="text-sm font-medium">{nutrient.recommendation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Impact</p>
                        <p className="text-sm">{nutrient.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="carbon" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Soil Carbon Sequestration Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {carbonSequestration.map((layer) => (
                  <div key={layer.depth} className="bg-muted/50 p-6 rounded-lg border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-lg mb-4">Soil Depth: {layer.depth}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Carbon Content</p>
                        <p className="text-2xl font-bold text-green-600">{layer.carbonContent}%</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Sequestration Rate</p>
                        <p className="text-lg font-bold text-blue-600">{layer.sequestrationRate}</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Organic Matter</p>
                        <p className="text-2xl font-bold text-orange-600">{layer.organicMatter}%</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Microbial Activity</p>
                        <p className="text-lg font-bold text-purple-600">{layer.microbialActivity}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Total Carbon Sequestration Potential</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">+0.95</p>
                      <p className="text-sm text-muted-foreground">tCO2/ha/year</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">₹1,187</p>
                      <p className="text-sm text-muted-foreground">Potential Credit Value</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">2.3%</p>
                      <p className="text-sm text-muted-foreground">Average Carbon Content</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                AI-Powered Soil Management Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={`rec-${index}`} className="bg-muted/50 p-6 rounded-lg border-l-4 border-l-blue-500">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-lg">{rec.action}</h4>
                      <Badge 
                        variant={
                          rec.priority === "High" ? "destructive" :
                          rec.priority === "Medium" ? "default" :
                          "secondary"
                        }
                      >
                        {rec.priority} Priority
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Reason</p>
                        <p className="font-medium">{rec.reason}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-medium">{rec.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Expected Impact</p>
                        <p className="font-medium">{rec.impact}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark Complete
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Reminder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* System Status */}
      <Card className="glass border-green-200">
        <CardHeader>
          <CardTitle>System Health Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>Data Collection</span>
              <Badge variant="outline" className="text-green-600 border-green-600">Operational</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span>AI Analysis</span>
              <Badge variant="outline" className="text-blue-600 border-blue-600">Processing</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <span>Sensor Network</span>
              <Badge variant="outline" className="text-orange-600 border-orange-600">75% Online</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span>Data Sync</span>
              <Badge variant="outline" className="text-purple-600 border-purple-600">Real-time</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
