import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, Stack } from '@mui/material';
import { Dashboard, Settings, BarChart, ExitToApp } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const drawerWidth = 240;

function Sidebar({ mobileOpen, handleDrawerToggle }) {
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
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
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
                    display: { xs: 'none', sm: 'block'},
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