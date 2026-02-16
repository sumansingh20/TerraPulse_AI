"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Target, Award, Zap, Brain, Leaf, Droplets } from "lucide-react"

export function AdvancedAnalytics() {
  const metrics = [
    {
      title: "Carbon Sequestration Rate",
      value: "2.3 tCO2/ha/year",
      progress: 78,
      trend: "+15%",
      icon: Leaf,
      color: "text-green-500",
    },
    {
      title: "Soil Organic Matter",
      value: "4.2%",
      progress: 84,
      trend: "+8%",
      icon: Target,
      color: "text-brown-500",
    },
    {
      title: "Water Use Efficiency",
      value: "1.8 kg/m³",
      progress: 92,
      trend: "+12%",
      icon: Droplets,
      color: "text-blue-500",
    },
    {
      title: "Biodiversity Index",
      value: "0.87",
      progress: 87,
      trend: "+5%",
      icon: Award,
      color: "text-purple-500",
    },
  ]

  const predictions = [
    {
      metric: "Yield Increase",
      prediction: "18-25%",
      confidence: 94,
      timeframe: "Next Season",
    },
    {
      metric: "Carbon Credits",
      prediction: "450-520",
      confidence: 89,
      timeframe: "This Year",
    },
    {
      metric: "Soil Health Score",
      prediction: "85-92",
      confidence: 96,
      timeframe: "6 Months",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card
              key={index}
              className="glass border-primary/30 hover:border-primary/60 transition-all duration-300 group"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <Icon className={`h-4 w-4 ${metric.color} group-hover:scale-110 transition-transform`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <Progress value={metric.progress} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <TrendingUp className="inline h-3 w-3 mr-1 text-green-500" />
                  {metric.trend} from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* AI Predictions */}
      <Card className="glass border-accent/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-accent" />
            AI-Powered Predictions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {predictions.map((pred, index) => (
              <div key={index} className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{pred.metric}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {pred.confidence}% confidence
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-accent mb-1">{pred.prediction}</div>
                <div className="text-xs text-muted-foreground">{pred.timeframe}</div>
                <Progress value={pred.confidence} className="mt-2 h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Insights */}
      <Card className="glass border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary animate-pulse" />
            Live AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
              <div className="h-2 w-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="font-medium text-foreground">Optimal Planting Detected</div>
                <div className="text-sm text-muted-foreground">
                  Current soil conditions are ideal for winter crop planting. Expected yield increase: 15-20%
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
              <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="font-medium text-foreground">Water Management Alert</div>
                <div className="text-sm text-muted-foreground">
                  Irrigation efficiency can be improved by 12% with adjusted timing
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-500/5 rounded-lg border border-purple-500/20">
              <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
              <div>
                <div className="font-medium text-foreground">Carbon Credit Opportunity</div>
                <div className="text-sm text-muted-foreground">
                  Additional 45 credits available through enhanced composting practices
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
