"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/src/utils"

interface MetricCardProps {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    label: string
    positive: boolean
  }
  progress?: number
  className?: string
}

export function MetricCard({
  title,
  value,
  description,
  icon,
  trend,
  progress,
  className
}: MetricCardProps) {
  return (
    <Card className={cn("glass border-primary/30", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-2">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </div>
        
        {description && (
          <p className="text-xs text-muted-foreground mb-2">{description}</p>
        )}
        
        {trend && (
          <div className={cn(
            "flex items-center text-xs",
            trend.positive ? "text-green-600" : "text-red-600"
          )}>
            <span className="mr-1">
              {trend.positive ? "↗" : "↘"}
            </span>
            {trend.value}% {trend.label}
          </div>
        )}
        
        {progress !== undefined && (
          <Progress value={progress} className="mt-2 h-2" />
        )}
      </CardContent>
    </Card>
  )
}

interface DashboardGridProps {
  children: React.ReactNode
  columns?: number
  className?: string
}

export function DashboardGrid({ 
  children, 
  columns = 4, 
  className 
}: DashboardGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
  }
  
  return (
    <div className={cn("grid gap-6", gridCols[columns as keyof typeof gridCols], className)}>
      {children}
    </div>
  )
}

interface ActivityFeedProps {
  activities: Array<{
    id: number | string
    type: string
    message: string
    time: string
    priority?: string
  }>
  className?: string
}

export function ActivityFeed({ activities, className }: ActivityFeedProps) {
  const getPriorityColor = (priority?: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-blue-500'
    }
  }

  return (
    <Card className={cn("glass border-primary/30", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
              <div className={cn("w-2 h-2 rounded-full mt-2", getPriorityColor(activity.priority))}></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.message}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                  {activity.priority && (
                    <Badge variant="secondary" className="text-xs">
                      {activity.priority}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
