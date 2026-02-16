import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"

export default function PrivacyPage() {
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
          
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Privacy & Security
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Your privacy is important to us. This policy explains how TerraPulse AI collects, 
            uses, and protects your personal information.
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

      {/* Privacy Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
              <p className="text-sm text-muted-foreground">
                Bank-grade security measures to protect your agricultural data
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
              <p className="text-sm text-muted-foreground">
                Encrypted data storage with restricted access controls
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <UserCheck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">User Control</h3>
              <p className="text-sm text-muted-foreground">
                Full control over your data with easy opt-out options
              </p>
            </Card>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Personal Information</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Name, email address, and contact information</li>
                    <li>Farm location and agricultural details</li>
                    <li>Financial information for loan applications</li>
                    <li>Government identification for NABARD services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Agricultural Data</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Crop health and yield information</li>
                    <li>Satellite imagery and field monitoring data</li>
                    <li>Weather patterns and environmental conditions</li>
                    <li>IoT sensor data from connected devices</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technical Information</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Device information and IP addresses</li>
                    <li>Usage patterns and app interactions</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location data for precision agriculture</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Primary Services</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Provide AI-powered agricultural insights and recommendations</li>
                    <li>Monitor crop health and predict optimal harvest timing</li>
                    <li>Process loan applications and financial services through NABARD</li>
                    <li>Send weather alerts and critical farming notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Service Improvement</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Enhance AI models and prediction accuracy</li>
                    <li>Develop new features based on usage patterns</li>
                    <li>Conduct research for agricultural innovation</li>
                    <li>Improve user experience and interface design</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Communication</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Send important service updates and notifications</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Share relevant agricultural news and insights</li>
                    <li>Send promotional content (with your consent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-600" />
                  Data Security & Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Security Measures</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      <li>End-to-end encryption for all data transmission</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Multi-factor authentication for user accounts</li>
                      <li>Secure cloud infrastructure with backup systems</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Access Controls</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                      <li>Role-based access for different user types</li>
                      <li>Regular access reviews and permission updates</li>
                      <li>Secure API endpoints with authentication</li>
                      <li>Employee training on data protection protocols</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-amber-600" />
                  Your Rights & Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Access & Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        Request access to your personal data and receive it in a portable format
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Correction & Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Update or correct your personal information at any time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Deletion & Opt-out</h4>
                      <p className="text-sm text-muted-foreground">
                        Request deletion of your data or opt-out of specific services
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Communication Preferences</h4>
                      <p className="text-sm text-muted-foreground">
                        Control what communications you receive from us
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                  Data Sharing & Third Parties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Authorized Sharing</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>NABARD and authorized financial institutions for loan processing</li>
                    <li>Government agencies for agricultural scheme applications</li>
                    <li>Weather service providers for accurate forecasting</li>
                    <li>Certified agricultural experts for consultation services</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Service Providers</h4>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Cloud hosting providers (AWS, Google Cloud) with strict data agreements</li>
                    <li>Analytics providers for service improvement (anonymized data only)</li>
                    <li>Payment processors for subscription and transaction handling</li>
                    <li>Customer support tools for providing technical assistance</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Important Note</h4>
                  <p className="text-sm text-amber-700">
                    We never sell your personal data to third parties. All sharing is done with your 
                    explicit consent or as required by law for the services you've requested.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or your data rights, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@terrapulse.ai</p>
                  <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                  <p><strong>Address:</strong> TerraPulse AI Privacy Office, [Your Address]</p>
                </div>
                
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Contact Privacy Team
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
