// Layout Components for TerraPulse AI Platform
export { MainNavigation } from './main-navigation'
export { ClientOnly as ClientWrapper } from './client-wrapper'

// Export layout types
export type NavigationItem = {
  href: string
  label: string
  icon?: any
}
