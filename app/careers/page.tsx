"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Code,
  Brain,
  Briefcase,
  Mail,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Join our development team to build the next generation of agricultural technology solutions.",
      requirements: ["Next.js", "React", "Node.js", "TypeScript", "Agricultural Tech Interest"],
      salary: "₹8-15 LPA",
    },
    {
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Develop machine learning models for crop monitoring, yield prediction, and agricultural analytics.",
      requirements: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Satellite Imagery"],
      salary: "₹12-20 LPA",
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Analyze agricultural data, weather patterns, and satellite imagery to derive actionable insights.",
      requirements: ["Python", "R", "Statistical Analysis", "Data Visualization", "Agriculture Domain"],
      salary: "₹10-18 LPA",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Design intuitive interfaces for farmers and agricultural professionals.",
      requirements: ["Figma", "User Research", "Prototyping", "Design Systems", "Agricultural UX"],
      salary: "₹6-12 LPA",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Manage cloud infrastructure, CI/CD pipelines, and deployment systems.",
      requirements: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
      salary: "₹10-16 LPA",
    },
    {
      title: "Agricultural Technology Specialist",
      department: "Domain Expertise",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Bridge the gap between technology and agricultural practices, providing domain expertise.",
      requirements: ["Agriculture Background", "Technology Understanding", "Field Experience", "Communication"],
      salary: "₹8-14 LPA",
    },
  ]

  const benefits = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and unlimited PTO",
      icon: Clock,
    },
    {
      title: "Learning & Development",
      description: "Continuous learning budget, conference tickets, and skill development",
      icon: Brain,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: Users,
    },
    {
      title: "Equity & Ownership",
      description: "Stock options and profit-sharing for all team members",
      icon: Briefcase,
    },
  ]

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
            <Link href="/careers" className="text-primary font-medium">
              Careers
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
            <Briefcase className="mr-2 h-5 w-5" />
            Join Our Mission
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
            Careers at
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TerraPulse AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            Join our passionate team of innovators working to revolutionize sustainable agriculture through AI,
            satellite technology, and cutting-edge development practices
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Open Positions</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Join our growing team and make an impact on sustainable agriculture
            </p>
          </div>

          <div className="grid gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={position.title + index}
                className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-lg text-primary font-medium">
                        {position.department}
                      </CardDescription>
                    </div>
                    <Badge className="bg-primary/10 text-primary">{position.type}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {position.salary}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <Badge
                          key={req + reqIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                        >
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="glass bg-transparent hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/contact">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Why Join Us?</h2>
            <p className="text-xl text-muted-foreground text-balance">
              We offer competitive benefits and a mission-driven work environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={benefit.title + index}
                  className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center group"
                >
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Make an Impact?</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals who share our passion for
            sustainable agriculture technology
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
              asChild
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Send Your Resume
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
              asChild
            >
              <Link href="https://github.com/sumansingh20/TerraPulse_AI" target="_blank">
                <Code className="mr-2 h-5 w-5" />
                View Our Code
              </Link>
            </Button>
          </div>
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
              Building the future of sustainable agriculture
            </p>
            <div className="border-t pt-8">
              <p className="text-muted-foreground">
                &copy; 2025 TerraPulse AI Team. Equal opportunity employer.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
