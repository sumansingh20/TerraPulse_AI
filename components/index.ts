// TerraPulse AI - Component Organization Index
// This file provides organized access to all components while maintaining backward compatibility

// =================
// MAPS & GEOSPATIAL
// =================
export { RealInteractiveMap as SatelliteMapViewer } from './real-interactive-map'
export { OptimizedInteractiveMap as AgriculturalMapDashboard } from './optimized-interactive-map'
export { EnhancedInteractiveMap as EnhancedFarmMonitor } from './enhanced-interactive-map'
export { FallbackInteractiveMap as LightweightMapFallback } from './fallback-interactive-map'

// =================
// AI & ANALYTICS
// =================
export { AIChatbot as IntelligentFarmAssistant } from './ai-chatbot'
export { AdvancedAnalytics as PredictiveAnalyticsEngine } from './advanced-analytics'

// =================
// DASHBOARD & METRICS
// =================
export { RealTimeDashboard as FarmDashboard } from './real-time-dashboard'
export { MetricCard, GlassCard, GradientCard, CardGrid } from './advanced-3d-card'

// =================
// AGRICULTURE & MONITORING
// =================
export { SoilHealthMonitor as SoilHealthAnalyzer } from './soil-health-monitor'
export { WeatherIntegration as WeatherDataIntegration } from './weather-integration'
export { EnhancedWeatherIntegration as AdvancedWeatherSystem } from './enhanced-weather-integration'

// =================
// FINANCE & CREDITS
// =================
export { FinancialAnalytics as CarbonCreditCalculator } from './financial-analytics'
export { BlockchainVerification as BlockchainCreditVerifier } from './blockchain-verification'

// =================
// SATELLITE & IMAGERY
// =================
export { SatelliteImageryAnalysis as ImageryProcessor } from './satellite-imagery-analysis'

// =================
// LAYOUT & NAVIGATION
// =================
export { MainNavigation } from './main-navigation'
export { ClientOnly as ClientWrapper } from './client-only'

// =================
// THEME & STYLING
// =================
export { ThemeProvider } from './theme-provider'
export { AdvancedThemeProvider } from './advanced-theme-provider'
export { AdvancedThemeSelector as ThemeSelector } from './advanced-theme-selector'

// =================
// ORIGINAL EXPORTS (Backward Compatibility)
// =================
export { RealInteractiveMap } from './real-interactive-map'
export { OptimizedInteractiveMap } from './optimized-interactive-map'
export { AIChatbot } from './ai-chatbot'
export { RealTimeDashboard } from './real-time-dashboard'
export { AdvancedThemeSelector } from './advanced-theme-selector'
export { ClientOnly } from './client-only'
export { MainNavigation } from './main-navigation'

// =================
// TYPE DEFINITIONS
// =================
export type MapViewerProps = {
  farmData?: any[]
  satelliteLayer?: string
  showCarbonData?: boolean
}

export type DashboardMetric = {
  title: string
  value: string | number
  unit?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

export type AIAssistantMessage = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export type NavigationItem = {
  href: string
  label: string
  icon?: any
}
