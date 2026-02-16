import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Eye, Play, Download } from "lucide-react"

export default function VisionAIScannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              🔥 Revolutionary AI Vision
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mr-4">
                <Eye className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Vision AI Scanner
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced computer vision for instant disease detection and crop analysis using your smartphone camera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <Play className="mr-2 h-4 w-4" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">96%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Diseases</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">Instant</div>
                <div className="text-sm text-muted-foreground">Results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">Offline</div>
                <div className="text-sm text-muted-foreground">Processing</div>
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
                <CardTitle>Instant Photo Analysis</CardTitle>
                <CardDescription>Take a photo and get instant disease identification</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Treatment Suggestions</CardTitle>
                <CardDescription>Get personalized treatment recommendations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Offline Processing</CardTitle>
                <CardDescription>Works even without internet connectivity</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Detect Crop Issues Instantly
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Eye className="mr-2 h-4 w-4" />
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Download className="mr-2 h-4 w-4" />
              User Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
