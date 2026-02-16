import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Users,
  Target,
  Heart,
  Globe,
  Award,
  Calendar,
  ArrowRight,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Brain,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-primary font-medium">
              About
            </Link>
            <Link
              href="/technology"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Technology
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
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
            <Heart className="mr-2 h-5 w-5" />
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight tracking-tight">
            Transforming Agriculture with <span className="gradient-text">AI Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-4xl mx-auto">
            We're on a mission to empower Indian smallholder farmers through cutting-edge AI technology, creating
            sustainable income streams while regenerating our planet's ecosystems.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:scale-105 transition-all duration-500">
              <CardHeader className="pb-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To democratize access to advanced MRV technology for smallholder farmers across India, enabling them
                  to participate in carbon markets while building resilient, regenerative agricultural practices that
                  benefit both farmers and the environment.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-accent/30 bg-gradient-to-br from-accent/5 to-transparent hover:scale-105 transition-all duration-500">
              <CardHeader className="pb-6">
                <Lightbulb className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A future where every farm in India is a climate-positive ecosystem, where farmers prosper through
                  multiple income streams from carbon, soil, and biodiversity credits, and where technology serves as a
                  bridge to sustainable prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Journey</h2>
            <p className="text-xl text-muted-foreground text-balance">
              From concept to reality - building the future of regenerative agriculture
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">The Problem We Discovered</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  While researching climate finance in rural India, we discovered that existing MRV systems were
                  prohibitively expensive, focused only on carbon, and required costly consultants. Smallholder farmers
                  were being left out of the climate economy despite being key to the solution.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">The AI Breakthrough</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We realized that AI could dramatically reduce MRV costs while expanding beyond carbon to include soil
                  health and biodiversity. By combining satellite data, IoT sensors, and machine learning, we could
                  create affordable, comprehensive monitoring for every farm.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Building for Farmers</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We spent months in rural communities, understanding farmer needs and challenges. This led to our
                  farmer-centric design: local languages, offline functionality, voice inputs, and direct integration
                  with existing agricultural practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Our Values</h2>
            <p className="text-xl text-muted-foreground text-balance">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Farmer-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision we make prioritizes farmer empowerment and prosperity
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We leverage cutting-edge AI to solve real-world agricultural challenges
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Environmental regeneration is at the core of our platform and mission
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Open, verifiable data and processes build trust in our ecosystem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Passionate experts united by a shared vision for sustainable agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <CardTitle className="text-2xl">Suman</CardTitle>
                <CardDescription className="text-lg">AI & Technology Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Architect of our Digital Twin technology and AI models. Specializes in scalable backend systems and
                  machine learning infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Backend</Badge>
                  <Badge variant="secondary">IoT</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">K</span>
                </div>
                <CardTitle className="text-2xl">Khushi</CardTitle>
                <CardDescription className="text-lg">UI/UX Design Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Creates intuitive, farmer-friendly interfaces with focus on accessibility, local languages, and rural
                  usability patterns.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">UI/UX</Badge>
                  <Badge variant="secondary">Mobile</Badge>
                  <Badge variant="secondary">Accessibility</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <CardTitle className="text-2xl">Isha</CardTitle>
                <CardDescription className="text-lg">MRV & Research Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Develops carbon, soil, and biodiversity measurement protocols. Ensures scientific accuracy and
                  regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">MRV</Badge>
                  <Badge variant="secondary">Research</Badge>
                  <Badge variant="secondary">Protocols</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <CardTitle className="text-2xl">Aayush</CardTitle>
                <CardDescription className="text-lg">Finance & Strategy Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Designs credit models and revenue optimization strategies. Manages climate finance integration and
                  market connections.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Finance</Badge>
                  <Badge variant="secondary">Strategy</Badge>
                  <Badge variant="secondary">Markets</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <CardTitle className="text-2xl">Sachin</CardTitle>
                <CardDescription className="text-lg">Partnerships Lead</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Builds strategic partnerships with NABARD, FPOs, and government agencies. Leads scalability and
                  expansion initiatives.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Partnerships</Badge>
                  <Badge variant="secondary">NABARD</Badge>
                  <Badge variant="secondary">Scaling</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Recognition & Impact</h2>
            <p className="text-xl text-muted-foreground text-balance">Acknowledgments that fuel our mission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass border-primary/30 text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>NABARD Innovation Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Selected for NABARD's climate finance innovation program</p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Farmer Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Positive feedback from 500+ farmers across 5 pilot districts</p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/30 text-center hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>SDG Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Contributing to 8 UN Sustainable Development Goals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            Be part of the transformation towards regenerative agriculture in India
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-xl text-lg px-8 py-6"
            >
              Partner with Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent transition-all duration-300 text-lg px-8 py-6"
            >
              Learn More
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
              <p className="text-muted-foreground text-lg leading-relaxed">
                Intelligent MRV for regenerative agriculture
              </p>
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
