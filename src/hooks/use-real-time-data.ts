"use client"

import { useState, useEffect, useCallback } from 'react'
import { WeatherData, ForecastData } from '@/types/weather'
import { SoilSensorData } from '@/types/iot'

// Custom hook for real-time weather data
export function useWeatherData(coordinates: { lat: number; lon: number }) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<ForecastData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherData = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`)
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }
      
      setWeather(data.current)
      setForecast(data.forecast)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }, [coordinates])

  useEffect(() => {
    fetchWeatherData()
    
    // Refresh weather data every 10 minutes
    const interval = setInterval(fetchWeatherData, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [fetchWeatherData])

  return { weather, forecast, loading, error, refetch: fetchWeatherData }
}

// Custom hook for real-time sensor data
export function useSensorData(sensorId: string) {
  const [sensorData, setSensorData] = useState<SoilSensorData | null>(null)
  const [history, setHistory] = useState<SoilSensorData[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // WebSocket connection for real-time updates
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/sensor/${sensorId}`)
    
    ws.onopen = () => {
      setIsConnected(true)
      setError(null)
    }
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        setSensorData(data)
        
        // Keep last 100 readings in history
        setHistory(prev => [...prev.slice(-99), data])
      } catch (err) {
        console.error('Error parsing sensor data:', err)
      }
    }
    
    ws.onerror = () => {
      setError('WebSocket connection failed')
      setIsConnected(false)
    }
    
    ws.onclose = () => {
      setIsConnected(false)
    }

    return () => {
      ws.close()
    }
  }, [sensorId])

  return { sensorData, history, isConnected, error }
}

// Custom hook for carbon credit data
export function useCarbonCredits(farmId: string) {
  const [credits, setCredits] = useState([])
  const [totalValue, setTotalValue] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCarbonCredits = async () => {
      try {
        const response = await fetch(`/api/carbon-credits/${farmId}`)
        const data = await response.json()
        
        setCredits(data.credits)
        setTotalValue(data.totalValue)
      } catch (error) {
        console.error('Error fetching carbon credits:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCarbonCredits()
  }, [farmId])

  return { credits, totalValue, loading }
}

// Custom hook for satellite imagery analysis
export function useSatelliteImagery(bbox: number[], dateRange: string[]) {
  const [imagery, setImagery] = useState(null)
  const [ndviData, setNdviData] = useState([])
  const [analysis, setAnalysis] = useState(null)
  const [processing, setProcessing] = useState(false)

  const analyzeImagery = useCallback(async () => {
    try {
      setProcessing(true)
      const response = await fetch('/api/satellite/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bbox, dateRange })
      })
      
      const data = await response.json()
      setImagery(data.imagery)
      setNdviData(data.ndvi)
      setAnalysis(data.analysis)
    } catch (error) {
      console.error('Error analyzing satellite imagery:', error)
    } finally {
      setProcessing(false)
    }
  }, [bbox, dateRange])

  useEffect(() => {
    analyzeImagery()
  }, [analyzeImagery])

  return { imagery, ndviData, analysis, processing, refresh: analyzeImagery }
}

// Custom hook for farm analytics
export function useFarmAnalytics(farmId: string) {
  const [analytics, setAnalytics] = useState({
    soilHealth: 0,
    cropYield: 0,
    carbonSequestration: 0,
    waterEfficiency: 0,
    overallScore: 0
  })
  const [trends, setTrends] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(`/api/analytics/${farmId}`)
        const data = await response.json()
        
        setAnalytics(data.metrics)
        setTrends(data.trends)
        setRecommendations(data.recommendations)
      } catch (error) {
        console.error('Error fetching farm analytics:', error)
      }
    }

    fetchAnalytics()
    
    // Refresh analytics every hour
    const interval = setInterval(fetchAnalytics, 60 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [farmId])

  return { analytics, trends, recommendations }
}

// Custom hook for notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)

  const addNotification = useCallback((notification: any) => {
    setNotifications(prev => [notification, ...prev.slice(0, 99)])
    setUnreadCount(prev => prev + 1)
  }, [])

  const markAsRead = useCallback((notificationId: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
    )
    setUnreadCount(prev => Math.max(0, prev - 1))
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
    setUnreadCount(0)
  }, [])

  useEffect(() => {
    // WebSocket for real-time notifications
    const ws = new WebSocket(`${process.env.NEXT_PUBLIC_WS_URL}/notifications`)
    
    ws.onmessage = (event) => {
      const notification = JSON.parse(event.data)
      addNotification(notification)
    }

    return () => ws.close()
  }, [addNotification])

  return {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead
  }
}
