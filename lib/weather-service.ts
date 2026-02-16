// lib/weather-service.ts
import { WeatherData, ForecastData } from '@/types/weather'

const WEATHER_API_BASE = 'https://api.openweathermap.org/data/2.5'
const IMD_API_BASE = 'https://api.imd.gov.in/v1'

export class WeatherService {
  private apiKey: string
  
  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getCurrentWeather(lat: number, lon: number): Promise<WeatherData> {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      )
      const data = await response.json()
      
      return {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed * 3.6, // Convert m/s to km/h
        visibility: data.visibility / 1000, // Convert m to km
        condition: data.weather[0].main,
        rainfall: data.rain?.['1h'] || 0,
        uvIndex: await this.getUVIndex(lat, lon),
        timestamp: new Date()
      }
    } catch (error) {
      console.error('Weather API Error:', error)
      throw new Error('Failed to fetch weather data')
    }
  }

  async getForecast(lat: number, lon: number): Promise<ForecastData[]> {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
      )
      const data = await response.json()
      
      return data.list.slice(0, 5).map((item: any) => ({
        date: new Date(item.dt * 1000),
        tempMax: item.main.temp_max,
        tempMin: item.main.temp_min,
        condition: item.weather[0].main,
        rainProbability: item.pop * 100
      }))
    } catch (error) {
      console.error('Forecast API Error:', error)
      throw new Error('Failed to fetch forecast data')
    }
  }

  private async getUVIndex(lat: number, lon: number): Promise<number> {
    try {
      const response = await fetch(
        `${WEATHER_API_BASE}/uvi?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
      )
      const data = await response.json()
      return data.value
    } catch {
      return 0
    }
  }

  // Integrate with Indian Meteorological Department (IMD)
  async getIMDData(district: string): Promise<any> {
    try {
      const response = await fetch(`${IMD_API_BASE}/weather/${district}`)
      return await response.json()
    } catch (error) {
      console.error('IMD API Error:', error)
      return null
    }
  }
}
