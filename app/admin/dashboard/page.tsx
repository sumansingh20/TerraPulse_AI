"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Users,
  Building,
  Database,
  Activity,
  AlertTriangle,
  Settings,
  LogOut,
  UserCheck,
  Ban,
  FileText,
  Globe,
  Server,
  Lock,
  TrendingUp,
  BarChart3,
  Eye,
  UserPlus,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [systemStats] = useState({
    totalUsers: 3847,
    activeUsers: 2924,
    totalCompanies: 24,
    systemUptime: 99.98,
    dataStorage: "2.4 TB",
    dailyRequests: "1.2M",
  })

  const [userManagement] = useState({
    pendingApprovals: 47,
    reportedIssues: 12,
    bannedUsers: 3,
    newRegistrations: 156,
  })

  const [recentActions] = useState([
    {
      id: 1,
      action: "User Approved",
      details: "Company registration approved for AgroTech Solutions",
      time: "15 minutes ago",
      type: "success",
    },
    {
      id: 2,
      action: "Security Alert",
      details: "Multiple failed login attempts detected",
      time: "1 hour ago",
      type: "warning",
    },
    {
      id: 3,
      action: "System Update",
      details: "Database backup completed successfully",
      time: "2 hours ago",
      type: "info",
    },
  ])

  const handleLogout = () => {
    window.location.href = '/auth/login'
  }

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-500'
      case 'warning':
        return 'bg-yellow-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b glass sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-red-500" />
            <div>
              <span className="text-2xl font-bold gradient-text">TerraPulse AI</span>
              <p className="text-xs text-muted-foreground">Admin Control Panel</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="glass border-red-500/30 text-red-500">
              <Shield className="mr-2 h-4 w-4" />
              Administrator
            </Badge>
            <Button variant="outline" size="sm" className="glass bg-transparent">
              <AlertTriangle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="glass bg-transparent">
              <Settings className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="glass bg-transparent hover:bg-red-500/10 hover:border-red-500/50"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            System Administration 🛡️
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage platform security, users, and system operations
          </p>
        </div>

        {/* System Health Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass border-red-500/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
                <Users className="h-4 w-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.totalUsers.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {systemStats.activeUsers.toLocaleString()} active today
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-red-500/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">System Uptime</CardTitle>
                <Activity className="h-4 w-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.systemUptime}%</div>
              <Progress value={systemStats.systemUptime} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="glass border-red-500/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Data Storage</CardTitle>
                <Database className="h-4 w-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.dataStorage}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {systemStats.dailyRequests} daily requests
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-red-500/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">Companies</CardTitle>
                <Building className="h-4 w-4 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.totalCompanies}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3 this month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - User Management */}
          <div className="lg:col-span-2 space-y-8">
            {/* User Management Panel */}
            <Card className="glass border-red-500/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="mr-3 h-5 w-5 text-red-500" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <div className="flex items-center">
                        <UserPlus className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm font-medium">Pending Approvals</span>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">
                        {userManagement.pendingApprovals}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                        <span className="text-sm font-medium">Reported Issues</span>
                      </div>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-600 border-red-500/30">
                        {userManagement.reportedIssues}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-center">
                        <UserCheck className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm font-medium">New Registrations</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
                        {userManagement.newRegistrations}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-500/10 border border-gray-500/30 rounded-lg">
                      <div className="flex items-center">
                        <Ban className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-sm font-medium">Banned Users</span>
                      </div>
                      <Badge variant="secondary" className="bg-gray-500/20 text-gray-600 border-gray-500/30">
                        {userManagement.bannedUsers}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <Button className="glass bg-red-500/10 hover:bg-red-500/20 border-red-500/30 text-red-600">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Review Approvals
                  </Button>
                  <Button className="glass bg-transparent hover:bg-red-500/10">
                    <Eye className="mr-2 h-4 w-4" />
                    Monitor Activity
                  </Button>
                  <Button className="glass bg-transparent hover:bg-red-500/10">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Analytics */}
            <Card className="glass border-red-500/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <BarChart3 className="mr-3 h-5 w-5 text-red-500" />
                  System Analytics
                </CardTitle>
                <CardDescription>
                  Platform usage and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm text-muted-foreground">Server Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>CPU Usage</span>
                        <span>34%</span>
                      </div>
                      <Progress value={34} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Memory Usage</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Storage Usage</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm text-muted-foreground">Security Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SSL Certificate</span>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Valid</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Firewall Status</span>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/30">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Last Security Scan</span>
                        <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">2 hrs ago</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Actions and Monitoring */}
          <div className="space-y-8">
            {/* Recent Admin Actions */}
            <Card className="glass border-red-500/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Activity className="mr-3 h-5 w-5 text-red-500" />
                  Recent Actions
                </CardTitle>
                <CardDescription>
                  Latest administrative activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions.map((action) => (
                    <div key={action.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(action.type)}`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{action.action}</p>
                        <p className="text-xs text-muted-foreground">{action.details}</p>
                        <p className="text-xs text-muted-foreground mt-1">{action.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Admin Tools */}
            <Card className="glass border-red-500/30">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="mr-3 h-5 w-5 text-red-500" />
                  Admin Tools
                </CardTitle>
                <CardDescription>
                  System management and configuration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start glass bg-transparent hover:bg-red-500/10">
                  <Lock className="mr-3 h-4 w-4" />
                  Security Settings
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-red-500/10">
                  <Server className="mr-3 h-4 w-4" />
                  Server Management
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-red-500/10">
                  <Database className="mr-3 h-4 w-4" />
                  Database Admin
                </Button>
                <Button className="w-full justify-start glass bg-transparent hover:bg-red-500/10">
                  <Globe className="mr-3 h-4 w-4" />
                  Global Settings
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Actions */}
            <Card className="glass border-red-500/50 bg-gradient-to-r from-red-500/5 to-orange-500/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-red-600 flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Emergency Controls
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Critical system management actions
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full glass bg-transparent border-red-500/50 text-red-600 hover:bg-red-500/10"
                  >
                    System Maintenance Mode
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full glass bg-transparent border-red-500/50 text-red-600 hover:bg-red-500/10"
                  >
                    Emergency Backup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            TerraPulse AI Admin Dashboard | 
            <Link href="/privacy" className="text-red-500 hover:text-red-400 ml-1">
              Admin Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
