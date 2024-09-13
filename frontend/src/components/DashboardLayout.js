import React, { useState } from 'react';
import ResponsiveAppBar from './DashboardAppBar';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';

function DashboardLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#bcbcbc' }}>

            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
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

                <main style={{ flexGrow: 1, padding: '1rem' }}>
                    {children}
                </main>
                
            </Box>
        </div>
    );
}

export default DashboardLayout;
