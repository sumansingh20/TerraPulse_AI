"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  Tractor,
  Warehouse,
  Users,
  Target,
  TrendingUp,
  FileText,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  IndianRupee,
  Percent,
  Calendar,
  CheckCircle,
  Building,
  Sprout,
  Droplets,
  Sun,
} from "lucide-react"
import { useAdvancedThemeSafe } from "@/components/advanced-theme-provider"
import { ClientOnly } from "@/components/client-only"

const schemes = [
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC)",
    category: "Credit Support",
    description: "Government of India's flagship credit scheme providing timely and adequate credit to farmers for crop cultivation, post-harvest expenses, produce marketing loan and consumption requirements",
    amount: "Scale of Finance based: Field Crops ₹50,000/hectare, Horticulture ₹1,25,000/hectare",
    interestRate: "7.0% (Effective 1% with Government Interest Subvention)",
    tenure: "5 years (Renewable)",
    disbursed: "₹8,75,000 crore (FY 2023-24)",
    beneficiaries: "7.35 crore active farmers",
    status: "Active",
    features: [
      "3% Interest Subvention from Government of India",
      "Additional 3% prompt repayment incentive",
      "No collateral security up to ₹1.60 lakh",
      "Built-in Personal Accident Insurance (PAIS)",
      "RuPay Kisan Card with ATM/POS facility",
      "One-time documentation with revolving facility"
    ],
    eligibility: [
      "All farmers (individual/joint) owning cultivable land",
      "Tenant farmers, oral lessees & sharecroppers",
      "SHG/JLG members engaged in agriculture/allied activities",
      "Age: 18-75 years for new farmers"
    ],
    documents: [
      "Identity Proof: Aadhaar Card/Voter ID/Passport",
      "Address Proof: Aadhaar/Utility Bills",
      "Land ownership proof/tenancy documents",
      "Crop cultivation details (Patta/Pahani)",
      "Recent passport size photographs"
    ],
    applicationProcess: [
      "Visit nearest Commercial Bank/RRB/Cooperative Bank",
      "Submit duly filled KCC application form",
      "Provide KYC documents and land records",
      "Bank conducts field verification",
      "Sanction by competent authority",
      "KCC issued with credit limit"
    ],
  },
  {
    id: "fmsp",
    name: "Farm Mechanization Sub-Mission (SMAM)",
    category: "Infrastructure", 
    description: "Sub-Mission on Agricultural Mechanization under NMAE&T to promote farm mechanization and reduce drudgery in farming operations across India",
    amount: "40-50% subsidy (Max ₹1.25 lakh individual, ₹40 lakh CHCs)",
    interestRate: "NABARD refinance at 4.5% per annum",
    tenure: "5-7 years for machinery term loans",
    disbursed: "₹2,847 crore (FY 2023-24)",
    beneficiaries: "4.25 lakh farmers",
    status: "Active",
    features: [
      "40-50% subsidy on tractors & farm equipment",
      "Custom Hiring Centers with 40% financial assistance",
      "Farm Machinery Banks for SHGs/FPOs",
      "High-tech & Hi-tech machinery hubs",
      "Performance based incentive @3% of subsidy",
      "Training & demonstration programs"
    ],
    eligibility: [
      "Individual farmers with valid land records",
      "Groups of farmers, SHGs, cooperatives",
      "Registered FPOs and cooperative societies", 
      "State machinery corporations",
      "CHC entrepreneurs with business plan"
    ],
    documents: [
      "Detailed project report for CHC/Machinery Bank",
      "Registration certificate for institutions",
      "Land ownership/lease documents",
      "Bank account details with KYC",
      "Price quotations from authorized dealers",
      "Valid driving license for operators"
    ],
    applicationProcess: [
      "Online application through DBT Agriculture Portal",
      "Selection through district level committee",
      "Technical approval from state nodal department",
      "Subsidy disbursement after verification",
      "Post-implementation monitoring",
      "Performance assessment for incentives"
    ],
  },
  {
    id: "wshc",
    name: "Rural Infrastructure Development Fund (RIDF)",
    category: "Storage",
    description: "NABARD's flagship scheme for creation of rural infrastructure including warehouses, cold storages, pack houses, markets and agricultural processing units to reduce post-harvest losses",
    amount: "₹40,000 crore corpus (Projects up to ₹25 crore each)",
    interestRate: "5.5% per annum for State Governments",
    tenure: "10-15 years for infrastructure projects",
    disbursed: "₹35,621 crore (RIDF-XXIX 2023-24)",
    beneficiaries: "5.2 crore farmers across rural India",
    status: "Active",
    features: [
      "100% refinance to State Governments",
      "Scientific storage with controlled atmosphere",
      "Cold chain infrastructure development",
      "Market infrastructure and rural connectivity",
      "Processing units and value addition facilities",
      "Quality assurance and grading systems"
    ],
    eligibility: [
      "State Governments and Union Territories",
      "Farmer Producer Organizations (FPOs)",
      "Cooperative societies and federations",
      "Self Help Group federations",
      "Private entrepreneurs through state agencies"
    ],
    documents: [
      "Detailed Project Report (DPR) with feasibility study",
      "State Government recommendation and guarantee",
      "Land ownership/allotment documents",
      "Environmental and forest clearances",
      "Technical specifications and cost estimates",
      "Implementation timeline and monitoring plan"
    ],
    applicationProcess: [
      "Submit detailed project proposal",
      "Technical appraisal",
      "Financial evaluation",
      "Sanction and disbursement",
      "Monitoring and evaluation",
    ],
  },
  {
    id: "shg",
    name: "Self Help Group Development",
    category: "Social Impact",
    description: "Capacity building and financial support for women SHGs in rural areas",
    amount: "Up to ₹20,00,000",
    interestRate: "6.5%",
    tenure: "3 years",
    disbursed: "₹3.1 billion",
    beneficiaries: "125,000",
    status: "Active",
    features: [
      "Women empowerment focus",
      "Skill development training",
      "Micro-enterprise support",
      "Digital literacy programs",
      "Market access facilitation",
    ],
    eligibility: [
      "Registered SHGs",
      "Women-centric groups",
      "Rural location",
      "Active for minimum 6 months",
    ],
    documents: [
      "SHG registration certificate",
      "Member list with KYC",
      "Meeting minutes and records",
      "Bank account details",
      "Activity proposals",
    ],
    applicationProcess: [
      "Group formation and registration",
      "Capacity building training",
      "Grading and assessment",
      "Credit linkage approval",
      "Ongoing monitoring",
    ],
  },
]

