"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  FileText,
  Shield,
  Users,
  Target,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Globe,
  Award,
  BarChart3,
  Calendar,
  IndianRupee,
} from "lucide-react"
import { ClientOnly } from "@/components/client-only"

const governmentServices = [
  {
    id: "policy-advisory",
    title: "Policy Advisory Services",
    department: "Policy & Strategy",
    description: "Expert advisory services for agricultural policy formulation and implementation",
    status: "Active",
    beneficiaries: "State Governments",
    coverage: "All India",
    launched: "2018",
    features: [
      "Agricultural Policy Framework Development",
      "State-specific Strategy Formulation", 
      "Implementation Monitoring",
      "Impact Assessment Studies",
      "Best Practices Documentation",
    ],
    metrics: {
      policies: 45,
      states: 28,
      implementation: "92%",
      satisfaction: "4.8/5",
    },
  },
  {
    id: "rural-infrastructure",
    title: "Rural Infrastructure Development",
    department: "Infrastructure Finance",
    description: "Comprehensive funding and technical support for rural infrastructure projects",
    status: "Active",
    beneficiaries: "Rural Communities",
    coverage: "Pan India",
    launched: "2015",
    features: [
      "Road Connectivity Projects",
      "Water Supply Systems",
      "Digital Infrastructure",
      "Storage Facilities",
      "Market Infrastructure",
    ],
    metrics: {
      projects: 1250,
      investment: "₹15,240 Cr",
      completion: "89%",
      impact: "4.6M people",
    },
  },
  {
    id: "financial-inclusion",
    title: "Financial Inclusion Programs",
    department: "Microfinance",
    description: "Expanding access to financial services in underserved rural areas",
    status: "Active", 
    beneficiaries: "Rural Population",
    coverage: "Priority Districts",
    launched: "2020",
    features: [
      "Banking Correspondent Model",
      "Digital Payment Solutions",
      "Financial Literacy Programs",
      "Insurance Penetration",
      "Credit Facilitation",
    ],
    metrics: {
      accounts: "2.8M",
      districts: 185,
      penetration: "78%",
      growth: "+15% YoY",
    },
  },
  {
    id: "capacity-building",
    title: "Institutional Capacity Building",
    department: "HRD & Training",
    description: "Strengthening rural institutions and human resource development",
    status: "Active",
    beneficiaries: "Institutions & Personnel",
    coverage: "National",
    launched: "2016",
    features: [
      "Leadership Development Programs",
      "Technical Skill Enhancement",
      "Digital Transformation Support",
      "Performance Management Systems",
      "Knowledge Management Platforms",
    ],
    metrics: {
      institutions: 850,
      trained: "45,000+",
      programs: 125,
      rating: "4.7/5",
    },
  },
]

const departments = [
  {
    name: "Policy & Strategy",
    head: "Dr. Rajesh Kumar",
    contact: "policy@nabard.org",
    phone: "+91-22-2653-9895",
    services: 12,
    staff: 45,
  },
  {
    name: "Infrastructure Finance", 
    head: "Ms. Priya Sharma",
    contact: "infra@nabard.org",
    phone: "+91-22-2653-9896",
    services: 8,
    staff: 62,
  },
  {
    name: "Microfinance",
    head: "Mr. Suresh Patel",
    contact: "microfinance@nabard.org", 
    phone: "+91-22-2653-9897",
    services: 15,
    staff: 78,
  },
  {
    name: "HRD & Training",
    head: "Dr. Anjali Verma",
    contact: "training@nabard.org",
    phone: "+91-22-2653-9898", 
    services: 20,
    staff: 55,
  },
]

const recentUpdates = [
  {
    title: "New Rural Infrastructure Guidelines Released",
    date: "2025-08-30",
    type: "Policy Update",
    summary: "Enhanced guidelines for rural road and connectivity projects with increased funding support.",
  },
  {
    title: "Digital Payment Adoption Reaches 78%",
    date: "2025-08-25", 
    type: "Achievement",
    summary: "Financial inclusion programs achieve significant milestone in digital payment adoption.",
  },
  {
    title: "Capacity Building Program Extension",
    date: "2025-08-20",
    type: "Program Update", 
    summary: "Leadership development programs extended to 50 additional districts based on success metrics.",
  },
]

