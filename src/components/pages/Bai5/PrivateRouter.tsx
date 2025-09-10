import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export default function PrivateRouter() {
  const [isLoggedIn] = useState(false);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
