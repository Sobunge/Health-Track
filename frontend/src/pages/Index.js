import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Index() {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    // Redirect to dashboard if already authenticated
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Welcome to the Health Tracker</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Index;
