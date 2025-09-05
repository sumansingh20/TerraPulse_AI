"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Droplets, Thermometer, Wind, Leaf, BarChart3, Activity, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function RealTimeDashboard() {
  const [data, setData] = useState({
    soilHealth: 78,
    carbonCredits: 245,
    waterEfficiency: 85,
    biodiversityIndex: 92,
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => ({
        ...prev,
        soilHealth: Math.max(70, Math.min(95, prev.soilHealth + (Math.random() - 0.5) * 4)),
        carbonCredits: Math.max(200, Math.min(300, prev.carbonCredits + (Math.random() - 0.5) * 10)),
        waterEfficiency: Math.max(75, Math.min(95, prev.waterEfficiency + (Math.random() - 0.5) * 3)),
        biodiversityIndex: Math.max(85, Math.min(98, prev.biodiversityIndex + (Math.random() - 0.5) * 2)),
        temperature: Math.max(25, Math.min(35, prev.temperature + (Math.random() - 0.5) * 2)),
        humidity: Math.max(55, Math.min(75, prev.humidity + (Math.random() - 0.5) * 3)),
        windSpeed: Math.max(8, Math.min(18, prev.windSpeed + (Math.random() - 0.5) * 2)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="glass border-green-500/30 hover:border-green-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Soil Health Index</CardTitle>
          <Leaf className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">{data.soilHealth.toFixed(1)}%</div>
          <Progress value={data.soilHealth} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <TrendingUp className="inline h-3 w-3 mr-1" />
            +2.3% from last week
          </p>
        </CardContent>
      </Card>

      <Card className="glass border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Carbon Credits</CardTitle>
          <BarChart3 className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">{data.carbonCredits.toFixed(0)}</div>
          <p className="text-xs text-muted-foreground">
            <Badge variant="secondary" className="text-xs">
              +12 today
            </Badge>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <Activity className="inline h-3 w-3 mr-1" />
            Live monitoring active
          </p>
        </CardContent>
      </Card>

      <Card className="glass border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Water Efficiency</CardTitle>
          <Droplets className="h-4 w-4 text-cyan-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-cyan-500">{data.waterEfficiency.toFixed(1)}%</div>
          <Progress value={data.waterEfficiency} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <Zap className="inline h-3 w-3 mr-1" />
            Optimal irrigation detected
          </p>
        </CardContent>
      </Card>

      <Card className="glass border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Biodiversity Index</CardTitle>
          <Activity className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-500">{data.biodiversityIndex.toFixed(1)}%</div>
          <Progress value={data.biodiversityIndex} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            <TrendingUp className="inline h-3 w-3 mr-1" />
            Species diversity increasing
          </p>
        </CardContent>
      </Card>

      {/* Weather Data */}
      <Card className="glass border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-500">{data.temperature.toFixed(1)}°C</div>
          <p className="text-xs text-muted-foreground mt-2">Optimal for crop growth</p>
        </CardContent>
      </Card>

      <Card className="glass border-teal-500/30 hover:border-teal-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Humidity</CardTitle>
          <Droplets className="h-4 w-4 text-teal-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-teal-500">{data.humidity.toFixed(1)}%</div>
          <p className="text-xs text-muted-foreground mt-2">Ideal moisture levels</p>
        </CardContent>
      </Card>

      <Card className="glass border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
          <Wind className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-indigo-500">{data.windSpeed.toFixed(1)} km/h</div>
          <p className="text-xs text-muted-foreground mt-2">Gentle breeze detected</p>
        </CardContent>
      </Card>

      <Card className="glass border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">AI Insights</CardTitle>
          <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
        </CardHeader>
        <CardContent>
          <div className="text-sm font-bold text-emerald-500">Processing...</div>
          <p className="text-xs text-muted-foreground mt-2">
            <Badge variant="outline" className="text-xs">
              Live Analysis
            </Badge>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
