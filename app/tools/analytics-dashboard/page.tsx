import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  BarChart3,
  LineChart,
  Download,
  Play,
  FileText,
} from "lucide-react"

export default function AnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Professional Analytics Platform
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 mr-4">
                <BarChart3 className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive data visualization and reporting platform for data-driven agricultural decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Play className="mr-2 h-4 w-4" />
                Explore Dashboard
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Analytics Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Custom Dashboards</CardTitle>
                <CardDescription>Create personalized dashboards with drag-and-drop widgets</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 w-fit mb-4">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Interactive Charts</CardTitle>
                <CardDescription>Dynamic charts with real-time data updates and drill-down capabilities</CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 w-fit mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Export Reports</CardTitle>
                <CardDescription>Generate professional reports in PDF, Excel, and PowerPoint formats</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Analyzing Your Data Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Download Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
