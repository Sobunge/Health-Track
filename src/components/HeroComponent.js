import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';

// Define the shaking animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(4px); }
  100% { transform: translateX(0); }
`;

function HeroSection() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh', // Ensure full viewport height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Center content vertically
                alignItems: 'center', // Center content horizontally
                textAlign: 'center',
                padding: '2rem',
                backgroundImage: "url('/Health-Track/images/index.jpg')", // Optional background image
                backgroundSize: 'cover', // Cover the entire section
                backgroundPosition: 'center', // Center the background image
                overflow: 'hidden', // Prevent overflow
            }}
        >
            <Container maxWidth="md" sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                paddingTop: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive padding
                paddingBottom: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' }, // Responsive padding
                borderRadius: '8px', // Rounded corners for the container
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
            }}>
                {/* Title */}
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        color: '#333',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        paddingBottom: '10px',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }, // Responsive font size
                        lineHeight: 1.2, // Improve line spacing
                        maxWidth: '90%', // Prevent text from stretching too wide
                        margin: '0 auto', // Center the text block
                    }}
                >
                    Track Your Health & Fitness Goals
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        color: '#666',
                        marginBottom: '2rem',
                        paddingBottom: '10px',
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
                        maxWidth: '90%', // Prevent text from stretching too wide
                        margin: '0 auto', // Center the text block
                    }}
                >
                    Monitor your daily activities, diet, and workouts. Take control of your health journey.
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/signup')}
                    sx={{
                        padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' }, // Responsive padding for different screen sizes
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' }, // Responsive font size
                        borderRadius: { xs: '6px', sm: '8px', md: '10px' }, // Responsive border-radius
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            animation: `${shake} 0.5s ease`,
                        },
                    }}
                >
                    Sign Up Now
                </Button>
            </Container>
        </Box>
    );
}

export default HeroSection;
