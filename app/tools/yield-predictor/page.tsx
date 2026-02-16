import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { PieChart, Play, Download } from "lucide-react"

export default function YieldPredictorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              AI-Powered Yield Prediction
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mr-4">
                <PieChart className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Yield Predictor
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI-powered yield prediction and optimization tool for accurate harvest forecasting and planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Play className="mr-2 h-4 w-4" />
                Start Prediction
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Yield Forecasting</CardTitle>
                <CardDescription>Accurate predictions based on weather, soil, and crop data</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Risk Analysis</CardTitle>
                <CardDescription>Identify potential risks and mitigation strategies</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Optimization Tips</CardTitle>
                <CardDescription>Actionable recommendations to maximize yield</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Predict Your Harvest Success
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
