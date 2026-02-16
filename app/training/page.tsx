"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Users,
  Award,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  Video,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Smartphone,
  Monitor,
  Languages,
  Headphones,
} from "lucide-react"
const trainingPrograms = [
  {
    id: "digital-farming",
    title: "Digital Farming Technologies",
    category: "Technology",
    level: "Beginner",
    duration: "40 hours",
    format: "Hybrid",
    participants: 12500,
    rating: 4.8,
    price: "Free",
    status: "Ongoing",
    description: "Comprehensive training on modern digital tools and technologies for efficient farming practices",
    topics: [
      "Precision Agriculture Techniques",
      "IoT Sensors and Monitoring Systems",
      "Drone Technology for Crop Monitoring",
      "Mobile Apps for Farm Management",
      "Weather Forecasting and Climate Data",
      "Soil Health Assessment Tools",
    ],
    outcomes: [
      "25% increase in crop yield",
      "30% reduction in water usage",
      "40% improvement in pest management",
      "50% faster decision making",
    ],
    schedule: {
      startDate: "2025-09-15",
      sessions: 10,
      timing: "10:00 AM - 2:00 PM",
      frequency: "Twice a week",
    },
  },
  {
    id: "sustainable-agriculture",
    title: "Sustainable Agriculture Practices",
    category: "Sustainability",
    level: "Intermediate",
    duration: "60 hours",
    format: "Field-based",
    participants: 8200,
    rating: 4.9,
    price: "₹2,500",
    status: "Registration Open",
    description: "Advanced techniques for environmentally sustainable farming and carbon credit generation",
    topics: [
      "Organic Farming Methods",
      "Crop Rotation and Intercropping",
      "Natural Pest Management",
      "Composting and Organic Fertilizers",
      "Water Conservation Techniques",
      "Carbon Sequestration Practices",
    ],
    outcomes: [
      "60% reduction in chemical usage",
      "35% improvement in soil health",
      "Carbon credits worth ₹15,000/acre",
      "20% increase in market premium",
    ],
    schedule: {
      startDate: "2025-10-01",
      sessions: 15,
      timing: "6:00 AM - 12:00 PM",
      frequency: "Three times a week",
    },
  },
  {
    id: "financial-literacy",
    title: "Agricultural Finance & Credit Management",
    category: "Finance",
    level: "Beginner",
    duration: "30 hours",
    format: "Online",
    participants: 15800,
    rating: 4.7,
    price: "Free",
    status: "Ongoing",
    description: "Essential financial skills for farmers including credit management and investment planning",
    topics: [
      "Understanding Agricultural Credit",
      "Loan Application Procedures",
      "Interest Rate Calculations",
      "Insurance and Risk Management",
      "Record Keeping and Accounting",
      "Investment Planning for Farmers",
    ],
    outcomes: [
      "90% loan approval success rate",
      "25% reduction in borrowing costs",
      "Improved financial record keeping",
      "Better investment decisions",
    ],
    schedule: {
      startDate: "2025-09-20",
      sessions: 8,
      timing: "7:00 PM - 10:30 PM",
      frequency: "Twice a week",
    },
  },
  {
    id: "market-linkage",
    title: "Market Linkage & Value Addition",
    category: "Marketing",
    level: "Advanced",
    duration: "50 hours",
    format: "Workshop",
    participants: 6500,
    rating: 4.6,
    price: "₹5,000",
    status: "Starting Soon",
    description: "Strategies for direct market access, value addition, and building farmer producer organizations",
    topics: [
      "Direct Marketing Strategies",
      "Value Addition Techniques",
      "FPO Formation and Management",
      "Contract Farming",
      "Export Opportunities",
      "Branding and Packaging",
    ],
    outcomes: [
      "40% increase in farm income",
      "Direct market access for 80% participants",
      "Successful FPO formation",
      "Premium pricing for quality produce",
    ],
    schedule: {
      startDate: "2025-10-15",
      sessions: 12,
      timing: "9:00 AM - 4:00 PM",
      frequency: "Weekly workshops",
    },
  },
]

const categories = [
  { id: "all", name: "All Programs", count: trainingPrograms.length },
  { id: "Technology", name: "Technology", count: trainingPrograms.filter(p => p.category === "Technology").length },
  { id: "Sustainability", name: "Sustainability", count: trainingPrograms.filter(p => p.category === "Sustainability").length },
  { id: "Finance", name: "Finance", count: trainingPrograms.filter(p => p.category === "Finance").length },
  { id: "Marketing", name: "Marketing", count: trainingPrograms.filter(p => p.category === "Marketing").length },
]

const trainingStats = [
  { label: "Total Participants", value: "42,000+", growth: "+18%", icon: Users },
  { label: "Active Programs", value: "24", growth: "+6", icon: BookOpen },
  { label: "Completion Rate", value: "87%", growth: "+5%", icon: Award },
  { label: "Average Rating", value: "4.7/5", growth: "+0.2", icon: Star },
]

