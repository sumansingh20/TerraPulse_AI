"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Leaf,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Users,
  Award,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Suman Kumar",
      role: "Lead Developer & AI Specialist",
      description: "Full-stack developer specializing in AI/ML and agricultural technology solutions",
      skills: ["Next.js", "React", "Python", "Machine Learning", "Agricultural Tech"],
      avatar: "/placeholder-user.jpg",
      initials: "SK",
      github: "sumansingh20",
      linkedin: "suman-kumar-dev",
      email: "suman.kumar@terrapulse.ai",
    },
    {
      name: "AI Development Team",
      role: "Artificial Intelligence Engineers",
      description: "Specialized team developing machine learning models for crop monitoring and yield prediction",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "Satellite Imagery", "Deep Learning"],
      avatar: "/placeholder-user.jpg",
      initials: "AI",
      github: "terrapulse-ai",
      linkedin: "terrapulse-ai",
      email: "ai-team@terrapulse.ai",
    },
    {
      name: "Data Science Team",
      role: "Agricultural Data Scientists",
      description: "Experts in processing satellite data, weather patterns, and agricultural analytics",
      skills: ["Data Analysis", "Satellite Data", "Weather APIs", "Statistical Modeling", "R"],
      avatar: "/placeholder-user.jpg",
      initials: "DS",
      github: "terrapulse-data",
      linkedin: "terrapulse-data",
      email: "data@terrapulse.ai",
    },
    {
      name: "UI/UX Design Team",
      role: "User Experience Designers",
      description: "Creating intuitive interfaces for farmers and agricultural professionals",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Agricultural UX"],
      avatar: "/placeholder-user.jpg",
      initials: "UX",
      github: "terrapulse-design",
      linkedin: "terrapulse-design",
      email: "design@terrapulse.ai",
    },
  ]

  const achievements = [
    {
      title: "Hackathon Innovation Award",
      description: "Recognition for innovative agricultural technology solution",
      icon: Award,
    },
    {
      title: "Open Source Contributors",
      description: "Contributing to agricultural technology ecosystem",
      icon: Github,
    },
    {
      title: "Industry Partnerships",
      description: "Collaborating with agricultural organizations",
      icon: Users,
    },
    {
      title: "Global Impact",
      description: "Supporting sustainable farming worldwide",
      icon: Globe,
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
              href="/demo"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Contact
            </Link>
            <Link href="/team" className="text-primary font-medium">
              Team
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
            <Users className="mr-2 h-5 w-5" />
            Meet Our Development Team
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
            The Team Behind
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TerraPulse AI
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance">
            A passionate team of developers, data scientists, and agricultural technology experts committed to
            revolutionizing sustainable farming through AI and innovation
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Team</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Experts in AI, agricultural technology, and sustainable farming solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-lg font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm text-foreground">Skills & Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass bg-transparent hover:bg-primary/10 flex-1"
                      asChild
                    >
                      <Link href={`https://github.com/${member.github}`} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass bg-transparent hover:bg-primary/10 flex-1"
                      asChild
                    >
                      <Link href={`https://linkedin.com/in/${member.linkedin}`} target="_blank">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass bg-transparent hover:bg-primary/10 flex-1"
                      asChild
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Achievements</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Recognition and impact in agricultural technology innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card
                  key={index}
                  className="glass border-primary/30 hover:scale-105 transition-all duration-300 text-center group"
                >
                  <CardHeader>
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Interested in contributing to sustainable agriculture technology? We're always looking for passionate
            developers and agricultural experts to join our mission
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
                Contact Us
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
              asChild
            >
              <Link href="https://github.com/sumansingh20/TerraPulse_AI" target="_blank">
                <Github className="mr-2 h-5 w-5" />
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
              Empowering sustainable agriculture through AI innovation
            </p>
            <div className="border-t pt-8">
              <p className="text-muted-foreground">
                &copy; 2025 TerraPulse AI Team. Built with passion for sustainable farming.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
