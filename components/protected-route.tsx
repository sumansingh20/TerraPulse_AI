'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser, type User } from '@/lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'farmer' | 'company' | 'admin';
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole, 
  redirectTo = '/auth/login' 
}: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
    setLoading(false);

    if (!currentUser) {
      router.push(redirectTo);
      return;
    }

    if (requiredRole && currentUser.role !== requiredRole) {
      // Redirect to appropriate dashboard based on user role
      const roleDashboard = `/${currentUser.role}/dashboard`;
      router.push(roleDashboard);
      return;
    }
  }, [requiredRole, redirectTo, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!user || (requiredRole && user.role !== requiredRole)) {
    return null;
  }

  return <>{children}</>;
}
