import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TrendingUp, Play, Download } from "lucide-react"

export default function MarketPredictorAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
              🚀 AI Market Intelligence
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 mr-4">
                <TrendingUp className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Market Predictor AI
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered market analysis and price prediction for optimal selling decisions with 90% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Play className="mr-2 h-4 w-4" />
                Start Predicting
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">15</div>
                <div className="text-sm text-muted-foreground">Day Forecast</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">Real-time</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Markets</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Price Trend Analysis</CardTitle>
                <CardDescription>Advanced AI algorithms analyze market patterns and price movements</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Sell Timing Alerts</CardTitle>
                <CardDescription>Get notifications for optimal selling opportunities</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Export Opportunities</CardTitle>
                <CardDescription>Identify international market opportunities and pricing</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Predict Market Trends with AI
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <TrendingUp className="mr-2 h-4 w-4" />
              Start Analysis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Market Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
