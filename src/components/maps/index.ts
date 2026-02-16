// Map Components for TerraPulse AI Platform
export { RealInteractiveMap as SatelliteMapViewer } from './satellite-map-viewer'
export { OptimizedInteractiveMap as AgriculturalMapDashboard } from './agricultural-map-dashboard'  
export { EnhancedInteractiveMap as EnhancedFarmMonitor } from './enhanced-farm-monitor'
export { FallbackInteractiveMap as LightweightMapFallback } from './lightweight-map-fallback'

// Export types if needed
export type MapViewerProps = {
  farmData?: any[]
  satelliteLayer?: string
  showCarbonData?: boolean
}
