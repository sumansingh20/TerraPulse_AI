// lib/satellite-service.ts
import { SatelliteImagery, NDVIData, LandUseChange } from '@/types/satellite'

export class SatelliteService {
  private sentinelApiKey: string
  private googleEarthEngineKey: string
  
  constructor(sentinelKey: string, geeKey: string) {
    this.sentinelApiKey = sentinelKey
    this.googleEarthEngineKey = geeKey
  }

  // Sentinel-2 Data Integration
  async getSentinel2Data(bbox: number[], date: string): Promise<SatelliteImagery> {
    const query = {
      bbox,
      datetime: date,
      collections: ['sentinel-2-l2a'],
      limit: 1
    }

    try {
      const response = await fetch('https://earth-search.aws.element84.com/v1/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query)
      })
      
      const data = await response.json()
      return this.processSentinelData(data.features[0])
    } catch (error) {
      console.error('Sentinel-2 API Error:', error)
      throw new Error('Failed to fetch satellite imagery')
    }
  }

  // Calculate NDVI from satellite bands
  async calculateNDVI(redBand: number[], nirBand: number[]): Promise<NDVIData[]> {
    return redBand.map((red, index) => {
      const nir = nirBand[index]
      const ndvi = (nir - red) / (nir + red)
      return {
        index,
        value: Math.max(-1, Math.min(1, ndvi)), // Clamp between -1 and 1
        healthStatus: this.getHealthStatus(ndvi),
        timestamp: new Date()
      }
    })
  }

  // Detect land use changes using Google Earth Engine
  async detectLandUseChanges(coordinates: number[][], timeRange: string[]): Promise<LandUseChange[]> {
    try {
      const earthEngineRequest = {
        expression: `
          var before = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
            .filterDate('${timeRange[0]}', '${timeRange[1]}')
            .filterBounds(geometry)
            .median();
          
          var after = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
            .filterDate('${timeRange[1]}', '${new Date().toISOString().split('T')[0]}')
            .filterBounds(geometry)
            .median();
          
          var difference = after.subtract(before);
          return difference;
        `,
        geometry: {
          type: 'Polygon',
          coordinates: [coordinates]
        }
      }

      // This would be a call to Google Earth Engine API
      // For now, returning mock data structure
      return this.getMockLandUseChanges()
    } catch (error) {
      console.error('Land Use Change Detection Error:', error)
      return []
    }
  }

  private processSentinelData(feature: any): SatelliteImagery {
    return {
      id: feature.id,
      date: new Date(feature.properties.datetime),
      cloudCover: feature.properties['eo:cloud_cover'],
      bands: {
        red: feature.assets.red?.href,
        green: feature.assets.green?.href,
        blue: feature.assets.blue?.href,
        nir: feature.assets.nir?.href
      },
      resolution: 10, // 10m for Sentinel-2
      bbox: feature.bbox
    }
  }

  private getHealthStatus(ndvi: number): string {
    if (ndvi < 0.2) return 'Poor'
    if (ndvi < 0.4) return 'Fair'
    if (ndvi < 0.6) return 'Good'
    return 'Excellent'
  }

  private getMockLandUseChanges(): LandUseChange[] {
    return [
      {
        id: 'change-001',
        location: { lat: 18.5204, lon: 73.8567 },
        changeType: 'forest-to-agriculture',
        area: 12.5,
        confidence: 0.87,
        detectionDate: new Date(),
        severity: 'medium'
      }
    ]
  }
}
