import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { FaUserPlus, FaChartLine, FaCogs } from 'react-icons/fa'; // Example icons; replace with actual illustrations
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            title: 'Sign up and customize your profile',
            description: 'Create your account and set up your profile by entering your personal information and preferences.',
            icon: <FaUserPlus size={40} />, // Replace with actual illustration
        },
        {
            title: 'Track your fitness, diet, and health metrics easily',
            description: 'Use our app to log your workouts, meals, and health data effortlessly.',
            icon: <FaChartLine size={40} />, // Replace with actual illustration
        },
        {
            title: 'Analyze your progress with smart insights and trends',
            description: 'Review your progress with detailed analytics and gain insights to improve your health journey.',
            icon: <FaCogs size={40} />, // Replace with actual illustration
        },
    ];

    return (
        <section className="how-it-works">
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <h2 className="section-title">How HealthTrack Works</h2>
                    <Grid container spacing={4} justifyContent="center">
                        {steps.map((step, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box sx={{ mb: 2 }} className="icon">
                                        {step.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3" sx={{ mb: 1 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {step.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default HowItWorks;
