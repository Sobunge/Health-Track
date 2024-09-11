import React from 'react';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/DashboardAppBar';
import Footer from '../components/Footer';

function Dashboard() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#bcbcbc' }}>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <h1>Dashboard</h1>
        {/* Include your HealthCard components or other dashboard content here */}
      </Container>
      <Footer footerColor='black'/>
    </div>
  );
}

export default Dashboard;
