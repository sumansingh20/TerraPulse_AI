"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  FileText,
  PieChart,
  Activity,
  Target,
  Users,
  IndianRupee,
  Filter,
  Search,
  RefreshCw,
  Share,
  Eye,
  AlertCircle,
  CheckCircle,
  Clock,
  MapPin,
} from "lucide-react"
import { ClientOnly } from "@/components/client-only"

const reports = [
  {
    id: "credit-disbursement",
    title: "Credit Disbursement Analysis",
    category: "Financial",
    type: "Monthly",
    lastUpdated: "2025-09-01",
    status: "Published",
    description: "Comprehensive analysis of credit disbursement patterns across regions and sectors",
    size: "2.4 MB",
    downloads: 1250,
    views: 5600,
    metrics: {
      "Total Disbursement": "₹12.45 Billion",
      "Growth Rate": "+15.2%",
      "Active Schemes": "24",
      "Beneficiaries": "185,000",
    },
    keyInsights: [
      "Highest growth in sustainable agriculture schemes (22%)",
      "Maharashtra leads in credit utilization (18% of total)",
      "Digital applications increased by 45% this quarter",
      "Recovery rate improved to 94.7%",
    ],
  },
  {
    id: "impact-assessment",
    title: "Rural Development Impact Report",
    category: "Development",
    type: "Quarterly", 
    lastUpdated: "2025-08-30",
    status: "Published",
    description: "Assessment of rural development programs and their socio-economic impact",
    size: "5.2 MB",
    downloads: 890,
    views: 3400,
    metrics: {
      "Programs Assessed": "45",
      "Impact Score": "8.7/10",
      "Coverage": "28 States",
      "Population Reached": "6.8 Million",
    },
    keyInsights: [
      "Livelihood improvement in 78% of project areas", 
      "Women participation increased by 32%",
      "Digital literacy programs showing 85% success rate",
      "Infrastructure projects created 45,000 jobs",
    ],
  },
  {
    id: "carbon-credits",
    title: "Carbon Credit Generation Report",
    category: "Environment",
    type: "Quarterly",
    lastUpdated: "2025-08-25",
    status: "Published", 
    description: "Analysis of carbon credit generation and verification across agricultural projects",
    size: "1.8 MB",
    downloads: 650,
    views: 2800,
    metrics: {
      "Credits Generated": "2.34M tCO2",
      "Revenue Generated": "₹468 Crores",
      "Projects": "1,850",
      "Verification Rate": "96.2%",
    },
    keyInsights: [
      "Organic farming contributes 45% of total credits",
      "Agroforestry projects showing highest per-acre yield",
      "Technology adoption reduced verification time by 60%",
      "International market demand increased by 28%",
    ],
  },
  {
    id: "financial-inclusion",
    title: "Financial Inclusion Progress",
    category: "Financial",
    type: "Monthly",
    lastUpdated: "2025-09-02",
    status: "Draft",
    description: "Progress tracking of financial inclusion initiatives in underserved areas",
    size: "3.1 MB", 
    downloads: 420,
    views: 1900,
    metrics: {
      "New Accounts": "285,000",
      "Digital Adoption": "78%",
      "Service Points": "12,500",
      "Transaction Volume": "₹8.2 Billion",
    },
    keyInsights: [
      "Mobile banking adoption up 52% in rural areas",
      "Women account holders increased by 38%",
      "Average transaction value increased by ₹1,200",
      "Service accessibility improved in 185 districts",
    ],
  },
]

const categories = [
  { id: "all", name: "All Reports", count: reports.length },
  { id: "Financial", name: "Financial", count: reports.filter(r => r.category === "Financial").length },
  { id: "Development", name: "Development", count: reports.filter(r => r.category === "Development").length },
  { id: "Environment", name: "Environment", count: reports.filter(r => r.category === "Environment").length },
]

const analyticsMetrics = [
  { label: "Total Reports", value: "156", growth: "+12", icon: FileText },
  { label: "Monthly Downloads", value: "8,250", growth: "+18%", icon: Download },
  { label: "Active Users", value: "2,840", growth: "+22%", icon: Users },
  { label: "Data Points", value: "1.2M", growth: "+8%", icon: BarChart3 },
]

const recentActivity = [
  {
    action: "Report Published",
    item: "Credit Disbursement Analysis - September 2025",
    time: "2 hours ago",
    user: "System",
    type: "publish",
  },
  {
    action: "Data Updated", 
    item: "Rural Infrastructure Database",
    time: "4 hours ago",
    user: "Analytics Team",
    type: "update",
  },
  {
    action: "Report Downloaded",
    item: "Carbon Credit Generation Report",
    time: "6 hours ago", 
    user: "Ministry of Agriculture",
    type: "download",
  },
  {
    action: "Dashboard Accessed",
    item: "Real-time Monitoring Dashboard",
    time: "8 hours ago",
    user: "NABARD Regional Office",
    type: "access",
  },
]

