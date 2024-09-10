import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import IndexAppBar from '../components/IndexAppBar';


function Index() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div>
      <IndexAppBar />
      <Container maxWidth="xl">
        <h1>Welcome to the Health Track App</h1>
        <button onClick={handleLoginRedirect}>Go to Login</button>
      </Container>
    </div>
  );
}

export default Index;
