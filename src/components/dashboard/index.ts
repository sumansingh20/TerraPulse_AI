// Dashboard Components for TerraPulse AI Platform
export { RealTimeDashboard } from './real-time-farm-dashboard'
export { MetricCard, GlassCard, GradientCard, CardGrid } from './metric-cards'

// Export dashboard types
export type DashboardMetric = {
  title: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}
