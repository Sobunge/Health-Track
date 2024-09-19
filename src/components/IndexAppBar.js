import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { Link as RouterLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { ListItemIcon } from '@mui/material';
import { keyframes } from '@emotion/react';

const drawerWidth = 240;
const iconSize = 20;

const navItems = [
    { name: 'Home', icon: <HomeIcon sx={{ fontSize: iconSize }} />, link: '/' },
    { name: 'Login', icon: <LoginIcon sx={{ fontSize: iconSize }} />, link: '/login' },
    { name: 'Register', icon: <HowToRegIcon sx={{ fontSize: iconSize }} />, link: '/signup' }
];

// Define the shaking animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Health Track
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton component={RouterLink} to={item.link} sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                animation: `${shake} 0.5s ease`,
                            },
                        }}>
                            <ListItemIcon sx={{
                                marginLeft: '26%'
                            }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{
                                marginLeft: '-25px'
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#646c66' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box
                            component="img"
                            src="/images/favicon.ico" // Reference to your favicon in the public folder
                            alt="Health Icon"
                            sx={{ mr: 2, width: 30, height: 30, display: { xs: 'none', md: 'flex' } }} // Styling for the icon
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block' } }}
                        >
                            Health Track
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.name} sx={{
                                    color: '#fff', textTransform: 'none', marginRight: '15px', transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        animation: `${shake} 0.5s ease`,
                                    },
                                }} startIcon={item.icon} component={RouterLink} to={item.link}>
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'block', xl: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            ]
        </Box>
    );
}


export default DrawerAppBar;
