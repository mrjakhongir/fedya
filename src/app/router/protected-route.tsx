import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
