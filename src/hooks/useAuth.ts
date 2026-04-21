"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCredentials, logout } from "@/redux/features/auth/authSlice";
import { IUser } from "@/types";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, token, isLoading } = useAppSelector((s) => s.auth);

  return {
    user,
    token,
    isLoading,
    isAuthenticated: !!token,
    isAdmin: user?.role === "admin",
    login: (payload: { user: IUser; token: string }) => dispatch(setCredentials(payload)),
    signOut: () => dispatch(logout()),
  };
}
