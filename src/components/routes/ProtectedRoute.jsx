import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  //   if (allowedRoles && !allowedRoles.includes(auth?.role)) {
  //     return <Navigate to="/" replace />;
  //   }
  return <Outlet />;
};
export default ProtectedRoute;
