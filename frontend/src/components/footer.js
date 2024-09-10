import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                color: 'black',
                py: 2,
                mt: 'auto', // Push footer to the bottom if using Flexbox
                textAlign: 'center',
            }}
        >
            <Container maxWidth="xl">
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Health Track. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
