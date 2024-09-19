import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, Stack } from '@mui/material';
import { Dashboard, Settings, BarChart, ExitToApp } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Sidebar({ mobileOpen, handleDrawerToggle }) {

    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        logout();
        toast.success('You have logged out successfully!');
        setTimeout(() => navigate('/login'), 2000);
    };

    const drawer = (
        <div>
            <Box sx={{ padding: '1rem' }}>
                <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                >
                    <Box
                        component="img"
                        src="/images/android-chrome-512x512.png"
                        alt="Health Track Logo"
                        sx={{ width: 50, height: 50 }}
                    />
                    <Typography variant="h6">
                        Health Track
                    </Typography>
                </Stack>
            </Box>

            <Divider />

            <List>
                <ListItem button component={Link} to="/dashboard" sx={{
                    backgroundColor: location.pathname === '/dashboard' ? '#f0f0f0' : 'transparent',
                    '&:hover': {
                        backgroundColor: '#e0e0e0', // Hover effect
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#d0d0d0',
                    },
                }}>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItem>

                <ListItem button component={Link} to="/reports" sx={{
                    backgroundColor: location.pathname === '/reports' ? '#f0f0f0' : 'transparent',
                    '&:hover': {
                        backgroundColor: '#e0e0e0', // Hover effect
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#d0d0d0',
                    },
                }}>
                    <ListItemIcon>
                        <BarChart />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>

                <ListItem button component={Link} to="/profile" sx={{
                    backgroundColor: location.pathname === '/profile' ? '#f0f0f0' : 'transparent',
                    '&:hover': {
                        backgroundColor: '#e0e0e0', // Hover effect
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#d0d0d0',
                    },
                }}>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>

                <ListItem button component={Link} to="/settings" sx={{
                    backgroundColor: location.pathname === '/settings' ? '#f0f0f0' : 'transparent',
                    '&:hover': {
                        backgroundColor: '#e0e0e0', // Hover effect
                    },
                    '&.Mui-selected': {
                        backgroundColor: '#d0d0d0',
                    },
                }}>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>

                <Divider />

                <ListItem button onClick={() => {
                    handleLogout();
                }}>
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