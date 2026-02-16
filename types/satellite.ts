// types/satellite.ts
export interface SatelliteImagery {
  id: string
  date: Date
  cloudCover: number
  bands: {
    red?: string
    green?: string
    blue?: string
    nir?: string
  }
  resolution: number
  bbox: number[]
}

export interface NDVIData {
  index: number
  value: number
  healthStatus: string
  timestamp: Date
}

export interface LandUseChange {
  id: string
  location: {
    lat: number
    lon: number
  }
  changeType: string
  area: number
  confidence: number
  detectionDate: Date
  severity: 'low' | 'medium' | 'high'
}

export interface CropHealthMetric {
  metric: string
  value: number
  status: string
  trend: 'up' | 'down' | 'stable'
  color: string
}

export interface FieldAnalysis {
  fieldId: string
  totalArea: number
  healthyArea: number
  stressedArea: number
  bareArea: number
  averageNDVI: number
  changeFromLastMonth: number
  cropStage: string
  estimatedYield: string
}
