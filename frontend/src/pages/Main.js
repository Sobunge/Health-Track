import React from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div>
      <h1>Welcome to the Health Track App</h1>
      <button onClick={handleLoginRedirect}>Go to Login</button>
    </div>
  );
}

export default Index;
