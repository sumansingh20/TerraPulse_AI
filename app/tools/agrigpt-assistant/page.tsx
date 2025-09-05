import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Brain,
  MessageSquare,
  Globe,
  Sparkles,
  Clock,
  Users,
  Smartphone,
} from "lucide-react"

export default function AgriGPTAssistantPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Advice",
      description: "ChatGPT-powered farming advisor with deep agricultural knowledge trained on Indian farming practices"
    },
    {
      icon: MessageSquare,
      title: "Voice & Text Chat",
      description: "Interact using voice commands or text in your preferred language for natural conversations"
    },
    {
      icon: Globe,
      title: "12+ Languages",
      description: "Supports Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Punjabi, and more"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get instant farming advice and support any time of day or night"
    },
    {
      icon: Sparkles,
      title: "Smart Recommendations",
      description: "Personalized recommendations based on your crop type, location, and farming practices"
    },
    {
      icon: Users,
      title: "Expert Knowledge",
      description: "Access to agricultural experts and research-backed farming practices"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              🤖 Revolutionary AI Assistant
            </Badge>
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 mr-4">
                <Brain className="h-12 w-12 text-indigo-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AgriGPT Assistant
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your personal AI farming advisor powered by ChatGPT technology. Get instant answers to farming questions in your local language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Start Chatting
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">
                  Try Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Farming Assistant</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets traditional farming wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your AI Farming Assistant
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start getting intelligent farming advice in your local language today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <MessageSquare className="mr-2 h-4 w-4" />
              Start Free Chat
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
              <Smartphone className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
