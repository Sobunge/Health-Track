import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/DashboardAppBar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#bcbcbc' }}>
      <CssBaseline />
      {/* Sidebar for large screens */}
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 240px)` }, // Adjust width to accommodate the sidebar
          ml: { sm: '240px' }, // Margin for large screens
          p: 3,
        }}
      >
        <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle} />
        {/* Your dashboard content goes here */}
        <Container>Dashboard Content</Container>
        <Footer footerColor='black' />
      </Box>
    </Box>
  );
}

export default Dashboard;
