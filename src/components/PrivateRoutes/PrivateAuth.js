import React from "react";
import { Outlet, useLocation } from "react-router";
import { Navigate } from "react-router";

const PrivateAuth = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateAuth;
