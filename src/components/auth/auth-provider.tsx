"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

export type UserRole = 'farmer' | 'company' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing authentication on mount
    const checkAuth = () => {
      const demoRole = document.cookie
        .split('; ')
        .find(row => row.startsWith('demo_role='))
        ?.split('=')[1]
      
      if (demoRole) {
        setUser({
          id: 'demo-user',
          name: 'Demo User',
          email: 'demo@terrapulse.ai',
          role: demoRole as UserRole
        })
      }
      
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    setIsLoading(true)
    
    try {
      // Demo authentication - in a real app, this would call an API
      if (email.includes('demo') || password === 'demo123') {
        const demoUser: User = {
          id: 'demo-user',
          name: 'Demo User',
          email: email,
          role: role as UserRole
        }
        
        setUser(demoUser)
        
        // Set demo role cookie
        document.cookie = `demo_role=${role}; path=/; max-age=86400`
        
        setIsLoading(false)
        return true
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes, accept any credentials
      const authenticatedUser: User = {
        id: 'user-' + Date.now(),
        name: email.split('@')[0],
        email: email,
        role: role as UserRole
      }
      
      setUser(authenticatedUser)
      
      // In a real app, store JWT token
      document.cookie = `auth_token=demo-token; path=/; max-age=86400`
      document.cookie = `demo_role=${role}; path=/; max-age=86400`
      
      setIsLoading(false)
      return true
    } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    
    // Clear cookies
    document.cookie = 'demo_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }

  const value = useMemo(() => ({
    user,
    login,
    logout,
    isLoading
  }), [user, isLoading])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
