import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/footer';


function Index() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '20px'}}>
      <IndexAppBar />
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <h1>Welcome to the Health Track App</h1>
        <button onClick={handleLoginRedirect}>Go to Login</button>
      </Container>
      <Footer />
    </div>
  );
}

export default Index;
