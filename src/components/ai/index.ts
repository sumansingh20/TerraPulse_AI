// AI Components for TerraPulse AI Platform
export { AIChatbot as IntelligentFarmAssistant } from './intelligent-farm-assistant'
export { AdvancedAnalytics as PredictiveAnalyticsEngine } from './predictive-analytics-engine'

// Export AI types
export type AIAssistantMessage = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}
