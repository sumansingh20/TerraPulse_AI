# TerraPulse AI - Project Structure

## 🏗️ **Organized Architecture**

This project has been restructured for better maintainability, scalability, and developer experience.

## 📁 **Folder Structure**

```
TerraPulse_AI/
├── src/                          # Source code (organized by domain)
│   ├── components/               # React components
│   │   ├── maps/                # Map & geospatial components
│   │   │   ├── satellite-map-viewer.tsx
│   │   │   ├── agricultural-map-dashboard.tsx
│   │   │   ├── enhanced-farm-monitor.tsx
│   │   │   ├── lightweight-map-fallback.tsx
│   │   │   └── index.ts
│   │   ├── dashboard/           # Dashboard & metrics components
│   │   │   ├── real-time-farm-dashboard.tsx
│   │   │   ├── metric-cards.tsx
│   │   │   └── index.ts
│   │   ├── ai/                  # AI & machine learning components
│   │   │   ├── intelligent-farm-assistant.tsx
│   │   │   ├── predictive-analytics-engine.tsx
│   │   │   └── index.ts
│   │   ├── agriculture/         # Agricultural domain components
│   │   │   ├── soil-health-analyzer.tsx
│   │   │   ├── weather-data-integration.tsx
│   │   │   ├── advanced-weather-system.tsx
│   │   │   └── index.ts
│   │   ├── satellite/           # Satellite data components
│   │   │   ├── imagery-processor.tsx
│   │   │   └── index.ts
│   │   ├── finance/             # Financial & carbon credit components
│   │   │   ├── carbon-credit-calculator.tsx
│   │   │   ├── blockchain-credit-verifier.tsx
│   │   │   └── index.ts
│   │   ├── theme/               # Theme & styling components
│   │   │   ├── theme-provider.tsx
│   │   │   ├── advanced-theme-provider.tsx
│   │   │   ├── theme-selector.tsx
│   │   │   └── index.ts
│   │   ├── layout/              # Layout & navigation components
│   │   │   ├── main-navigation.tsx
│   │   │   ├── client-wrapper.tsx
│   │   │   └── index.ts
│   │   └── ui/                  # Reusable UI components
│   │       └── [shadcn/ui components]
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Utility functions
│   │   └── class-utils.ts
│   └── types/                   # TypeScript type definitions
├── app/                         # Next.js app directory
│   ├── page.tsx                # Main landing page
│   ├── layout.tsx              # Root layout
│   └── [routes]/               # Application routes
├── docs/                        # Documentation
│   ├── README.md
│   └── [other docs]
├── public/                      # Static assets
└── [config files]
```

## 🎯 **Component Organization**

### **Maps** (`src/components/maps/`)
- **satellite-map-viewer.tsx**: Real interactive map with Leaflet
- **agricultural-map-dashboard.tsx**: Optimized farm monitoring dashboard
- **enhanced-farm-monitor.tsx**: Advanced farm monitoring features
- **lightweight-map-fallback.tsx**: Performance fallback option

### **AI** (`src/components/ai/`)
- **intelligent-farm-assistant.tsx**: AI-powered chatbot for farmers
- **predictive-analytics-engine.tsx**: ML predictions and insights

### **Agriculture** (`src/components/agriculture/`)
- **soil-health-analyzer.tsx**: Soil monitoring and analysis
- **weather-data-integration.tsx**: Weather API integration
- **advanced-weather-system.tsx**: Enhanced weather features

### **Dashboard** (`src/components/dashboard/`)
- **real-time-farm-dashboard.tsx**: Live farm metrics
- **metric-cards.tsx**: 3D animated metric displays

### **Finance** (`src/components/finance/`)
- **carbon-credit-calculator.tsx**: Carbon credit calculations
- **blockchain-credit-verifier.tsx**: Blockchain verification

## 🚀 **Import Examples**

### **Clean Imports with New Structure:**

```typescript
// Dashboard components
import { RealTimeDashboard, MetricCard } from '@/src/components/dashboard'

// Map components  
import { SatelliteMapViewer } from '@/src/components/maps'

// AI components
import { IntelligentFarmAssistant } from '@/src/components/ai'

// Layout components
import { MainNavigation, ClientWrapper } from '@/src/components/layout'

// Utils
import { cn } from '@/src/utils/class-utils'
```

## 🔧 **Benefits of New Structure**

1. **🎯 Domain Separation**: Components grouped by functionality
2. **📦 Better Imports**: Cleaner import statements
3. **🔍 Easy Discovery**: Intuitive file locations
4. **⚡ Scalability**: Easy to add new features
5. **🧪 Testing**: Organized test structure
6. **📚 Documentation**: Clear component organization

## 🛠️ **Development Workflow**

1. **Find Components**: Navigate to domain-specific folders
2. **Add Features**: Create in appropriate domain folder
3. **Import**: Use clean imports from index files
4. **Maintain**: Follow established patterns

## 📱 **Component Naming Convention**

- **File Names**: `kebab-case-descriptive.tsx`
- **Component Names**: `PascalCaseDescriptive`
- **Export Names**: Descriptive and domain-specific

## 🎨 **UI Components**

All shadcn/ui components remain in `src/components/ui/` for consistency with the design system.

---

**Next Steps**: All import paths have been updated to use the new structure. The development server should work seamlessly with these changes.
