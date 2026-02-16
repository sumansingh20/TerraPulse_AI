import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CreditCard, Play, Download } from "lucide-react"

export default function LoanProcessingHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
              NABARD Banking Solution
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 mr-4">
                <CreditCard className="h-12 w-12 text-amber-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Loan Processing Hub
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Streamlined loan application and processing system designed specifically for NABARD operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                <Play className="mr-2 h-4 w-4" />
                Start Application
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardTitle className="text-lg mb-2">Digital Applications</CardTitle>
              <CardDescription>Online loan application process</CardDescription>
            </Card>
            <Card className="text-center p-6">
              <CardTitle className="text-lg mb-2">Document Verification</CardTitle>
              <CardDescription>Automated document processing</CardDescription>
            </Card>
            <Card className="text-center p-6">
              <CardTitle className="text-lg mb-2">Credit Scoring</CardTitle>
              <CardDescription>AI-powered credit assessment</CardDescription>
            </Card>
            <Card className="text-center p-6">
              <CardTitle className="text-lg mb-2">Approval Workflows</CardTitle>
              <CardDescription>Streamlined approval process</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline Your Loan Processing
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <CreditCard className="mr-2 h-4 w-4" />
              Access Portal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              <Download className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
