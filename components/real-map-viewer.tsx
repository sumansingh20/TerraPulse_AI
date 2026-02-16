"use client"

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Leaf,
  BarChart3,
  Sun,
  Droplets,
  Eye,
  Activity,
  CheckCircle2
} from "lucide-react"

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface RealMapViewerProps {
  selectedLayer: string
  farmMarkers: Array<{
    id: number
    lat: number
    lng: number
    name: string
    crop: string
    health: number
  }>
  liveData: {
    carbonSequestration: number
    soilHealth: number
    temperature: number
    humidity: number
    windSpeed: number
    rainfall: number
  }
}

// Custom map controls component
function MapControls({ selectedLayer, liveData }: { selectedLayer: string; liveData: any }) {
  const map = useMap()

  useEffect(() => {
    // Change tile layer based on selected layer
    const tileUrl = selectedLayer === 'satellite' 
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : selectedLayer === 'terrain'
      ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

    // Remove existing tile layers and add new one
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer)
      }
    })

    L.tileLayer(tileUrl, {
      maxZoom: 19,
      attribution: selectedLayer === 'satellite' 
        ? '&copy; Esri, Maxar, Earthstar Geographics'
        : selectedLayer === 'terrain'
        ? '&copy; OpenTopoMap contributors'
        : '&copy; OpenStreetMap contributors'
    }).addTo(map)
  }, [selectedLayer, map])

  return null
}

export default function RealMapViewer({ selectedLayer, farmMarkers, liveData }: RealMapViewerProps) {
  const mapRef = useRef<L.Map | null>(null)

  // Create custom icons for different farm health levels
  const createCustomIcon = (health: number) => {
    const color = health > 90 ? '#22c55e' : health > 80 ? '#eab308' : '#ef4444'
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          background-color: ${color};
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 2s infinite;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
          "></div>
        </div>
        <style>
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 ${color}40; }
            70% { box-shadow: 0 0 0 10px ${color}00; }
            100% { box-shadow: 0 0 0 0 ${color}00; }
          }
        </style>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })
  }

  return (
    <div className="h-full w-full relative">
      {/* Loading CSS for Leaflet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={6}
        className="h-full w-full"
        ref={mapRef}
      >
        <MapControls selectedLayer={selectedLayer} liveData={liveData} />
        
        {/* Farm markers */}
        {farmMarkers.map((farm) => (
          <Marker 
            key={farm.id} 
            position={[farm.lat, farm.lng]}
            icon={createCustomIcon(farm.health)}
          >
            <Popup className="custom-popup">
              <div className="p-3 min-w-[200px]">
                <h4 className="font-semibold text-sm text-gray-900">{farm.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{farm.crop}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs">Health:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        farm.health > 90 ? 'bg-green-500' : 
                        farm.health > 80 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${farm.health}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium">{farm.health}%</span>
                </div>
                <div className="text-xs text-gray-600">
                  Status: <span className={`font-medium ${
                    farm.health > 90 ? 'text-green-600' : 
                    farm.health > 80 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {farm.health > 90 ? 'Excellent' : farm.health > 80 ? 'Good' : 'Needs Attention'}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Live Data Overlays */}
      <div className="absolute top-4 left-4 z-[1000]">
        <div className="glass p-3 rounded-lg border border-primary/30 space-y-2 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-green-500" />
            <span className="text-xs text-gray-600">Carbon Sequestration</span>
          </div>
          <div className="text-lg font-bold text-green-500">
            +{liveData.carbonSequestration.toFixed(1)} tCO2/ha
          </div>
          <div className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-[1000]">
        <div className="glass p-3 rounded-lg border border-blue-500/30 space-y-2 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-500" />
            <span className="text-xs text-gray-600">Soil Health Index</span>
          </div>
          <div className="text-lg font-bold text-blue-500">
            {liveData.soilHealth.toFixed(0)}/100
          </div>
          <div className="text-xs text-green-600">Excellent Condition</div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-[1000]">
        <div className="glass p-3 rounded-lg border border-orange-500/30 space-y-2 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-orange-500" />
            <span className="text-xs text-gray-600">Weather Conditions</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>Temp: {liveData.temperature.toFixed(0)}°C</div>
            <div>Humidity: {liveData.humidity.toFixed(0)}%</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-[1000]">
        <div className="glass p-3 rounded-lg border border-primary/30 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="h-4 w-4 text-primary" />
            <span className="text-xs text-gray-600">Monitoring Status</span>
          </div>
          <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-600 border border-green-500/30">
            <Activity className="h-3 w-3 mr-1 animate-pulse" />
            Live Active
          </div>
        </div>
      </div>
    </div>
  )
}
