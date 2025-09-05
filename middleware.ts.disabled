import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define protected routes and their required roles
const protectedRoutes = {
  '/farmer': ['farmer'],
  '/company': ['company'],
  '/admin': ['admin'],
}

// Demo authentication function - in a real app, this would validate tokens
function getAuthRole(request: NextRequest): string | null {
  // Check for demo session or JWT token
  const demoRole = request.cookies.get('demo_role')?.value
  const authToken = request.cookies.get('auth_token')?.value
  
  if (demoRole) {
    return demoRole
  }
  
  if (authToken) {
    // In a real app, decode and validate JWT token
    // For demo purposes, return null to redirect to login
    return null
  }
  
  return null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the current path is a protected route
  const protectedRoute = Object.keys(protectedRoutes).find(route => 
    pathname.startsWith(route)
  )
  
  if (protectedRoute) {
    const userRole = getAuthRole(request)
    const allowedRoles = protectedRoutes[protectedRoute as keyof typeof protectedRoutes]
    
    // If user is not authenticated or doesn't have the required role
    if (!userRole || !allowedRoles.includes(userRole)) {
      const loginUrl = new URL('/auth/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  // Allow access to public routes and authenticated protected routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}
