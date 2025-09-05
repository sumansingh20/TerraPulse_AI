"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Thermometer, 
  Wind, 
  Droplets, 
  Eye,
  TrendingUp,
  AlertTriangle,
  Calendar
} from "lucide-react"

export function WeatherIntegration() {
  const [selectedRegion, setSelectedRegion] = useState("maharashtra")

  const currentWeather = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    condition: "Partly Cloudy",
    rainfall: 2.5,
    uvIndex: 7
  }

  const forecast = [
    { day: "Today", temp: "28°/22°", condition: "Partly Cloudy", rain: "20%" },
    { day: "Tomorrow", temp: "31°/24°", condition: "Sunny", rain: "5%" },
    { day: "Sat", temp: "29°/23°", condition: "Rainy", rain: "80%" },
    { day: "Sun", temp: "26°/21°", condition: "Cloudy", rain: "60%" },
    { day: "Mon", temp: "30°/25°", condition: "Sunny", rain: "10%" }
  ]

  const seasonalPredictions = [
    {
      season: "Monsoon 2025",
      prediction: "Above Normal",
      confidence: 85,
      impact: "Positive for Kharif crops",
      color: "text-green-500"
    },
    {
      season: "Winter 2025-26",
      prediction: "Normal",
      confidence: 72,
      impact: "Favorable for Rabi crops",
      color: "text-blue-500"
    },
    {
      season: "Summer 2026",
      prediction: "Below Normal Rainfall",
      confidence: 68,
      impact: "Water conservation needed",
      color: "text-orange-500"
    }
  ]

  const farmingRecommendations = [
    {
      crop: "Rice",
      recommendation: "Optimal planting window: Next 2 weeks",
      reason: "Sufficient soil moisture and favorable temperature",
      urgency: "high"
    },
    {
      crop: "Cotton",
      recommendation: "Delay planting by 1 week",
      reason: "Expected heavy rainfall in coming days",
      urgency: "medium"
    },
    {
      crop: "Sugarcane",
      recommendation: "Increase irrigation frequency",
      reason: "Low humidity and rising temperatures",
      urgency: "high"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Weather Integration Dashboard
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Real-time weather monitoring, climate analysis, and AI-powered farming recommendations for optimal agricultural decisions
        </p>
      </div>

      {/* Current Weather Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold">{currentWeather.temperature}°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="text-2xl font-bold">{currentWeather.humidity}%</p>
              </div>
              <Droplets className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Wind Speed</p>
                <p className="text-2xl font-bold">{currentWeather.windSpeed} km/h</p>
              </div>
              <Wind className="h-8 w-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rainfall</p>
                <p className="text-2xl font-bold">{currentWeather.rainfall} mm</p>
              </div>
              <CloudRain className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Weather Dashboard */}
      <Tabs defaultValue="forecast" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Predictions</TabsTrigger>
          <TabsTrigger value="recommendations">Farm Recommendations</TabsTrigger>
          <TabsTrigger value="alerts">Weather Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="forecast" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                5-Day Weather Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {forecast.map((day, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">{day.day}</p>
                    <div className="mb-2">
                      {day.condition === "Sunny" && <Sun className="h-8 w-8 text-yellow-500 mx-auto" />}
                      {day.condition === "Partly Cloudy" && <Cloud className="h-8 w-8 text-gray-500 mx-auto" />}
                      {day.condition === "Rainy" && <CloudRain className="h-8 w-8 text-blue-500 mx-auto" />}
                      {day.condition === "Cloudy" && <Cloud className="h-8 w-8 text-gray-600 mx-auto" />}
                    </div>
                    <p className="text-sm font-medium">{day.temp}</p>
                    <p className="text-xs text-muted-foreground">{day.condition}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Rain: {day.rain}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seasonal" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                AI-Powered Seasonal Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {seasonalPredictions.map((season, index) => (
                  <div key={index} className="bg-muted/50 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">{season.season}</h4>
                      <Badge variant="secondary">{season.confidence}% Confidence</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Prediction</p>
                        <p className={`font-semibold ${season.color}`}>{season.prediction}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Agricultural Impact</p>
                        <p className="font-medium">{season.impact}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Confidence Level</p>
                        <Progress value={season.confidence} className="mt-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                Weather-Based Farming Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farmingRecommendations.map((rec, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{rec.crop}</h4>
                      <Badge variant={rec.urgency === "high" ? "destructive" : "secondary"}>
                        {rec.urgency.toUpperCase()} PRIORITY
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{rec.recommendation}</p>
                    <p className="text-sm text-muted-foreground">{rec.reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Weather Alerts & Warnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-l-red-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <h4 className="font-semibold text-red-700">Heavy Rainfall Warning</h4>
                  </div>
                  <p className="text-red-600 mb-2">Expected 75-100mm rainfall in next 48 hours</p>
                  <p className="text-sm text-red-600">Recommendation: Postpone field operations, ensure proper drainage</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-l-orange-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-5 w-5 text-orange-500" />
                    <h4 className="font-semibold text-orange-700">Heat Wave Advisory</h4>
                  </div>
                  <p className="text-orange-600 mb-2">Temperature may exceed 40°C next week</p>
                  <p className="text-sm text-orange-600">Recommendation: Increase irrigation, provide shade for livestock</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-l-blue-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="h-5 w-5 text-blue-500" />
                    <h4 className="font-semibold text-blue-700">Strong Wind Advisory</h4>
                  </div>
                  <p className="text-blue-600 mb-2">Wind speeds up to 45 km/h expected</p>
                  <p className="text-sm text-blue-600">Recommendation: Secure lightweight structures, avoid spraying operations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Integration Status */}
      <Card className="glass border-green-200">
        <CardHeader>
          <CardTitle>Weather Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>IMD Weather API</span>
              <Badge variant="outline" className="text-green-600 border-green-600">Connected</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>Satellite Data Feed</span>
              <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>IoT Weather Stations</span>
              <Badge variant="outline" className="text-green-600 border-green-600">247 Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
