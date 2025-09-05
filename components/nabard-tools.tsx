"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, FileText, Database, Smartphone, ArrowRight } from "lucide-react"

export function NABARDTools() {
  const [activeDemo, setActiveDemo] = useState("dashboard")

  return (
    <div className="space-y-12">
      {/* NABARD-Specific Tools */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group">
          <CardHeader>
            <FileText className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
            <CardTitle className="text-2xl">Automated Reporting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Generate comprehensive MRV reports automatically for NABARD compliance and carbon market requirements.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>NABARD format compliance</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Real-time data integration</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Automated scheduling</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group">
          <CardHeader>
            <Database className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
            <CardTitle className="text-2xl">Data Integration Hub</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Seamlessly integrate with existing NABARD systems and databases for unified data management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>API-first architecture</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Legacy system support</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Real-time synchronization</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group">
          <CardHeader>
            <Smartphone className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse" />
            <CardTitle className="text-2xl">Field Officer App</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Mobile application for NABARD field officers to verify farms and validate MRV data on-site.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Offline verification</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>GPS-based validation</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Photo documentation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Demo */}
      <Card className="glass border-primary/30 bg-gradient-to-br from-card to-card/50">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Interactive NABARD Tools Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
              <TabsTrigger value="reporting">Reporting</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-primary/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold">NABARD Regional Dashboard</h4>
                  <Badge variant="secondary">Live Demo</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">1,247</div>
                    <div className="text-sm text-muted-foreground">Active Farms</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-500">₹2.3Cr</div>
                    <div className="text-sm text-muted-foreground">Credits Generated</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-500">89%</div>
                    <div className="text-sm text-muted-foreground">Verification Rate</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-500">15</div>
                    <div className="text-sm text-muted-foreground">Districts</div>
                  </div>
                </div>
                <Button className="w-full">
                  View Full Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="verification" className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-primary/30">
                <h4 className="text-xl font-semibold mb-4">Blockchain Verification System</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                    <span>Farm ID: NABARD-2025-001247</span>
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      Verified
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                    <span>Carbon Credits: 2.3 tCO2e</span>
                    <Badge variant="outline" className="text-blue-500 border-blue-500">
                      Blockchain Confirmed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                    <span>Soil Health Score: 8.7/10</span>
                    <Badge variant="outline" className="text-orange-500 border-orange-500">
                      AI Validated
                    </Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reporting" className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-primary/30">
                <h4 className="text-xl font-semibold mb-4">Automated Report Generation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Monthly MRV Report</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprehensive monthly analysis for NABARD review
                    </p>
                    <Button size="sm" variant="outline">
                      Generate Report
                    </Button>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Carbon Market Summary</h5>
                    <p className="text-sm text-muted-foreground mb-3">Credit generation and market performance data</p>
                    <Button size="sm" variant="outline">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 border-2 border-dashed border-primary/30">
                <h4 className="text-xl font-semibold mb-4">AI-Powered Analytics</h4>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Fraud Detection Rate</span>
                      <span className="text-green-500 font-bold">99.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "99.2%" }}></div>
                    </div>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Data Accuracy</span>
                      <span className="text-blue-500 font-bold">97.8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "97.8%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
