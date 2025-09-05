# 🌱 TerraPulse AI - Agricultural Intelligence Platform

> **AI-Powered Agricultural Monitoring & Carbon Credits with Role-Based Authentication**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)](https://tailwindcss.com/)
[![Authentication](https://img.shields.io/badge/Auth-Role--Based-green)](https://github.com)

## 🚀 **Quick Start**

```bash
# Install dependencies
pnpm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🔐 **Demo Access (Hackathon Ready)**

🌐 **Live Demo**: [https://terrapulse-ai.netlify.app](https://terrapulse-ai.netlify.app)

Access the platform with demo credentials:

```
🌱 Farmer Access:
Email: demo@farmer.com
Password: demo123
Role: Farmer

🏢 Company Access:  
Email: demo@company.com
Password: demo123
Role: Company

🛡️ Admin Access:
Email: demo@admin.com
Password: demo123
Role: Admin
```

### **🎯 Quick Demo Steps:**
1. Visit [https://terrapulse-ai.netlify.app/auth/login](https://terrapulse-ai.netlify.app/auth/login)
2. Click any of the "Demo" buttons to auto-fill credentials
3. Select your desired role (Farmer/Company/Admin)
4. Click "Sign In" to access the role-specific dashboard

**Note**: All demo accounts use the password `demo123` for easy access during presentations.

## 🎯 **Features**

### **🔐 Authentication System**
- **Role-Based Access Control**: Farmer, Company, Admin roles
- **Secure Login/Register**: Complete authentication flow
- **Password Recovery**: Forgot password functionality
- **Demo Access**: Quick login for presentations
- **Route Protection**: Middleware-based security
- **Session Management**: Cookie-based authentication

### **🌱 Farmer Dashboard**
- **Real-time Weather**: Live weather monitoring
- **Farm Analytics**: Crop health and yield predictions
- **Interactive Maps**: Satellite monitoring integration
- **Alert System**: Smart notifications and warnings
- **Carbon Tracking**: Automated carbon credit calculations

### **🏢 Company Dashboard**  
- **Platform Analytics**: User engagement metrics
- **Revenue Tracking**: Business performance KPIs
- **Regional Insights**: Geographic performance data
- **Team Management**: Collaboration tools
- **Growth Metrics**: Platform expansion analytics

### **🛡️ Admin Dashboard**
- **User Management**: Account approvals and moderation
- **System Monitoring**: Health and performance metrics
- **Security Controls**: Access management and logs
- **Platform Oversight**: Global system administration
- **Emergency Controls**: Critical system management

### **🚀 Core Features**
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
├── app/
│   ├── auth/                    # Authentication pages
│   │   ├── login/              # Login page with role selection
│   │   ├── register/           # Registration with validation
│   │   └── forgot-password/    # Password recovery
│   ├── farmer/                 # Farmer-specific pages
│   │   └── dashboard/          # Farmer dashboard
│   ├── company/                # Company-specific pages
│   │   └── dashboard/          # Company dashboard
│   ├── admin/                  # Admin-specific pages
│   │   └── dashboard/          # Admin control panel
│   ├── api/                    # API routes
│   │   └── contact/            # Contact form endpoint
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── demo/                   # Demo page
│   ├── pricing/                # Pricing page
│   ├── technology/             # Technology page
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── interactive-map.tsx     # Interactive map component
│   ├── real-time-dashboard.tsx # Dashboard components
│   ├── advanced-analytics.tsx  # Analytics components
│   ├── ai-chatbot.tsx         # AI assistant
│   └── nabard-tools.tsx       # NABARD integration
├── lib/
│   ├── auth.tsx               # Authentication context
│   └── utils.ts               # Utility functions
├── middleware.ts              # Route protection middleware
├── hooks/                     # Custom React hooks
├── public/                    # Static assets
└── styles/                    # Additional styles
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

## � **Authentication & Security**

### **Role-Based Access Control**
- **Three User Types**: Farmer, Company Team Member, Administrator
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Secure cookie-based authentication
- **Demo Mode**: Quick access for hackathon presentations

### **Security Features**
- **Route Middleware**: Automatic role verification
- **Password Recovery**: Email-based password reset flow
- **Form Validation**: Comprehensive client-side validation
- **CSRF Protection**: Built-in Next.js security features

### **Authentication Flow**
```typescript
// Login with role selection
const success = await login(email, password, role)
if (success) {
  // Redirect to appropriate dashboard based on role
  router.push(`/${role}/dashboard`)
}

// Access protected routes
// Middleware automatically validates user role
// Redirects to login if unauthorized
```

## �🔧 **Development**

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

### **🔐 Authentication Routes**
- `/auth/login` - User login with role selection (Farmer/Company/Admin)
- `/auth/register` - User registration with role-specific fields
- `/auth/forgot-password` - Password recovery flow

### **🌱 Farmer Routes** (Protected)
- `/farmer/dashboard` - Real-time farm monitoring dashboard
- `/farmer/analytics` - Crop analytics and predictions
- `/farmer/carbon-credits` - Carbon credit tracking

### **🏢 Company Routes** (Protected)
- `/company/dashboard` - Platform analytics and metrics
- `/company/users` - User management interface
- `/company/reports` - Business intelligence reports

### **🛡️ Admin Routes** (Protected)
- `/admin/dashboard` - System administration panel
- `/admin/users` - Global user management
- `/admin/security` - Security monitoring and logs
- `/admin/system` - System health and maintenance

### **🌍 Public Routes**
- `/` - Landing page with hero, features, and team
- `/demo` - Interactive platform demonstration
- `/about` - About TerraPulse AI
- `/contact` - Contact information
- `/pricing` - Pricing plans
- `/technology` - Technology overview
- `/team` - Team information
- `/careers` - Career opportunities
- `/press` - Press releases and media

### **🔌 API Routes**
- `/api/contact` - Contact form submission endpoint
- `/api/auth/login` - Authentication endpoint (planned)
- `/api/auth/register` - User registration endpoint (planned)
- `/api/farmer/dashboard` - Farmer dashboard data (planned)
- `/api/company/analytics` - Company analytics data (planned)
- `/api/admin/system` - System administration APIs (planned)

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

## 🚀 **Deployment & Hackathon Ready**

### **🌐 Live Demo**
**Production URL**: [https://terrapulse-ai.netlify.app](https://terrapulse-ai.netlify.app)

The application is automatically deployed to Netlify on every push to the master branch.

### **Netlify Deployment**

The project is configured for automatic deployment:

```bash
# Automatic deployment on push
git add .
git commit -m "Your changes"
git push origin master
# Netlify will automatically detect and deploy changes
```

### **Manual Deployment**

```bash
# Build for production
npm run build

# Deploy to Netlify using CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=out

# Or deploy to Vercel
npx vercel --prod
```

### **Build Configuration**
- **Static Export**: Configured for static site deployment
- **Output Directory**: `out/` (for static hosting)
- **Build Command**: `npm run build`
- **Node Version**: 18.x or higher

### **Production Deployment**

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel --prod

# Deploy to Netlify
npm run build && netlify deploy --prod
```

### **Hackathon Demo Setup**

```bash
# Quick setup for presentation
git clone https://github.com/sumansingh20/TerraPulse_AI
cd TerraPulse_AI
pnpm install
npm run dev

# Open http://localhost:3000
# Use demo credentials for quick access
```

### **Demo Presentation Flow**
1. **Landing Page** - Show platform overview and features
2. **Authentication** - Demonstrate role-based login system
3. **Farmer Dashboard** - Real-time monitoring and AI features
4. **Company Dashboard** - Business analytics and metrics
5. **Admin Panel** - System administration capabilities
6. **Interactive Demo** - Satellite maps and AI chatbot

### **Key Selling Points**
- ✅ **Complete Authentication System** with 3 user roles
- ✅ **Real-time Dashboards** with live data visualization
- ✅ **AI-Powered Features** for smart agriculture
- ✅ **Satellite Integration** for farm monitoring
- ✅ **Carbon Credit Tracking** for sustainability
- ✅ **Responsive Design** works on all devices
- ✅ **Production Ready** with proper security measures

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
