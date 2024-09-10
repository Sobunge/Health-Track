import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      {/* Include your HealthCard components or other dashboard content here */}
    </div>
  );
}

export default Dashboard;
