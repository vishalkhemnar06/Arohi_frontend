import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // If user is not logged in, redirect to LandingPage
  return user ? children : <Navigate to="/home" replace />;
};

export default PrivateRoute;
