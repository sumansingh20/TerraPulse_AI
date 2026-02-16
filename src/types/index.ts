export type UserRole = 'farmer' | 'company' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

export interface DashboardStats {
  totalUsers: number
  activeUsers: number
  systemUptime: number
  totalRevenue: string
}

export interface ActivityItem {
  id: number
  type: string
  message: string
  time: string
  priority?: string
}

export interface FarmData {
  totalArea: number
  cropHealth: number
  yield: number
  carbonCredits: number
}

export interface WeatherData {
  temperature: number
  humidity: number
  rainfall: number
  windSpeed: number
}
