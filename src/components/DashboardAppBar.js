import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

function ResponsiveAppBar({ handleDrawerToggle }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { logout } = useAuth();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        logout();
        toast.success('You have logged out successfully!');
        setTimeout(() => navigate('/login'), 2000);
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#646c66' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        src="/Health-Track/images/favicon.ico"
                        alt="Health Icon"
                        sx={{ mr: 2, width: 30, height: 30, display: { xs: 'none', sm: 'flex' } }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', sm: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Health Track
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            justifyContent: 'center', // Center the content horizontally
                            alignItems: 'center', // Center the content vertically
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize: '20px',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Health Track
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 0, ml: 'auto' }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User" src="/Health-Track/images/avatar.png" />
                                <Typography variant="body1" sx={{ ml: 1, color: 'white', display: { xs: 'none', sm: 'none', md: 'none', xl: 'block' } }}>
                                    {capitalizeFirstLetter(currentUser?.firstName)}
                                </Typography>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem component={Link} to="/profile">
                                <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu();
                                    handleLogout();
                                }}
                            >
                                <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
