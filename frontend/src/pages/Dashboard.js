import React from 'react';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/DashboardAppBar';

function Dashboard() {

  return (
    <div>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <h1>Dashboard</h1>
        {/* Include your HealthCard components or other dashboard content here */}
      </Container>
    </div>
  );
}

export default Dashboard;
