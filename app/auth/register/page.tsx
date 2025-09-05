"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Leaf,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Building,
  Tractor,
  MapPin,
  Phone,
  User,
} from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
    company: "",
    farmSize: "",
    location: "",
    crops: ""
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) {
      alert("Please agree to the terms and conditions")
      return
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate registration API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Registration data:", registerData)
      alert("Registration successful! Please check your email for verification.")
      
      // Redirect to login
      window.location.href = '/auth/login'
      
    } catch (error) {
      console.error("Registration error:", error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const roleOptions = [
    {
      value: "farmer",
      label: "Farmer/Farm Owner",
      description: "Individual farmers and farm owners",
      icon: Tractor,
    },
    {
      value: "company",
      label: "Company Representative",
      description: "Agricultural businesses and organizations",
      icon: Building,
    },
    {
      value: "admin",
      label: "System Administrator",
      description: "TerraPulse AI team members only",
      icon: Shield,
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-8">
      {/* Header */}
      <div className="border-b glass backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/auth/login" className="text-muted-foreground hover:text-primary transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 glass border-primary/30 text-primary px-6 py-2">
            <User className="mr-2 h-4 w-4" />
            Create Account
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Join
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TerraPulse AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create your account to start monitoring your agricultural operations with AI-powered insights
          </p>
        </div>

        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl">Registration Form</CardTitle>
            <CardDescription>Fill in your details to create your TerraPulse AI account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3">Account Type *</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {roleOptions.map((role) => {
                    const Icon = role.icon
                    return (
                      <div
                        key={role.value}
                        onClick={() => setRegisterData({...registerData, role: role.value})}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                          registerData.role === role.value
                            ? 'border-primary bg-primary/5'
                            : 'border-muted hover:border-primary/50'
                        }`}
                      >
                        <div className="text-center">
                          <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-semibold text-sm">{role.label}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{role.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name *</label>
                  <Input
                    placeholder="Enter your first name"
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name *</label>
                  <Input
                    placeholder="Enter your last name"
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Role-specific fields */}
              {registerData.role === "farmer" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Farm Size (Acres)</label>
                    <Input
                      type="number"
                      placeholder="e.g., 50"
                      value={registerData.farmSize}
                      onChange={(e) => setRegisterData({...registerData, farmSize: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Primary Crops</label>
                    <Input
                      placeholder="e.g., Rice, Wheat, Cotton"
                      value={registerData.crops}
                      onChange={(e) => setRegisterData({...registerData, crops: e.target.value})}
                    />
                  </div>
                </div>
              )}

              {registerData.role === "company" && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Company/Organization *</label>
                  <Input
                    placeholder="Enter company name"
                    value={registerData.company}
                    onChange={(e) => setRegisterData({...registerData, company: e.target.value})}
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="City, State, Country"
                    value={registerData.location}
                    onChange={(e) => setRegisterData({...registerData, location: e.target.value})}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Confirm Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !agreed}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg py-6 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary hover:text-primary/80 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
