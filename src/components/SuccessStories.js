import React from 'react';
import { Box, Typography, Grid, Container, Avatar } from '@mui/material';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            photo: '/images/user1.jpg', // Replace with actual photo path
            testimonial: "I've improved my sleep by 20% in just two months!",
            experience: 'HealthTrack helped me track my sleep patterns and provided valuable insights that led to better sleep habits.'
        },
        {
            name: 'John Smith',
            photo: '/images/user2.jpg', // Replace with actual photo path
            testimonial: 'My fitness journey has been fantastic with HealthTrack!',
            experience: 'The fitness tracking feature allowed me to set and achieve my workout goals efficiently.'
        },
        {
            name: 'Emily Johnson',
            photo: '/images/user3.jpg', // Replace with actual photo path
            testimonial: 'I love how easy it is to log my meals and monitor my nutrition.',
            experience: 'HealthTrack’s diet and nutrition tracker helped me maintain a balanced diet and achieve my weight goals.'
        },
    ];

    return (
        <section className="success-stories">
            <Container maxWidth="xl">
                <h2 className="section-title">Success Stories from Our Users</h2>
                <Grid container spacing={4}>
                    {testimonials.map((story, index) => (
                        <Grid item xs={12} sm={12} md={4} key={index}>
                            <Box sx={{ textAlign: 'center' }} className="testimonial-card">
                                <Avatar src={story.photo} alt={story.name} sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }} />
                                <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                                    {story.name}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    "{story.testimonial}"
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    {story.experience}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default SuccessStories;
