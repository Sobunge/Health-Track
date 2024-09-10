import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication tokens or any user session information
    localStorage.removeItem('authToken'); // Example if using local storage
    // Update authentication state
    logout();
    // Show success message
    toast.success('Logout successful!', {position: "top-center"});
    // Redirect after a short delay
    setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
