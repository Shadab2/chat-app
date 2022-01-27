import React from 'react';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute() {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
