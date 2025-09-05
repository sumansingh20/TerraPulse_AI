"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Mail,
  ArrowRight,
  ArrowLeft,
  Shield,
  Key,
} from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate password reset API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Password reset requested for:", email)
      setEmailSent(true)
      
    } catch (error) {
      console.error("Password reset error:", error)
      alert("Failed to send reset email. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

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
            <Link href="/auth/login" className="text-muted-foreground hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/auth/register" className="text-muted-foreground hover:text-primary transition-colors">
              Register
            </Link>
          </nav>
        </div>
      </div>

      <div className="w-full max-w-md mt-20">
        <div className="text-center mb-8">
          <Badge className="mb-4 glass border-primary/30 text-primary px-6 py-2">
            <Key className="mr-2 h-4 w-4" />
            Password Reset
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {emailSent ? "Check Your Email" : "Forgot Password?"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {emailSent 
              ? "We've sent a password reset link to your email address"
              : "Enter your email address and we'll send you a link to reset your password"
            }
          </p>
        </div>

        <Card className="glass border-primary/30">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Mail className="mr-3 h-6 w-6 text-primary" />
              {emailSent ? "Email Sent!" : "Reset Password"}
            </CardTitle>
            <CardDescription>
              {emailSent 
                ? "Please check your inbox and spam folder for the reset link"
                : "We'll send you instructions to reset your password"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!emailSent ? (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg py-6"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Reset Link...
                    </div>
                  ) : (
                    <>
                      Send Reset Link
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-6 text-center">
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Reset link sent to {email}
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    The link will expire in 1 hour for security reasons
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => {
                      setEmailSent(false)
                      setEmail("")
                    }}
                    variant="outline"
                    className="w-full glass bg-transparent"
                  >
                    Try Different Email
                  </Button>
                  
                  <Button
                    onClick={() => handleResetPassword({ preventDefault: () => {} } as React.FormEvent)}
                    disabled={isLoading}
                    variant="outline"
                    className="w-full glass bg-transparent"
                  >
                    {isLoading ? "Sending..." : "Resend Email"}
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link 
                href="/auth/login"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="mt-6 glass border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If you're having trouble resetting your password, contact our support team
            </p>
            <Button
              variant="outline"
              className="glass bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