const upcomingEvents = [
  {
    title: "Smart Irrigation Workshop",
    date: "2025-09-10",
    time: "10:00 AM",
    location: "Pune Agricultural Center",
    participants: 45,
    type: "Workshop",
  },
  {
    title: "Organic Certification Seminar",
    date: "2025-09-12",
    time: "2:00 PM",
    location: "Virtual Event",
    participants: 120,
    type: "Webinar",
  },
  {
    title: "FPO Leadership Training",
    date: "2025-09-15",
    time: "9:00 AM",
    location: "Mumbai Training Center",
    participants: 30,
    type: "Training",
  },
]

export default function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedProgram, setSelectedProgram] = React.useState<string | null>(null)

  const filteredPrograms = trainingPrograms.filter(program => {
    const categoryMatch = selectedCategory === "all" || program.category === selectedCategory
    const searchMatch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       program.description.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Header */}
        <div className="border-b glass">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Training & Capacity Building</h1>
                <p className="text-muted-foreground text-lg">
                  Empowering farmers with knowledge and skills for sustainable agriculture
                </p>
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {trainingPrograms.length} Programs Available
              </Badge>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Training Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trainingStats.map((stat, statIndex) => {
              const Icon = stat.icon
              return (
                <Card key={statIndex} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="default" className="text-xs">
                      {stat.growth}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search training programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Training Programs */}
            <div className="lg:col-span-2 space-y-6">
              {filteredPrograms.map((program) => (
                <Card key={program.id} className="overflow-hidden glass">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {program.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {program.level}
                        </Badge>
                        <Badge 
                          variant={program.status === 'Ongoing' ? 'default' : 
                                 program.status === 'Registration Open' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {program.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {program.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Program Details */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Monitor className="h-4 w-4 text-muted-foreground" />
                          {program.format}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          {program.participants.toLocaleString()} participants
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-muted-foreground" />
                          {program.price}
                        </div>
                      </div>

                      {/* Key Topics */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Topics</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 text-sm">
                          {program.topics.slice(0, 4).map((topic, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              {topic}
                            </div>
                          ))}
                        </div>
                        {program.topics.length > 4 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 p-0 h-auto text-xs"
                            onClick={() => setSelectedProgram(program.id)}
                          >
                            +{program.topics.length - 4} more topics
                          </Button>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProgram(program.id)}
                        >
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1 group">
                          Register Now
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4 space-y-1">
                        <div className="font-semibold text-sm">{event.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(event.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.participants} participants
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Video className="h-4 w-4 mr-2" />
                      Video Library (120+ videos)
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Training Manuals (45 PDFs)
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Headphones className="h-4 w-4 mr-2" />
                      Audio Courses (25 episodes)
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Mobile Learning App
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Languages className="h-4 w-4 mr-2" />
                      Multi-language Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Support Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      Our training coordinators are here to help you choose the right program.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        📞 Call: 1800-425-5525
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        ✉️ Email: training@nabard.org
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        💬 Live Chat Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Program View */}
          {selectedProgram && (
            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {trainingPrograms.find(p => p.id === selectedProgram)?.title} - Complete Details
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedProgram(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {(() => {
                  const program = trainingPrograms.find(p => p.id === selectedProgram)
                  if (!program) return null

                  return (
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                        <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                        <TabsTrigger value="schedule">Schedule</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="mt-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Program Overview</h3>
                            <p className="text-muted-foreground">{program.description}</p>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Duration</div>
                              <div className="font-semibold">{program.duration}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Format</div>
                              <div className="font-semibold">{program.format}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Level</div>
                              <div className="font-semibold">{program.level}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Investment</div>
                              <div className="font-semibold">{program.price}</div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="curriculum" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Detailed Curriculum</h3>
                          <div className="grid gap-3">
                            {program.topics.map((topic, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                                  {index + 1}
                                </div>
                                <div>
                                  <div className="font-medium">{topic}</div>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    Interactive session with hands-on practice and real-world case studies
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="outcomes" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Expected Outcomes</h3>
                          <div className="grid gap-4">
                            {program.outcomes.map((outcome, index) => (
                              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-green-800 dark:text-green-200">{outcome}</div>
                                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                                    Based on previous participant data and success metrics
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="schedule" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Training Schedule</h3>
                          <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <Calendar className="h-5 w-5 text-primary" />
                                  <span className="font-semibold">Start Date</span>
                                </div>
                                <div className="text-lg">{new Date(program.schedule.startDate).toLocaleDateString()}</div>
                              </div>
                              <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="h-5 w-5 text-primary" />
                                  <span className="font-semibold">Timing</span>
                                </div>
                                <div className="text-lg">{program.schedule.timing}</div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <BookOpen className="h-5 w-5 text-primary" />
                                  <span className="font-semibold">Total Sessions</span>
                                </div>
                                <div className="text-lg">{program.schedule.sessions} sessions</div>
                              </div>
                              <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <Target className="h-5 w-5 text-primary" />
                                  <span className="font-semibold">Frequency</span>
                                </div>
                                <div className="text-lg">{program.schedule.frequency}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )
                })()}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
  )
}
