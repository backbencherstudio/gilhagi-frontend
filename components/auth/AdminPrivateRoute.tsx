"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import {
  selectIsAuthenticated,
  selectIsLoading,
  selectUser,
} from "@/store/slices/authSlice";

interface AdminPrivateRouteProps {
  children: React.ReactNode;
}

export default function AdminPrivateRoute({
  children,
}: AdminPrivateRouteProps) {
  const router = useRouter();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectIsLoading);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/admin-login");
      } else if (user && user.user_type !== "admin") {
        // If user is logged in but not admin, redirect to user dashboard
        router.push("/user-dashboard");
      }
    }
  }, [isAuthenticated, isLoading, user, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#085EC4] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated or not admin
  if (!isAuthenticated || (user && user.user_type !== "admin")) {
    return null;
  }

  // Render children if authenticated and is admin
  return <>{children}</>;
}
