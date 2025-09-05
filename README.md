# 🌱 TerraPulse AI - Agricultural Intelligence Platform

> **AI-Powered Agricultural Monitoring & Carbon Credits**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)](https://tailwindcss.com/)

## 🚀 **Quick Start**

```bash
# Install dependencies
pnpm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🎯 **Features**

- **🛰️ Satellite Monitoring**: Real-time agricultural land monitoring
- **🤖 AI Assistant**: Intelligent farming recommendations
- **📊 Predictive Analytics**: ML-powered crop and yield predictions
- **💰 Carbon Credits**: Automated carbon credit calculations
- **🗺️ Interactive Maps**: Live farm monitoring with Leaflet integration
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS
- **🎨 Modern UI**: Glass morphism and 3D animations

## 📁 **Project Structure**

```
TerraPulse_AI/
├── src/
│   ├── components/
│   │   ├── maps/                # Satellite & agricultural maps
│   │   ├── ai/                  # AI & ML components
│   │   ├── dashboard/           # Real-time dashboards
│   │   ├── agriculture/         # Agricultural tools
│   │   ├── finance/             # Carbon credits & finance
│   │   ├── satellite/           # Satellite data processing
│   │   ├── layout/              # Navigation & layout
│   │   ├── theme/               # Theme & styling
│   │   └── ui/                  # Reusable UI components
│   ├── hooks/                   # Custom React hooks
│   ├── utils/                   # Utility functions
│   └── types/                   # TypeScript definitions
├── app/                         # Next.js app directory
├── docs/                        # Documentation
└── public/                      # Static assets
```

## 🛠️ **Tech Stack**

### **Frontend**
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

### **Mapping & Geospatial**
- **React Leaflet**: Interactive maps
- **Leaflet**: Open-source mapping library
- **Satellite Imagery**: Real-time agricultural monitoring

### **UI/UX**
- **shadcn/ui**: Modern component library
- **Lucide Icons**: Beautiful icon set
- **Framer Motion**: Smooth animations
- **Glass Morphism**: Modern design patterns

### **Development**
- **PNPM**: Fast package manager
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks

## 🌟 **Key Components**

### **🗺️ Maps**
- `satellite-map-viewer.tsx` - Real interactive satellite maps
- `agricultural-map-dashboard.tsx` - Optimized farm monitoring
- `enhanced-farm-monitor.tsx` - Advanced monitoring features

### **🤖 AI**
- `intelligent-farm-assistant.tsx` - AI chatbot for farmers
- `predictive-analytics-engine.tsx` - ML predictions and insights

### **📊 Dashboard**
- `real-time-farm-dashboard.tsx` - Live metrics and KPIs
- `metric-cards.tsx` - 3D animated metric displays

### **💰 Finance**
- `carbon-credit-calculator.tsx` - Carbon credit calculations
- `blockchain-credit-verifier.tsx` - Blockchain verification

## 🔧 **Development**

### **Adding New Components**

```typescript
// 1. Create component in appropriate domain folder
src/components/maps/new-map-feature.tsx

// 2. Export from index file
// src/components/maps/index.ts
export { NewMapFeature } from './new-map-feature'

// 3. Use with clean imports
import { NewMapFeature } from '@/src/components/maps'
```

### **Import Patterns**

```typescript
// Dashboard components
import { RealTimeDashboard, MetricCard } from '@/src/components/dashboard'

// Map components
import { SatelliteMapViewer } from '@/src/components/maps'

// AI components
import { IntelligentFarmAssistant } from '@/src/components/ai'

// Layout components
import { MainNavigation } from '@/src/components/layout'

// Utils
import { cn } from '@/src/utils/class-utils'
```

## 📱 **Pages & Routes**

- `/` - Landing page with hero, features, and team
- `/demo` - Interactive platform demonstration
- `/about` - About TerraPulse AI
- `/contact` - Contact information
- `/pricing` - Pricing plans
- `/technology` - Technology overview

## 🎨 **Design System**

### **Colors**
- Primary: Emerald (`emerald-600`)
- Secondary: Green (`green-600`)
- Accent: Blue (`blue-500`)
- Background: Dynamic with glass effects

### **Typography**
- Headings: Bold, gradient text effects
- Body: Clean, readable typography
- Code: Monospace font

### **Components**
- Glass morphism cards
- 3D hover effects
- Smooth animations
- Responsive design

## 🚀 **Deployment**

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel --prod
```

## 📖 **Documentation**

- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Component Guide](./docs/COMPONENTS.md)
- [Development Setup](./docs/DEVELOPMENT.md)

## 🤝 **Team**

- **Suman** - AI & Tech Lead
- **Khushi** - UI/UX Lead  
- **Isha** - Research Lead
- **Aayush** - Finance Lead
- **Sachin** - Strategy Lead

## 📄 **License**

MIT License - see [LICENSE](./LICENSE) for details.

---

**🌱 Built with passion for sustainable agriculture and AI innovation**
