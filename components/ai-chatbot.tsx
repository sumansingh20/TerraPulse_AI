"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm TerraPulse AI Assistant. I can help you learn about our MRV platform, regenerative agriculture practices, and how we're transforming farming in India. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("mrv") || lowerInput.includes("monitoring")) {
      return "Our MRV (Monitoring, Reporting & Verification) platform uses AI to track carbon, soil health, and biodiversity credits automatically. It combines satellite imagery, IoT sensors, and farmer data to create real-time digital twins of farms."
    }

    if (lowerInput.includes("farmer") || lowerInput.includes("agriculture")) {
      return "TerraPulse AI empowers smallholder farmers with a mobile app in local languages, offline capabilities, and voice inputs. Farmers can earn multiple income streams through carbon, soil, and biodiversity credits."
    }

    if (lowerInput.includes("nabard") || lowerInput.includes("partnership")) {
      return "We're designed to integrate seamlessly with NABARD's ecosystem, scaling from 5 districts in Year 1 to 1M+ farmers by Year 5. Our platform reduces verification costs and increases trust in climate finance."
    }

    if (lowerInput.includes("credit") || lowerInput.includes("income")) {
      return "Unlike traditional carbon-only systems, we generate multi-value credits: carbon + soil health + biodiversity. This creates multiple income opportunities for farmers while improving ecosystem health."
    }

    if (lowerInput.includes("technology") || lowerInput.includes("ai")) {
      return "Our AI platform creates digital twins of farms using satellite data, IoT sensors, and farmer inputs. Machine learning algorithms automatically calculate and verify credits, reducing costs by 70% compared to traditional MRV systems."
    }

    return "That's a great question! TerraPulse AI is revolutionizing regenerative agriculture through AI-powered MRV. We help farmers access climate finance while improving soil health, reducing emissions, and enhancing biodiversity. Would you like to know more about our technology, farmer benefits, or partnership opportunities?"
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg glass hover:scale-110 transition-all duration-300 z-40 ${isOpen ? "hidden" : "flex"}`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl glass z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="h-5 w-5 text-primary" />
              TerraPulse AI Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.sender === "user" && (
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about TerraPulse AI..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
