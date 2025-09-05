"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Users,
  Building,
  Newspaper,
  Briefcase,
  Clock,
  ArrowRight,
  Sparkles,
  Send,
  Calendar,
  Globe,
  Handshake,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitMessage(result.message)
        setFormData({
          name: "",
          email: "",
          company: "",
          inquiryType: "",
          message: "",
        })
      } else {
        setSubmitMessage(result.message || "There was an error sending your message.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactTypes = [
    {
      title: "Project Inquiries",
      description: "Questions about our hackathon project and implementation",
      icon: Handshake,
      email: "project@terrapulse.dev",
      phone: "+91 98765 43210",
      responseTime: "24 hours",
      color: "primary",
    },
    {
      title: "Technical Demo",
      description: "Request a demo of our AI-powered agricultural platform",
      icon: Building,
      email: "demo@terrapulse.dev",
      phone: "+91 98765 43211",
      responseTime: "4 hours",
      color: "accent",
    },
    {
      title: "Development Team",
      description: "Technical questions about our platform and APIs",
      icon: MessageCircle,
      email: "dev@terrapulse.dev",
      phone: "+91 98765 43212",
      responseTime: "2 hours",
      color: "primary",
    },
    {
      title: "General Contact",
      description: "General inquiries and collaboration opportunities",
      icon: Newspaper,
      email: "hello@terrapulse.dev",
      phone: "+91 98765 43213",
      responseTime: "12 hours",
      color: "accent",
    },
  ]

  const offices = [
    {
      city: "Development Hub",
      type: "Hackathon Project Team",
      address: "IIT Patna, Bihta, Bihar 801106",
      phone: "+91 11 4567 8900",
      email: "team@terrapulse.dev",
    },
    {
      city: "Testing Center",
      type: "Demo & Prototype Lab",
      address: "Agricultural Research Institute, India",
      phone: "+91 80 4567 8901",
      email: "demo@terrapulse.dev",
    },
    {
      city: "Virtual Office",
      type: "Online Collaboration",
      address: "Available 24/7 for project discussions",
      phone: "+91 20 4567 8902",
      email: "hello@terrapulse.dev",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Leaf className="h-8 w-8 text-primary animate-float" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/technology"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Technology
            </Link>
            <Link
              href="/demo"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Demo
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Pricing
            </Link>
            <Link href="/contact" className="text-primary font-medium">
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <Badge className="mb-8 glass border-primary/30 text-primary px-8 py-3 text-base font-medium">
            <MessageCircle className="mr-2 h-5 w-5" />
            Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight tracking-tight">
            Let's Build the Future of <span className="gradient-text">Agriculture</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-4xl mx-auto">
            Whether you're a farmer, FPO, government agency, or technology partner, we're here to help you succeed with
            AI-powered regenerative agriculture.
          </p>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose the right contact method for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactTypes.map((contact, index) => {
              const Icon = contact.icon
              return (
                <Card
                  key={index}
                  className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg ${contact.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}
                      >
                        <Icon className={`h-8 w-8 ${contact.color === "primary" ? "text-primary" : "text-accent"}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{contact.title}</CardTitle>
                        <CardDescription className="text-base">{contact.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href={`mailto:${contact.email}`} className="text-primary hover:underline font-medium">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a href={`tel:${contact.phone}`} className="text-primary hover:underline font-medium">
                        {contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Response time: {contact.responseTime}</span>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300">
                      Contact {contact.title.split(" ")[0]} Team
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Send Us a Message</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="glass border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="mr-3 h-6 w-6 text-primary" />
                Contact Form
              </CardTitle>
              <CardDescription>Tell us about your project and how we can help</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company/Organization</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Inquiry Type *</label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="careers">Career Opportunities</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, requirements, or questions..."
                    rows={6}
                    required
                  />
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg py-6 disabled:opacity-50"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Offices</h2>
            <p className="text-xl text-muted-foreground text-balance">Visit us at our locations across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="glass border-primary/30 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{office.city}</CardTitle>
                      <CardDescription>{office.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{office.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full glass bg-transparent">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Hackathon Project Showcase
            </h2>
            <p className="text-xl text-muted-foreground text-balance">
              Connect with our development team for project demonstrations and discussions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Hackathon Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Live demonstration of our AI agricultural platform</p>
                <Button className="w-full">Schedule Demo</Button>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Project Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Meet the developers behind TerraPulse AI</p>
                <Button className="w-full">Meet Team</Button>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Learn about our technical implementation</p>
                <Button className="w-full">View Tech</Button>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">GitHub Repository</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Explore our open-source codebase</p>
                <Button className="w-full">View Code</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't wait - start your journey towards sustainable and profitable farming today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Button>
                <Button
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Sales Team
                </Button>
                <Button
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Transform Agriculture Together</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Join the regenerative agriculture revolution and start earning from your sustainable farming practices
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TerraPulse AI</span>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Intelligent MRV for regenerative agriculture
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="glass bg-transparent">
                  YouTube
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Digital Twin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Credit System
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors text-lg">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-foreground text-xl">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors text-lg">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors text-lg">
                    Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p className="text-lg">&copy; 2025 TerraPulse AI. Empowering sustainable agriculture through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
