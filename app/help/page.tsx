import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import {
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  BookOpen,
  Video,
  Download,
  Search,
  Clock,
  Users,
  Headphones,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function HelpPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics of TerraPulse AI",
      articles: [
        "Setting up your farm profile",
        "Understanding the dashboard",
        "Connecting IoT devices",
        "First crop monitoring setup"
      ]
    },
    {
      icon: MessageSquare,
      title: "Features & Tools",
      description: "Master our advanced features",
      articles: [
        "AI-powered crop predictions",
        "Satellite monitoring guide",
        "Weather alerts setup",
        "Financial planning tools"
      ]
    },
    {
      icon: Users,
      title: "NABARD Services",
      description: "Banking and loan assistance",
      articles: [
        "Loan application process",
        "Eligibility requirements",
        "Document preparation",
        "Application status tracking"
      ]
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Troubleshooting and fixes",
      articles: [
        "Common technical issues",
        "Mobile app problems",
        "Data sync issues",
        "Account recovery"
      ]
    }
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      action: "Start Chat",
      primary: true
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Immediate",
      action: "Call Now",
      primary: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 4 hours",
      action: "Send Email",
      primary: false
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Screen sharing and personal assistance",
      availability: "By appointment",
      responseTime: "Same day",
      action: "Schedule Call",
      primary: false
    }
  ]

  const faqs = [
    {
      question: "How accurate are the crop yield predictions?",
      answer: "Our AI models achieve 85-92% accuracy based on historical data, satellite imagery, and local conditions. Accuracy improves over time as we gather more farm-specific data."
    },
    {
      question: "Can I use TerraPulse AI offline?",
      answer: "Yes! Our mobile app works offline for data collection. Data syncs automatically when you reconnect to the internet."
    },
    {
      question: "What IoT devices are compatible?",
      answer: "We support major brands including John Deere, Case IH, soil sensors from Decagon, weather stations from Davis Instruments, and many others."
    },
    {
      question: "How do I apply for NABARD loans?",
      answer: "Use our integrated loan application system. Upload required documents, fill out the digital form, and track your application status in real-time."
    },
    {
      question: "Is my farm data secure?",
      answer: "Absolutely! We use bank-grade encryption, comply with data protection regulations, and never sell your data to third parties."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Help & Support
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
            How Can We Help You?
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Find answers to your questions, get technical support, or learn how to make the most of TerraPulse AI.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles, tutorials, or features..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Get Instant Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${option.primary ? 'ring-2 ring-green-200 bg-gradient-to-br from-green-50 to-emerald-50' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`p-4 rounded-xl mx-auto mb-4 w-fit ${option.primary ? 'bg-gradient-to-br from-green-100 to-emerald-100' : 'bg-gradient-to-br from-gray-100 to-gray-200'} group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className={`h-8 w-8 ${option.primary ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center space-x-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{option.availability}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600">{option.responseTime}</span>
                    </div>
                  </div>
                  <Button className={`w-full ${option.primary ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' : ''}`} variant={option.primary ? 'default' : 'outline'}>
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 w-fit mb-4">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.articles.map((article, i) => (
                      <Link key={i} href={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}/${article.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="block text-sm text-muted-foreground hover:text-primary py-1 hover:pl-2 transition-all duration-200">
                        • {article}
                      </Link>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 w-full">
                    View All Articles <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to the most common questions about TerraPulse AI
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                      <HelpCircle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Support Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
            <p className="text-xl opacity-90">
              Explore our comprehensive resources to become a TerraPulse AI expert
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Video className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-center mb-4">
                  Step-by-step video guides for all features
                </p>
                <Button variant="secondary" className="w-full">
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Download className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <CardTitle>Download Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-center mb-4">
                  Mobile apps, user guides, and templates
                </p>
                <Button variant="secondary" className="w-full">
                  View Downloads
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <CardTitle>Community Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 text-center mb-4">
                  Connect with other farmers and experts
                </p>
                <Button variant="secondary" className="w-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground">
              Send us a message and we'll get back to you within 4 hours
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Brief description of your issue" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Please describe your issue in detail..." className="min-h-[120px]" />
              </div>
              
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Include your account email, farm location, and any error messages to help us assist you faster.
                </p>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
