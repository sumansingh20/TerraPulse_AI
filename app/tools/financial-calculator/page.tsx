import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calculator, Play, Download } from "lucide-react"

export default function FinancialCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              Financial Planning Tool
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mr-4">
                <Calculator className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Financial Calculator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive financial planning and loan calculation tool for smart agricultural investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Play className="mr-2 h-4 w-4" />
                Start Calculating
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
                <CardTitle>Loan Calculators</CardTitle>
                <CardDescription>Calculate loan EMIs and interest for agricultural loans</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
                <CardDescription>Analyze return on investment for farming projects</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Budget Planning</CardTitle>
                <CardDescription>Create detailed budgets for crop seasons</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plan Your Financial Success
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-4 w-4" />
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Download className="mr-2 h-4 w-4" />
              Get Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
