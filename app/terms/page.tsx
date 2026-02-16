import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Users,
  CreditCard,
  Shield,
  Clock,
  ArrowLeft,
  ExternalLink,
} from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            Legal Terms
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Please read these terms carefully before using TerraPulse AI services. 
            By using our platform, you agree to these terms and conditions.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              Last updated: September 6, 2025
            </div>
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              Effective Date: September 1, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Terms Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <Scale className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fair Usage</h3>
              <p className="text-sm text-muted-foreground">
                Clear guidelines for responsible use of our services
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Protection</h3>
              <p className="text-sm text-muted-foreground">
                Your rights and protections when using our platform
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Payment Terms</h3>
              <p className="text-sm text-muted-foreground">
                Transparent pricing and billing information
              </p>
            </Card>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using TerraPulse AI services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Agreement Scope</h4>
                  <p className="text-sm text-blue-700">
                    These terms apply to all users of TerraPulse AI, including farmers, agricultural professionals, 
                    NABARD officials, and other stakeholders using our platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  User Accounts & Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>You are responsible for all activities under your account</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User Conduct</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Use services only for lawful agricultural purposes</li>
                    <li>Do not share false or misleading information</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not attempt to reverse engineer our software</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Using the service for any illegal activities</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Distributing malware or harmful code</li>
                    <li>Interfering with other users' access to the service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                  Pricing & Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Subscription Plans</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Free tier available with basic features</li>
                    <li>Premium plans with advanced AI analytics</li>
                    <li>Enterprise solutions for large agricultural operations</li>
                    <li>Special pricing for NABARD-supported farmers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Payment Processing</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Payments processed securely through authorized providers</li>
                    <li>Automatic renewal for subscription plans</li>
                    <li>30-day notice for any price changes</li>
                    <li>Refund policy available for unsatisfied users</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Cancel subscription at any time from your account</li>
                    <li>Access continues until the end of billing period</li>
                    <li>Data export available for 30 days after cancellation</li>
                    <li>No cancellation fees or penalties</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-600" />
                  Service Availability & Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Level</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>99.9% uptime target for core services</li>
                    <li>Regular maintenance windows with advance notice</li>
                    <li>24/7 monitoring and support systems</li>
                    <li>Disaster recovery and data backup systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Data Accuracy</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>AI predictions are estimates based on available data</li>
                    <li>Weather data sourced from certified meteorological services</li>
                    <li>Satellite imagery updated regularly but may have delays</li>
                    <li>Users should verify critical information independently</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-amber-700">
                    TerraPulse AI provides agricultural insights and recommendations, but final farming decisions 
                    remain the responsibility of the user. We recommend consulting with agricultural experts for critical decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-red-600" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">TerraPulse AI Property</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>All software, algorithms, and AI models are proprietary to TerraPulse AI</li>
                    <li>User interfaces and design elements are protected by copyright</li>
                    <li>TerraPulse AI trademark and branding rights are reserved</li>
                    <li>Documentation and educational content are copyrighted materials</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">User Data Rights</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>You retain ownership of your agricultural data</li>
                    <li>We may use anonymized data to improve our services</li>
                    <li>User-generated content remains your intellectual property</li>
                    <li>We respect traditional knowledge and farming practices</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Liability Limitations</h4>
                  <p className="text-sm text-red-700 mb-2">
                    TerraPulse AI shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages resulting from your use of the service.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
                    <li>Crop losses due to weather conditions</li>
                    <li>Financial losses from loan application decisions</li>
                    <li>Equipment damage from following recommendations</li>
                    <li>Data loss due to user error or device failure</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Maximum Liability</h4>
                  <p className="text-muted-foreground text-sm">
                    Our total liability for any claims related to the service shall not exceed the amount 
                    you paid for the service during the 12 months preceding the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Questions About Terms</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      If you have questions about these terms, please contact our legal team:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> legal@terrapulse.ai</p>
                      <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                      <p><strong>Address:</strong> TerraPulse AI Legal Department, [Your Address]</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                    <p className="text-muted-foreground text-sm">
                      Any disputes will be resolved through binding arbitration in accordance with 
                      Indian law, with proceedings conducted in [Your City].
                    </p>
                  </div>
                  
                  <div className="mt-6 flex gap-4">
                    <Button asChild>
                      <Link href="/contact">
                        Contact Legal Team
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/privacy">
                        Privacy Policy <ExternalLink className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
