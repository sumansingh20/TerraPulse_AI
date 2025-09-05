"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Calendar,
  Newspaper,
  Camera,
  FileText,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function PressPage() {
  const pressReleases = [
    {
      title: "TerraPulse AI Launches Revolutionary Agricultural Monitoring Platform",
      date: "March 15, 2025",
      description: "New AI-powered solution combines satellite imagery with machine learning to provide real-time crop monitoring and yield predictions for sustainable farming.",
      type: "Product Launch",
      link: "#",
    },
    {
      title: "Hackathon Success: TerraPulse AI Wins Innovation Award",
      date: "February 28, 2025",
      description: "Our team's innovative approach to agricultural technology recognition at the national level hackathon competition.",
      type: "Achievement",
      link: "#",
    },
    {
      title: "Partnership with Leading Agricultural Organizations",
      date: "February 10, 2025",
      description: "Strategic partnerships established with farmer producer organizations and agricultural technology companies.",
      type: "Partnership",
      link: "#",
    },
  ]

  const mediaKit = [
    {
      title: "Company Logo Package",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      size: "2.5 MB",
      type: "Images",
    },
    {
      title: "Product Screenshots",
      description: "Platform interface, dashboard, and map views",
      size: "15.3 MB",
      type: "Images",
    },
    {
      title: "Company Fact Sheet",
      description: "Key information, statistics, and company overview",
      size: "1.2 MB",
      type: "PDF",
    },
    {
      title: "Team Photos",
      description: "Professional headshots and team photos",
      size: "8.7 MB",
      type: "Images",
    },
  ]

  const mediaContact = {
    name: "Media Relations Team",
    email: "media@terrapulse.ai",
    phone: "+91 98765 43213",
    responseTime: "12 hours",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-primary" />
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
              href="/team"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </Link>
            <Link href="/press" className="text-primary font-medium">
              Press
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
            <Newspaper className="mr-2 h-5 w-5" />
            Press & Media
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
            Media &
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Press Center
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Latest news, press releases, and media resources for TerraPulse AI.
            Get the story behind our mission to revolutionize sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Media Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <Link href={`mailto:${mediaContact.email}`}>Contact Media Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Press Releases</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Latest news and announcements from TerraPulse AI
            </p>
          </div>

          <div className="grid gap-8">
            {pressReleases.map((release, index) => (
              <Card
                key={release.title + index}
                className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                        {release.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{release.date}</CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary">{release.type}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{release.description}</p>
                  
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" asChild>
                      <Link href={release.link}>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Full Release
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="glass bg-transparent hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Media Kit</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Download high-resolution images, logos, and company information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaKit.map((item, index) => (
              <Card
                key={item.title + index}
                className="glass border-primary/30 hover:scale-105 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Camera className="mr-3 h-6 w-6 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">{item.type}</span>
                    <Badge variant="secondary">{item.size}</Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Media Contact</CardTitle>
              <CardDescription className="text-lg">
                For press inquiries, interviews, and media requests
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-2">
                  <Mail className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">{mediaContact.email}</p>
                </div>
                <div className="space-y-2">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">{mediaContact.phone}</p>
                </div>
                <div className="space-y-2">
                  <Calendar className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Response Time</h4>
                  <p className="text-muted-foreground">{mediaContact.responseTime}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6" asChild>
                  <Link href={`mailto:${mediaContact.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Media Inquiry
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
                  asChild
                >
                  <Link href={`tel:${mediaContact.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Media Team
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">TerraPulse AI</span>
            </Link>
            <p className="text-muted-foreground text-lg mb-8">
              Revolutionizing sustainable agriculture through AI innovation
            </p>
            <div className="border-t pt-8">
              <p className="text-muted-foreground">
                &copy; 2025 TerraPulse AI Team. Media inquiries welcome.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
