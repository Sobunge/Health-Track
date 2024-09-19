// CTABanner.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define the shaking animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

const CTABanner = () => {
    return (
        <section className="cta-banner">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    background: 'linear-gradient(to right, #4caf50, #81c784)', // Gradient background
                    color: '#fff',
                }}
            >
                <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
                    Ready to Start Your Health Journey?
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href="/signup"
                    sx={{
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        color: '#4caf50',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            animation: `${shake} 0.5s ease`,
                        },
                    }}
                >
                    Create Your Free Account Today
                </Button>
            </Box>
        </section>
    );
};

export default CTABanner;
