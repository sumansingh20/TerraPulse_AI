"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  CheckCircle,
  Play,
  Download,
  Star,
  Clock
} from "lucide-react"

export function EducationPlatform() {
  const [activeModule, setActiveModule] = useState("basics")

  const trainingModules = [
    {
      id: "basics",
      title: "Sustainable Agriculture Basics",
      description: "Introduction to sustainable farming practices and carbon farming",
      duration: "2 hours",
      lessons: 8,
      difficulty: "Beginner",
      progress: 75,
      rating: 4.8,
      enrolled: 1247,
      topics: ["Soil Health", "Crop Rotation", "Water Management", "Pest Control"]
    },
    {
      id: "carbon",
      title: "Carbon Farming & MRV",
      description: "Understanding carbon sequestration and measurement, reporting, verification",
      duration: "3 hours",
      lessons: 12,
      difficulty: "Intermediate",
      progress: 45,
      rating: 4.9,
      enrolled: 892,
      topics: ["Carbon Cycle", "Sequestration Methods", "MRV Protocols", "Credit Trading"]
    },
    {
      id: "technology",
      title: "Agricultural Technology",
      description: "Modern farming technologies and digital agriculture tools",
      duration: "2.5 hours",
      lessons: 10,
      difficulty: "Intermediate",
      progress: 20,
      rating: 4.7,
      enrolled: 634,
      topics: ["IoT Sensors", "Precision Farming", "Satellite Imagery", "Data Analytics"]
    },
    {
      id: "nabard",
      title: "NABARD Schemes & Financing",
      description: "Understanding NABARD loan schemes and agricultural financing",
      duration: "1.5 hours",
      lessons: 6,
      difficulty: "Beginner",
      progress: 90,
      rating: 4.6,
      enrolled: 1456,
      topics: ["Loan Schemes", "Subsidy Programs", "Application Process", "Documentation"]
    }
  ]

  const bestPractices = [
    {
      category: "Soil Management",
      practices: [
        {
          title: "Cover Cropping",
          description: "Using cover crops to improve soil health and prevent erosion",
          impact: "Increases soil organic matter by 15-25%",
          implementation: "Plant leguminous cover crops during fallow periods",
          resources: ["Guide PDF", "Video Tutorial", "Expert Webinar"]
        },
        {
          title: "Minimal Tillage",
          description: "Reducing soil disturbance to maintain soil structure",
          impact: "Reduces soil erosion by up to 90%",
          implementation: "Use no-till or minimal-till practices",
          resources: ["Implementation Guide", "Equipment Recommendations"]
        }
      ]
    },
    {
      category: "Water Conservation",
      practices: [
        {
          title: "Drip Irrigation",
          description: "Efficient water delivery system for crops",
          impact: "Reduces water usage by 30-50%",
          implementation: "Install drip irrigation systems in high-value crops",
          resources: ["Installation Guide", "Maintenance Manual", "Cost Calculator"]
        },
        {
          title: "Rainwater Harvesting",
          description: "Collecting and storing rainwater for agricultural use",
          impact: "Provides backup water source during dry periods",
          implementation: "Build farm ponds and water harvesting structures",
          resources: ["Design Templates", "Construction Guide"]
        }
      ]
    }
  ]

  const videoTutorials = [
    {
      id: "vt-001",
      title: "Introduction to Carbon Farming",
      duration: "15:30",
      views: 12450,
      rating: 4.9,
      thumbnail: "/placeholder.jpg",
      category: "Carbon Farming",
      instructor: "Dr. Rajesh Kumar",
      description: "Learn the basics of carbon farming and how it can benefit your farm"
    },
    {
      id: "vt-002",
      title: "Setting Up IoT Sensors",
      duration: "22:45", 
      views: 8920,
      rating: 4.7,
      thumbnail: "/placeholder.jpg",
      category: "Technology",
      instructor: "Priya Sharma",
      description: "Step-by-step guide to installing and configuring soil sensors"
    },
    {
      id: "vt-003",
      title: "NABARD Loan Application Process",
      duration: "18:20",
      views: 15680,
      rating: 4.8,
      thumbnail: "/placeholder.jpg",
      category: "Finance",
      instructor: "Amit Patel",
      description: "Complete guide to applying for NABARD agricultural loans"
    },
    {
      id: "vt-004",
      title: "Organic Certification Process",
      duration: "25:15",
      views: 6750,
      rating: 4.6,
      thumbnail: "/placeholder.jpg",
      category: "Certification",
      instructor: "Dr. Sunita Verma",
      description: "How to obtain organic certification for your farm products"
    }
  ]

  const certifications = [
    {
      id: "cert-sustainable",
      name: "Sustainable Agriculture Practitioner",
      level: "Professional",
      duration: "4 weeks",
      modules: 6,
      cost: "₹2,500",
      validity: "2 years",
      benefits: ["Recognized by NABARD", "Higher loan eligibility", "Market premium access"],
      prerequisites: "Basic farming experience",
      nextBatch: "Sept 15, 2025"
    },
    {
      id: "cert-carbon",
      name: "Carbon Farming Specialist",
      level: "Expert",
      duration: "6 weeks",
      modules: 8,
      cost: "₹4,000",
      validity: "3 years",
      benefits: ["Carbon credit advisor qualification", "Technical consultant opportunities", "Government project eligibility"],
      prerequisites: "Sustainable Agriculture Practitioner",
      nextBatch: "Oct 1, 2025"
    },
    {
      id: "cert-digital",
      name: "Digital Agriculture Expert",
      level: "Advanced",
      duration: "5 weeks",
      modules: 7,
      cost: "₹3,500",
      validity: "2 years",
      benefits: ["Technology implementation certification", "Equipment vendor partnerships", "Training program eligibility"],
      prerequisites: "Basic computer literacy",
      nextBatch: "Sept 22, 2025"
    }
  ]

  const learningPath = [
    {
      step: 1,
      title: "Foundation Learning",
      modules: ["Sustainable Agriculture Basics", "NABARD Schemes & Financing"],
      duration: "3.5 hours",
      status: "completed"
    },
    {
      step: 2,
      title: "Intermediate Skills",
      modules: ["Carbon Farming & MRV", "Agricultural Technology"],
      duration: "5.5 hours",
      status: "in-progress"
    },
    {
      step: 3,
      title: "Advanced Certification",
      modules: ["Sustainable Agriculture Practitioner", "Carbon Farming Specialist"],
      duration: "10 weeks",
      status: "locked"
    },
    {
      step: 4,
      title: "Expert Level",
      modules: ["Digital Agriculture Expert", "Advanced Carbon Markets"],
      duration: "8 weeks",
      status: "locked"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Farmer Education Platform
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive learning platform with interactive training modules, video tutorials, best practices library, and professional certification programs
        </p>
      </div>

      {/* Learning Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Learners</p>
                <p className="text-2xl font-bold">4,229</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Training Modules</p>
                <p className="text-2xl font-bold">36</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certified Farmers</p>
                <p className="text-2xl font-bold">1,456</p>
              </div>
              <Award className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-blue-200 hover:border-blue-400 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Video Hours</p>
                <p className="text-2xl font-bold">180+</p>
              </div>
              <Video className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Education Dashboard */}
      <Tabs value={activeModule} onValueChange={setActiveModule} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Training Modules</TabsTrigger>
          <TabsTrigger value="practices">Best Practices</TabsTrigger>
          <TabsTrigger value="videos">Video Library</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Interactive Training Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trainingModules.map((module) => (
                  <div key={module.id} className="bg-muted/50 p-6 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{module.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                      </div>
                      <Badge variant="secondary">{module.difficulty}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{module.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Lessons</p>
                        <p className="font-semibold">{module.lessons}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{module.rating}</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Enrolled</p>
                        <p className="font-semibold">{module.enrolled.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="glass">
            <CardHeader>
              <CardTitle>Recommended Learning Path</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningPath.map((path) => (
                  <div key={path.step} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      path.status === "completed" ? "bg-green-500 text-white" :
                      path.status === "in-progress" ? "bg-blue-500 text-white" :
                      "bg-gray-300 text-gray-600"
                    }`}>
                      {path.status === "completed" ? <CheckCircle className="h-4 w-4" /> : path.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{path.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {path.modules.join(", ")} • {path.duration}
                      </p>
                    </div>
                    <Badge variant={
                      path.status === "completed" ? "default" :
                      path.status === "in-progress" ? "secondary" :
                      "outline"
                    }>
                      {path.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Best Practices Library
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {bestPractices.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.practices.map((practice) => (
                        <div key={practice.title} className="bg-muted/50 p-6 rounded-lg">
                          <h4 className="font-semibold text-lg mb-2">{practice.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                          
                          <div className="space-y-3 mb-4">
                            <div>
                              <p className="text-sm font-medium text-green-600">Impact</p>
                              <p className="text-sm">{practice.impact}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-blue-600">Implementation</p>
                              <p className="text-sm">{practice.implementation}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Available Resources:</p>
                            <div className="flex flex-wrap gap-2">
                              {practice.resources.map((resource) => (
                                <Badge key={resource} variant="outline" className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground">
                                  {resource}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Access Resources
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Video Tutorial Library
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTutorials.map((video) => (
                  <div key={video.id} className="bg-muted/50 rounded-lg overflow-hidden border border-border">
                    <div className="aspect-video bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white bg-black/50 rounded-full p-3 cursor-pointer hover:bg-black/70 transition-colors" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{video.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs">{video.rating}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-2">{video.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <span>By {video.instructor}</span>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                      
                      <Button size="sm" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Professional Certification Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-muted/50 p-6 rounded-lg border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="secondary">{cert.level}</Badge>
                          <span className="text-sm text-muted-foreground">₹{cert.cost}</span>
                        </div>
                      </div>
                      <Award className="h-8 w-8 text-yellow-500" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{cert.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Modules</p>
                        <p className="font-semibold">{cert.modules}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Validity</p>
                        <p className="font-semibold">{cert.validity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Next Batch</p>
                        <p className="font-semibold">{cert.nextBatch}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Key Benefits:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {cert.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Prerequisites:</strong> {cert.prerequisites}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button>
                        Enroll Now
                      </Button>
                      <Button variant="outline">
                        View Curriculum
                      </Button>
                      <Button variant="outline" size="sm">
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule Info
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Platform Statistics */}
      <Card className="glass border-green-200">
        <CardHeader>
          <CardTitle>Platform Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600">95%</p>
              <p className="text-sm text-muted-foreground">Course Completion Rate</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-600">78%</p>
              <p className="text-sm text-muted-foreground">Income Improvement</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-orange-600">15,000+</p>
              <p className="text-sm text-muted-foreground">Hours of Learning</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
