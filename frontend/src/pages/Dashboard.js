import React from 'react';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import DashboardLayout from '../components/DashboardLayout';

function Dashboard() {

  return (
    <div>
      <CssBaseline />
      <DashboardLayout>

        <Container>Dashboard Content</Container>
        <Footer footerColor='black' />

      </DashboardLayout>

    </div>
  );
}

export default Dashboard;
