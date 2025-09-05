'use client';

export interface User {
  email: string;
  role: 'farmer' | 'company' | 'admin';
}

export const AUTH_KEY = 'terrapulse_auth';

export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as User;
  } catch {
    return null;
  }
}

export function setUser(user: User): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function removeUser(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  return getUser() !== null;
}

export function hasRole(requiredRole: string): boolean {
  const user = getUser();
  return user?.role === requiredRole;
}

// Demo credentials
export const DEMO_CREDENTIALS = {
  'demo@farmer.com': { password: 'demo123', role: 'farmer' as const },
  'demo@company.com': { password: 'demo123', role: 'company' as const },
  'demo@admin.com': { password: 'demo123', role: 'admin' as const },
};

export function validateCredentials(email: string, password: string): User | null {
  const credential = DEMO_CREDENTIALS[email as keyof typeof DEMO_CREDENTIALS];
  if (credential && credential.password === password) {
    return { email, role: credential.role };
  }
  return null;
}
