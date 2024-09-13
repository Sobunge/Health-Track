import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Dashboard, Settings, BarChart, ExitToApp } from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar({ mobileOpen, handleDrawerToggle }) {
    const drawer = (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
                <Box
                    component="img"
                    src="/images/favicon.ico"
                    alt="Health Track Logo"
                    sx={{ width: 40, height: 40, borderRadius: '50%' }}
                />
                <Typography variant="h6" sx={{ ml: 1 }}>
                    Health Track
                </Typography>
            </Box>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <BarChart />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>

                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default Sidebar;