export default function ReportsAnalyticsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedReport, setSelectedReport] = React.useState<string | null>(null)
  const [dateRange, setDateRange] = React.useState("last-month")

  const filteredReports = reports.filter(report => {
    const categoryMatch = selectedCategory === "all" || report.category === selectedCategory
    const searchMatch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       report.description.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  })

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Header */}
        <div className="border-b glass">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Reports & Analytics</h1>
                <p className="text-muted-foreground text-lg">
                  Comprehensive reporting and data analytics for agricultural development
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Data
                </Button>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {reports.length} Reports Available
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Analytics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analyticsMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={`analytics-${index}`} className="p-6 glass">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="default" className="text-xs">
                      {metric.growth}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search reports and analytics..."
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
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reports List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-4">Available Reports</h2>
              {filteredReports.map((report) => (
                <Card key={report.id} className="glass">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          {report.category}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {report.type}
                        </Badge>
                        <Badge 
                          variant={report.status === 'Published' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {report.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated: {new Date(report.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Report Stats */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {report.size}
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-muted-foreground" />
                          {report.downloads.toLocaleString()} downloads
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                          {report.views.toLocaleString()} views
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 p-3 bg-muted/20 rounded-lg">
                        {Object.entries(report.metrics).map(([key, value], metricIndex) => (
                          <div key={`report-metric-${metricIndex}`} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Key Insights Preview */}
                      <div>
                        <h4 className="font-semibold mb-2">Key Insights</h4>
                        <div className="space-y-1">
                          {report.keyInsights.slice(0, 2).map((insight, insightIndex) => (
                            <div key={`insight-${insightIndex}`} className="flex items-start gap-2 text-sm">
                              <TrendingUp className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              {insight}
                            </div>
                          ))}
                        </div>
                        {report.keyInsights.length > 2 && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="mt-2 p-0 h-auto text-xs"
                            onClick={() => setSelectedReport(report.id)}
                          >
                            +{report.keyInsights.length - 2} more insights
                          </Button>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 group">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedReport(report.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, activityIndex) => (
                      <div key={`activity-${activityIndex}`} className="space-y-1">
                        <div className="flex items-start justify-between">
                          <div className="font-semibold text-sm">{activity.action}</div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                        </div>
                        <div className="text-sm text-muted-foreground">{activity.item}</div>
                        <div className="text-xs text-muted-foreground">by {activity.user}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Analytics */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Quick Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Report Downloads</span>
                        <span className="font-semibold">8,250</span>
                      </div>
                      <Progress value={82} className="h-2" />
                      <div className="text-xs text-muted-foreground">+18% from last month</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>User Engagement</span>
                        <span className="font-semibold">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                      <div className="text-xs text-muted-foreground">+5% from last month</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Accuracy</span>
                        <span className="font-semibold">98.7%</span>
                      </div>
                      <Progress value={98.7} className="h-2" />
                      <div className="text-xs text-muted-foreground">+1.2% from last month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Report Generation */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-lg">Generate Custom Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="report-type">Report Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="financial">Financial Analysis</SelectItem>
                          <SelectItem value="development">Development Impact</SelectItem>
                          <SelectItem value="environment">Environmental</SelectItem>
                          <SelectItem value="custom">Custom Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date-range">Date Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select date range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="last-quarter">Last Quarter</SelectItem>
                          <SelectItem value="last-year">Last Year</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Report View */}
          {selectedReport && (
            <Card className="mt-8 glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {reports.find(r => r.id === selectedReport)?.title} - Detailed Analysis
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedReport(null)}
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {(() => {
                  const report = reports.find(r => r.id === selectedReport)
                  if (!report) return null

                  return (
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="insights">Key Insights</TabsTrigger>
                        <TabsTrigger value="data">Data Summary</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="overview" className="mt-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Report Overview</h3>
                            <p className="text-muted-foreground">{report.description}</p>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Category</div>
                              <div className="font-semibold">{report.category}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Type</div>
                              <div className="font-semibold">{report.type}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Last Updated</div>
                              <div className="font-semibold">{new Date(report.lastUpdated).toLocaleDateString()}</div>
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground">Status</div>
                              <div className="font-semibold">{report.status}</div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="insights" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Complete Insights Analysis</h3>
                          <div className="grid gap-4">
                            {report.keyInsights.map((insight, insightIndex) => (
                              <div key={`detail-insight-${insightIndex}`} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-green-800 dark:text-green-200">{insight}</div>
                                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                                    Analysis based on verified data and statistical modeling
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="data" className="mt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Data Summary</h3>
                          <div className="grid lg:grid-cols-2 gap-6">
                            {Object.entries(report.metrics).map(([key, value], metricIndex) => (
                              <div key={`detail-data-${metricIndex}`} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                                <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="font-medium text-blue-800 dark:text-blue-200">{key}</div>
                                  <div className="text-xl font-bold text-blue-900 dark:text-blue-100">{value}</div>
                                  <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                                    Latest verified data with quality assurance
                                  </div>
                                </div>
                              </div>
                            ))}
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
    </ClientOnly>
  )
}