const performanceMetrics = [
  { label: "Total Investment", value: "₹25,480 Cr", growth: "+12.5%", icon: IndianRupee },
  { label: "Active Projects", value: "2,150", growth: "+8.2%", icon: Target },
  { label: "Beneficiaries Reached", value: "6.8M", growth: "+18.7%", icon: Users },
  { label: "Success Rate", value: "91.2%", growth: "+2.1%", icon: Award },
]

export default function GovernmentServicesPage() {
  const [selectedService, setSelectedService] = React.useState<string | null>(null)
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Header */}
        <div className="border-b glass">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Government Services</h1>
                <p className="text-muted-foreground text-lg">
                  Comprehensive support services for government institutions and rural development
                </p>
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {governmentServices.length} Active Services
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={`metric-${index}`} className="p-6 glass">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="default" className="text-xs">
                      {metric.growth}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Services List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-4">Core Services</h2>
              {governmentServices.map((service) => (
                <Card key={service.id} className="glass">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {service.department}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {service.coverage}
                        </Badge>
                        <Badge variant="default" className="text-xs">
                          {service.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Since {service.launched}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Service Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <div className="text-muted-foreground">Target Beneficiaries</div>
                          <div className="font-semibold">{service.beneficiaries}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-muted-foreground">Coverage Area</div>
                          <div className="font-semibold">{service.coverage}</div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <div className="grid grid-cols-1 gap-1 text-sm">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={`feature-${featureIndex}`} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        {service.features.length > 3 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 p-0 h-auto text-xs"
                            onClick={() => setSelectedService(service.id)}
                          >
                            +{service.features.length - 3} more features
                          </Button>
                        )}
                      </div>

                      {/* Service Metrics */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-3 bg-muted/20 rounded-lg">
                        {Object.entries(service.metrics).map(([key, value], metricIndex) => (
                          <div key={`service-metric-${metricIndex}`} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedService(service.id)}
                        >
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 group">
                          Access Service
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Department Contacts */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Department Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, deptIndex) => (
                      <div key={`dept-${deptIndex}`} className="border-l-2 border-primary pl-4 space-y-1">
                        <div className="font-semibold text-sm">{dept.name}</div>
                        <div className="text-xs text-muted-foreground">{dept.head}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {dept.contact}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {dept.phone}
                          </span>
                        </div>
                        <div className="flex gap-4 text-xs">
                          <Badge variant="outline" className="text-xs">
                            {dept.services} Services
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {dept.staff} Staff
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Recent Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUpdates.map((update, updateIndex) => (
                      <div key={`update-${updateIndex}`} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {update.type}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {new Date(update.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="font-semibold text-sm">{update.title}</div>
                        <div className="text-xs text-muted-foreground">{update.summary}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Service Application Forms
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Guidelines & Documents
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Performance Reports
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Globe className="h-4 w-4 mr-2" />
                      Online Portal Access
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Service View */}
          {selectedService && (
            <Card className="mt-8 glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {governmentServices.find(s => s.id === selectedService)?.title} - Detailed Information
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedService(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {(() => {
                  const service = governmentServices.find(s => s.id === selectedService)
                  if (!service) return null

                  return (
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="metrics">Performance</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="mt-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Service Overview</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Department</div>
                              <div className="font-semibold">{service.department}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Status</div>
                              <div className="font-semibold">{service.status}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Coverage</div>
                              <div className="font-semibold">{service.coverage}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Launched</div>
                              <div className="font-semibold">{service.launched}</div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="features" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Complete Feature List</h3>
                          <div className="grid gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={`detail-feature-${featureIndex}`} className="flex items-start gap-3 p-3 border rounded-lg">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium">{feature}</div>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    Comprehensive implementation with government support and monitoring
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="metrics" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Performance Metrics</h3>
                          <div className="grid lg:grid-cols-2 gap-6">
                            {Object.entries(service.metrics).map(([key, value], metricIndex) => (
                              <div key={`detail-metric-${metricIndex}`} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-blue-800 dark:text-blue-200 capitalize">{key}</div>
                                  <div className="text-lg font-bold text-blue-900 dark:text-blue-100">{value}</div>
                                  <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                                    Based on latest government reporting and assessment data
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )
                })()}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </ClientOnly>
  )
}
