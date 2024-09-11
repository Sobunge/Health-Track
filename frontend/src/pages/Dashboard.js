import React from 'react';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/DashboardAppBar';
import Footer from '../components/Footer';

function Dashboard() {

  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <h1>Dashboard</h1>
        {/* Include your HealthCard components or other dashboard content here */}
      </Container>
      <Footer />
    </div>
  );
}

export default Dashboard;
