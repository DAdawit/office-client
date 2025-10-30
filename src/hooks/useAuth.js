import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { logout, userLogin } from "@/redux/features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { email, organizationID, loading, error } = useSelector(
    (state) => state.auth
  );
  // const token = sessionStorage.getItem("token");
  const token = sessionStorage.getItem("token");

  const login = useCallback(
    async (credentials) => {
      return dispatch(userLogin(credentials));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return {
    auth: { email, token, organizationID },
    login,
    logout: handleLogout,
    loading,
    error,
    isAuthenticated: !!token,
  };
};
