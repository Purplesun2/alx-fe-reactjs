// src/hooks/useAuth.js

import { useState } from 'react';

function useAuth() {
  // Simulate authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change to false to simulate an unauthenticated user
  
  // Return the authentication status
  return isAuthenticated;
}

export default useAuth;
