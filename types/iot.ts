// types/iot.ts
export interface SoilSensorData {
  sensorId: string
  location: {
    lat: number
    lon: number
    fieldName: string
  }
  timestamp: Date
  soilMoisture: number
  soilTemperature: number
  pH: number
  conductivity: number
  nitrogen: number
  phosphorus: number
  potassium: number
  batteryLevel: number
  signalStrength: number
}

export interface IrrigationData {
  zoneId: string
  zoneName: string
  isActive: boolean
  waterFlow: number
  duration: number
  soilMoisture: number
  scheduledTime: Date
  lastWatered: Date
}

export interface WeatherStationData {
  stationId: string
  location: {
    lat: number
    lon: number
    name: string
  }
  timestamp: Date
  temperature: number
  humidity: number
  windSpeed: number
  windDirection: number
  rainfall: number
  solarRadiation: number
  atmosphericPressure: number
  batteryVoltage: number
}

export interface SensorAlert {
  id: string
  sensorId: string
  type: 'low_battery' | 'connectivity_lost' | 'abnormal_reading'
  severity: 'low' | 'medium' | 'high'
  message: string
  timestamp: Date
  resolved: boolean
}