const schemeCategories = [
  { id: "all", name: "All Schemes", count: schemes.length },
  { id: "Credit Support", name: "Credit Support", count: schemes.filter(s => s.category === "Credit Support").length },
  { id: "Infrastructure", name: "Infrastructure", count: schemes.filter(s => s.category === "Infrastructure").length },
  { id: "Storage", name: "Storage", count: schemes.filter(s => s.category === "Storage").length },
  { id: "Social Impact", name: "Social Impact", count: schemes.filter(s => s.category === "Social Impact").length },
]

const impactMetrics = [
  { label: "Total Disbursement", value: "₹11.7 billion", growth: "+15.2%", icon: IndianRupee },
  { label: "Active Beneficiaries", value: "260,500", growth: "+12.8%", icon: Users },
  { label: "Average Interest Rate", value: "7.75%", growth: "-0.5%", icon: Percent },
  { label: "Recovery Rate", value: "94.3%", growth: "+2.1%", icon: TrendingUp },
]

export default function SchemesPage() {
  const { theme } = useAdvancedThemeSafe()
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedScheme, setSelectedScheme] = React.useState<string | null>(null)

  const filteredSchemes = selectedCategory === "all" 
    ? schemes 
    : schemes.filter(scheme => scheme.category === selectedCategory)

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Header */}
        <div className="border-b glass">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">NABARD Credit Schemes</h1>
                <p className="text-muted-foreground text-lg">
                  Comprehensive financial support for agricultural development
                </p>
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {schemes.length} Active Schemes
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant={metric.growth.startsWith('+') ? 'default' : 'secondary'} className="text-xs">
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

          {/* Scheme Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {schemeCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Schemes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {scheme.category}
                    </Badge>
                    <Badge 
                      variant={scheme.status === 'Active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {scheme.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{scheme.name}</CardTitle>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Max Amount</div>
                        <div className="font-semibold text-primary">{scheme.amount}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Interest Rate</div>
                        <div className="font-semibold">{scheme.interestRate}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Tenure</div>
                        <div className="font-semibold">{scheme.tenure}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Beneficiaries</div>
                        <div className="font-semibold">{scheme.beneficiaries}</div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Disbursed</span>
                        <span className="font-semibold">{scheme.disbursed}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => setSelectedScheme(scheme.id)}
                      >
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Scheme View */}
          {selectedScheme && (
            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {schemes.find(s => s.id === selectedScheme)?.name} - Detailed Information
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedScheme(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {(() => {
                  const scheme = schemes.find(s => s.id === selectedScheme)
                  if (!scheme) return null

                  return (
                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="process">Process</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="features" className="mt-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                          {scheme.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="eligibility" className="mt-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg mb-4">Eligibility Criteria</h3>
                          {scheme.eligibility.map((criteria, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span>{criteria}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="documents" className="mt-6">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-lg mb-4">Required Documents</h3>
                          {scheme.documents.map((doc, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <FileText className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="process" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg mb-4">Application Process</h3>
                          {scheme.applicationProcess.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                                {index + 1}
                              </div>
                              <div className="pt-1">{step}</div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  )
                })()}
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="mt-8 text-center">
            <CardContent className="p-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Scheme?</h2>
                <p className="text-muted-foreground mb-6">
                  Our agricultural finance experts are here to help you find the most suitable scheme 
                  for your farming needs and business requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Consultation
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ClientOnly>
  )
}
