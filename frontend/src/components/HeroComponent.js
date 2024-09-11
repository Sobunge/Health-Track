import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
                backgroundImage: "url('/images/hero-background.jpg')", // Optional background image
                backgroundSize: 'cover', // Cover the entire section
                backgroundPosition: 'center', // Center the background image
            }}
        >
            <Container maxWidth="md" sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent background
                padding: '5rem',
                borderRadius: '8px', // Rounded corners for the container
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: subtle shadow
            }}>
                {/* Title */}
                <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#333', fontWeight: 'bold' }}>
                    Track Your Health & Fitness Goals
                </Typography>

                {/* Subtitle */}
                <Typography variant="h6" component="h2" sx={{ color: '#666', marginBottom: '2rem' }}>
                    Monitor your daily activities, diet, and workouts. Take control of your health journey.
                </Typography>

                {/* Call-to-Action */}
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate('/signup')}
                    sx={{
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        borderRadius: '8px',
                    }}
                >
                    Sign Up Now
                </Button>
            </Container>
        </Box>
    );
}

export default HeroSection;
