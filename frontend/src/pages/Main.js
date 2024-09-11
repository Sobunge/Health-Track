import React from 'react';
import Container from '@mui/material/Container';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroComponent';

function Index() {

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '20px', backgroundImage: "url('/images/index.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <IndexAppBar />
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <HeroComponent />
      </Container>
      <Footer footerColor='white'/>
    </div>
  );
}

export default Index;
