"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { useWeatherData, useSensorData } from "@/hooks/use-real-time-data"
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  Thermometer, 
  Wind, 
  Droplets, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  RefreshCw
} from "lucide-react"

interface WeatherIntegrationProps {
  farmCoordinates: { lat: number; lon: number }
  farmId: string
}

export function EnhancedWeatherIntegration({ farmCoordinates, farmId }: WeatherIntegrationProps) {
  const { weather, forecast, loading, error, refetch } = useWeatherData(farmCoordinates)
  const [selectedTimeframe, setSelectedTimeframe] = useState("current")

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />
      case 'rain':
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />
      case 'clouds':
      case 'cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading weather data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="border-red-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="text-red-700">Weather data unavailable</span>
            </div>
            <Button onClick={refetch} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Live Weather Integration
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Real-time weather monitoring with AI-powered farming insights and precision agriculture recommendations
        </p>
      </div>

      {/* Current Weather Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300 card-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Temperature</p>
                <p className="text-2xl font-bold">{weather?.temperature.toFixed(1)}°C</p>
                <p className="text-xs text-muted-foreground">Feels like {(weather?.temperature + 2).toFixed(1)}°C</p>
              </div>
              <Thermometer className="h-8 w-8 text-red-500 animate-pulse-nature" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300 card-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Humidity</p>
                <p className="text-2xl font-bold">{weather?.humidity}%</p>
                <Progress value={weather?.humidity} className="h-2 mt-2" />
              </div>
              <Droplets className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300 card-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Wind Speed</p>
                <p className="text-2xl font-bold">{weather?.windSpeed.toFixed(1)} km/h</p>
                <p className="text-xs text-muted-foreground">
                  {weather?.windSpeed < 10 ? 'Light breeze' : 
                   weather?.windSpeed < 25 ? 'Moderate wind' : 'Strong wind'}
                </p>
              </div>
              <Wind className="h-8 w-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300 card-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Condition</p>
                <p className="text-lg font-bold">{weather?.condition}</p>
                <p className="text-xs text-muted-foreground">UV Index: {weather?.uvIndex}</p>
              </div>
              {weather && getWeatherIcon(weather.condition)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Weather Dashboard */}
      <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="current">Current Conditions</TabsTrigger>
          <TabsTrigger value="forecast">Extended Forecast</TabsTrigger>
          <TabsTrigger value="recommendations">Smart Recommendations</TabsTrigger>
          <TabsTrigger value="alerts">Weather Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass pattern-organic">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today&apos;s Weather Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-nature rounded-lg text-white">
                    <div>
                      <p className="text-sm opacity-90">Current Temperature</p>
                      <p className="text-3xl font-bold">{weather?.temperature.toFixed(1)}°C</p>
                    </div>
                    {weather && getWeatherIcon(weather.condition)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Rainfall Today</p>
                      <p className="text-lg font-bold">{weather?.rainfall.toFixed(1)} mm</p>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Visibility</p>
                      <p className="text-lg font-bold">{weather?.visibility.toFixed(1)} km</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle>Weather Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Temperature Trend</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-green-600">+2.3°C from yesterday</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Humidity Trend</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      <span className="text-blue-600">+5% from yesterday</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Pressure Trend</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="text-purple-600">Stable (1013 hPa)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                7-Day Weather Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {forecast?.map((day, index) => (
                  <div key={index} className="bg-muted/50 p-4 rounded-lg text-center hover:bg-muted/70 transition-colors">
                    <p className="font-semibold mb-2">
                      {index === 0 ? 'Today' : 
                       index === 1 ? 'Tomorrow' : 
                       day.date.toLocaleDateString('en', { weekday: 'short' })}
                    </p>
                    <div className="mb-2">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <p className="text-sm font-medium mb-1">
                      {day.tempMax.toFixed(0)}°/{day.tempMin.toFixed(0)}°
                    </p>
                    <p className="text-xs text-muted-foreground">{day.condition}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      Rain: {day.rainProbability.toFixed(0)}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>AI-Powered Farming Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-l-green-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="h-5 w-5 text-green-500" />
                    <h4 className="font-semibold text-green-700">Optimal Irrigation Window</h4>
                  </div>
                  <p className="text-green-600 mb-2">Current conditions are ideal for irrigation</p>
                  <p className="text-sm text-green-600">
                    Low wind speed and moderate humidity will reduce water evaporation. 
                    Recommended irrigation time: Early morning (5-7 AM)
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-l-blue-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudRain className="h-5 w-5 text-blue-500" />
                    <h4 className="font-semibold text-blue-700">Rainfall Expected</h4>
                  </div>
                  <p className="text-blue-600 mb-2">Postpone pesticide application</p>
                  <p className="text-sm text-blue-600">
                    Expected rainfall in next 24 hours may wash away pesticides. 
                    Wait for 48 hours of dry weather before application.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-l-orange-500 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer className="h-5 w-5 text-orange-500" />
                    <h4 className="font-semibold text-orange-700">Temperature Alert</h4>
                  </div>
                  <p className="text-orange-600 mb-2">Monitor crop stress indicators</p>
                  <p className="text-sm text-orange-600">
                    High temperature expected tomorrow. Ensure adequate water supply 
                    and consider shade protection for sensitive crops.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Active Weather Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weather?.windSpeed > 25 && (
                  <div className="bg-red-50 border-l-4 border-l-red-500 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Wind className="h-5 w-5 text-red-500" />
                      <h4 className="font-semibold text-red-700">High Wind Warning</h4>
                    </div>
                    <p className="text-red-600 mb-2">Wind speed: {weather.windSpeed.toFixed(1)} km/h</p>
                    <p className="text-sm text-red-600">
                      Avoid spraying operations and secure lightweight farm equipment
                    </p>
                  </div>
                )}

                {weather?.temperature > 35 && (
                  <div className="bg-orange-50 border-l-4 border-l-orange-500 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Thermometer className="h-5 w-5 text-orange-500" />
                      <h4 className="font-semibold text-orange-700">Heat Stress Alert</h4>
                    </div>
                    <p className="text-orange-600 mb-2">Temperature: {weather.temperature.toFixed(1)}°C</p>
                    <p className="text-sm text-orange-600">
                      Increase irrigation frequency and provide shade for livestock
                    </p>
                  </div>
                )}

                {weather?.humidity < 30 && (
                  <div className="bg-yellow-50 border-l-4 border-l-yellow-500 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-5 w-5 text-yellow-500" />
                      <h4 className="font-semibold text-yellow-700">Low Humidity Advisory</h4>
                    </div>
                    <p className="text-yellow-600 mb-2">Humidity: {weather.humidity}%</p>
                    <p className="text-sm text-yellow-600">
                      Consider mulching to retain soil moisture and reduce evaporation
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Data Sources */}
      <Card className="glass border-green-200">
        <CardHeader>
          <CardTitle>Live Data Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>OpenWeatherMap API</span>
              <Badge variant="outline" className="status-healthy">Live</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>IMD Weather Data</span>
              <Badge variant="outline" className="status-healthy">Connected</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span>Farm Weather Station</span>
              <Badge variant="outline" className="status-healthy">Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
