// types/weather.ts
export interface WeatherData {
  temperature: number
  humidity: number
  windSpeed: number
  visibility: number
  condition: string
  rainfall: number
  uvIndex: number
  timestamp: Date
}

export interface ForecastData {
  date: Date
  tempMax: number
  tempMin: number
  condition: string
  rainProbability: number
}

export interface SeasonalPrediction {
  season: string
  prediction: string
  confidence: number
  impact: string
  startDate: Date
  endDate: Date
}

export interface WeatherAlert {
  id: string
  type: 'rainfall' | 'temperature' | 'wind' | 'frost'
  severity: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  recommendation: string
  startTime: Date
  endTime: Date
  affectedRegions: string[]
}

export interface FarmingRecommendation {
  crop: string
  recommendation: string
  reason: string
  urgency: 'low' | 'medium' | 'high'
  validUntil: Date
  weatherCondition: string
}
