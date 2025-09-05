"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Leaf,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Users,
  Shield,
  TrendingUp,
  BarChart3,
  Satellite,
  Brain,
  MapPin,
  Phone,
  Mail,
  Building,
  User
} from "lucide-react"
// import { Advanced3DCard, MetricCard, GlassCard } from "@/components/advanced-3d-card"
// import { useAdvancedThemeSafe } from "@/components/advanced-theme-provider"
import Link from "next/link"

export default function GetStarted() {
  // const { theme, enableGlassMorphism } = useAdvancedThemeSafe()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    organizationType: "",
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    farmSize: "",
    location: "",
    cropTypes: "",
    currentChallenges: "",
    goals: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const steps = [
    {
      id: 1,
      title: "Organization Type",
      description: "Tell us about your organization",
      icon: Building
    },
    {
      id: 2,
      title: "Contact Information",
      description: "Your details for account setup",
      icon: User
    },
    {
      id: 3,
      title: "Farm Details",
      description: "Information about your agricultural operations",
      icon: Leaf
    },
    {
      id: 4,
      title: "Goals & Requirements",
      description: "What you want to achieve with TerraPulse AI",
      icon: TrendingUp
    }
  ]

  const organizationTypes = [
    { value: "individual", label: "Individual Farmer", desc: "Small to medium scale farming operations" },
    { value: "cooperative", label: "Farmer Cooperative", desc: "Agricultural cooperatives and groups" },
    { value: "agribusiness", label: "Agribusiness", desc: "Commercial agricultural enterprises" },
    { value: "government", label: "Government Agency", desc: "Agricultural departments and agencies" },
    { value: "ngo", label: "NGO/Research", desc: "Non-profit and research organizations" },
    { value: "financial", label: "Financial Institution", desc: "Banks and credit institutions (NABARD)" }
  ]

  const features = [
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "Real-time crop monitoring using advanced satellite imagery and AI analysis",
      benefits: ["24/7 monitoring", "NDVI analysis", "Disease detection", "Yield prediction"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms for predictive agriculture and optimization",
      benefits: ["Predictive analytics", "Smart recommendations", "Risk assessment", "Decision support"]
    },
    {
      icon: TrendingUp,
      title: "Carbon Credit Verification",
      description: "Automated carbon sequestration tracking and credit generation",
      benefits: ["Carbon tracking", "Credit verification", "Revenue generation", "Compliance reporting"]
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and analytics for informed decision making",
      benefits: ["Real-time dashboards", "Custom reports", "Performance metrics", "Trend analysis"]
    }
  ]

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! Our team will contact you within 24 hours to set up your TerraPulse AI account.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary animate-float" />
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Start Your Agricultural
            <br />
            <span className="text-primary">Transformation Today</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of farmers and agricultural organizations using TerraPulse AI
            to optimize crop yields, reduce costs, and generate carbon credits.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Free 30-day trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                      currentStep >= step.id 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : 'border-muted-foreground text-muted-foreground'
                    }`}>
                      {currentStep > step.id ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 transition-all ${
                        currentStep > step.id ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{steps[currentStep - 1].title}</h3>
                <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
              </div>
            </div>

            {/* Step Content */}
            <div className="min-h-[400px]">
              {/* Step 1: Organization Type */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-medium">Select your organization type</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {organizationTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => handleInputChange('organizationType', type.value)}
                        className={`p-4 border rounded-lg text-left transition-all hover:border-primary ${
                          formData.organizationType === type.value 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border'
                        }`}
                      >
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-muted-foreground mt-1">{type.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-medium">Contact Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Enter organization name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Farm Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-medium">Agricultural Operations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size (in acres/hectares)</Label>
                      <Input
                        id="farmSize"
                        value={formData.farmSize}
                        onChange={(e) => handleInputChange('farmSize', e.target.value)}
                        placeholder="e.g., 100 acres"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location (State/Region)</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="e.g., Maharashtra, India"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="cropTypes">Primary Crop Types</Label>
                      <Input
                        id="cropTypes"
                        value={formData.cropTypes}
                        onChange={(e) => handleInputChange('cropTypes', e.target.value)}
                        placeholder="e.g., Rice, Wheat, Sugarcane, Cotton"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Goals & Requirements */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-medium">Your Goals & Requirements</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentChallenges">Current Agricultural Challenges</Label>
                      <Textarea
                        id="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                        placeholder="Describe your main challenges (e.g., pest management, yield optimization, water management)"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals">What do you want to achieve with TerraPulse AI?</Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => handleInputChange('goals', e.target.value)}
                        placeholder="Describe your goals (e.g., increase yield, reduce costs, generate carbon credits, improve sustainability)"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                Previous
              </Button>
              
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </div>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.organizationType) ||
                    (currentStep === 2 && (!formData.fullName || !formData.email || !formData.phone || !formData.organization))
                  }
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent"
                >
                  Complete Registration
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Support Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto glass">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                Need Help Getting Started?
              </CardTitle>
              <CardDescription>
                Our agricultural experts are here to help you maximize the benefits of TerraPulse AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-muted-foreground">+91 1800-123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-sm text-muted-foreground">support@terrapulse.ai</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Available Monday-Friday, 9 AM - 6 PM IST
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
