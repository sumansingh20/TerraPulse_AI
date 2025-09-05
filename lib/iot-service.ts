// lib/iot-service.ts
import { SoilSensorData, IrrigationData, WeatherStationData } from '@/types/iot'

export class IoTService {
  private mqttClient: any
  private apiEndpoint: string

  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint
  }

  // Real-time soil sensor data
  async getSoilSensorData(sensorId: string): Promise<SoilSensorData> {
    try {
      const response = await fetch(`${this.apiEndpoint}/sensors/soil/${sensorId}`)
      const data = await response.json()
      
      return {
        sensorId: data.id,
        location: data.location,
        timestamp: new Date(data.timestamp),
        soilMoisture: data.moisture,
        soilTemperature: data.temperature,
        pH: data.ph,
        conductivity: data.ec,
        nitrogen: data.nutrients.n,
        phosphorus: data.nutrients.p,
        potassium: data.nutrients.k,
        batteryLevel: data.battery,
        signalStrength: data.signal
      }
    } catch (error) {
      console.error('IoT Sensor Error:', error)
      throw new Error('Failed to fetch sensor data')
    }
  }

  // WebSocket connection for real-time updates
  connectToRealTimeUpdates(onDataReceived: (data: any) => void) {
    const ws = new WebSocket(`wss://${this.apiEndpoint.replace('https://', '')}/ws`)
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      onDataReceived(data)
    }

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error)
    }

    return ws
  }

  // Smart irrigation system integration
  async getIrrigationStatus(farmId: string): Promise<IrrigationData[]> {
    try {
      const response = await fetch(`${this.apiEndpoint}/irrigation/${farmId}`)
      const data = await response.json()
      
      return data.zones.map((zone: any) => ({
        zoneId: zone.id,
        zoneName: zone.name,
        isActive: zone.active,
        waterFlow: zone.flow,
        duration: zone.duration,
        soilMoisture: zone.moisture,
        scheduledTime: new Date(zone.scheduled),
        lastWatered: new Date(zone.lastWatered)
      }))
    } catch (error) {
      console.error('Irrigation API Error:', error)
      return []
    }
  }

  // Weather station data integration
  async getWeatherStationData(stationId: string): Promise<WeatherStationData> {
    try {
      const response = await fetch(`${this.apiEndpoint}/weather-station/${stationId}`)
      const data = await response.json()
      
      return {
        stationId: data.id,
        location: data.location,
        timestamp: new Date(data.timestamp),
        temperature: data.temperature,
        humidity: data.humidity,
        windSpeed: data.windSpeed,
        windDirection: data.windDirection,
        rainfall: data.rainfall,
        solarRadiation: data.solarRadiation,
        atmosphericPressure: data.pressure,
        batteryVoltage: data.battery
      }
    } catch (error) {
      console.error('Weather Station Error:', error)
      throw new Error('Failed to fetch weather station data')
    }
  }

  // Send control commands to irrigation system
  async controlIrrigation(zoneId: string, action: 'start' | 'stop', duration?: number) {
    try {
      const response = await fetch(`${this.apiEndpoint}/irrigation/control`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          zoneId,
          action,
          duration
        })
      })
      
      return await response.json()
    } catch (error) {
      console.error('Irrigation Control Error:', error)
      throw new Error('Failed to control irrigation')
    }
  }
}
