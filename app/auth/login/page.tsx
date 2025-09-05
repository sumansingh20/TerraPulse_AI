"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "farmer"
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, you would validate credentials and redirect
      console.log("Login attempt:", loginData)
      
      // Redirect based on role
      switch(loginData.role) {
        case 'admin':
          window.location.href = '/admin/dashboard'
          break
        case 'company':
          window.location.href = '/company/dashboard'
          break
        case 'farmer':
        default:
          window.location.href = '/farmer/dashboard'
          break
      }
      
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const roleOptions = [
    {
      value: "farmer",
      label: "Farmer",
      description: "Farm owners and agricultural professionals",
      icon: Tractor,
      color: "bg-green-500"
    },
    {
      value: "company",
      label: "Company Team",
      description: "TerraPulse AI team members",
      icon: Building,
      color: "bg-blue-500"
    },
    {
      value: "admin",
      label: "Administrator",
      description: "System administrators",
      icon: Shield,
      color: "bg-purple-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 border-b glass backdrop-blur-xl z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-20">
        <div className="text-center mb-8">
          <Badge className="mb-4 glass border-primary/30 text-primary px-6 py-2">
            <Shield className="mr-2 h-4 w-4" />
            Secure Login
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Welcome Back to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TerraPulse AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign in to access your personalized agricultural dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Role Selection */}
          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Select Your Role</CardTitle>
              <CardDescription>Choose your account type to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {roleOptions.map((role) => {
                const Icon = role.icon
                return (
                  <div
                    key={role.value}
                    onClick={() => setLoginData({...loginData, role: role.value})}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      loginData.role === role.value
                        ? 'border-primary bg-primary/5'
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{role.label}</h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                      {loginData.role === role.value && (
                        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Login Form */}
          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
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

                <div className="flex items-center justify-between text-sm">
                  <Link href="/auth/forgot-password" className="text-primary hover:text-primary/80 transition-colors">
                    Forgot password?
                  </Link>
                  <Link href="/auth/register" className="text-primary hover:text-primary/80 transition-colors">
                    Create account
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg py-6"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Don't have an account?{" "}
                  <Link href="/auth/register" className="text-primary hover:text-primary/80 font-semibold">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Demo */}
        <Card className="mt-8 glass border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Demo Access</h3>
            <p className="text-muted-foreground mb-4">
              Quick access for hackathon demonstration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  setLoginData({email: "farmer@demo.com", password: "demo123", role: "farmer"})
                }}
                className="glass bg-transparent"
              >
                <Tractor className="mr-2 h-4 w-4" />
                Demo Farmer
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setLoginData({email: "team@terrapulse.ai", password: "demo123", role: "company"})
                }}
                className="glass bg-transparent"
              >
                <Building className="mr-2 h-4 w-4" />
                Demo Company
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setLoginData({email: "admin@terrapulse.ai", password: "admin123", role: "admin"})
                }}
                className="glass bg-transparent"
              >
                <Shield className="mr-2 h-4 w-4" />
                Demo Admin
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
