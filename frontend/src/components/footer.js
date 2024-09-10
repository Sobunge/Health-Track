import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 'auto', // Push footer to the bottom if using Flexbox
                textAlign: 'center',
            }}
        >
            <Container maxWidth="xl">
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
                <Typography variant="body2">
                    <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Privacy Policy
                    </a> |{' '}
                    <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Terms of Service
                    </a>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
