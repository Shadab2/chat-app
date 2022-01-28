import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loader } from 'rsuite';
import { useProfile } from '../context/ProfileContext';

function ProtectedRoute() {
  const { profile, isLoading } = useProfile();
  if (!profile && isLoading)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Loader vertical speed="slow" size="md" content="Loading" />
      </div>
    );
  return profile ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
