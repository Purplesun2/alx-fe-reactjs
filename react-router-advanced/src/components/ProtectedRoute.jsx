import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Adjust the import path as needed

function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
