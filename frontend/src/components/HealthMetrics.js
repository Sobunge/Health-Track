import React from 'react';
import { Box, Card, CardContent, Typography, CardHeader, Icon } from '@mui/material';
import { FitnessCenter, Fastfood } from '@mui/icons-material'; // Import icons
import { useSpring, animated } from '@react-spring/web'; // Import react-spring for animations

function HealthMetrics({ steps, calories }) {
    // Animation for steps
    const stepsProps = useSpring({
        number: steps,
        from: { number: 0 },
        config: { duration: 1000 },
        reset: true
    });

    // Animation for calories
    const caloriesProps = useSpring({
        number: calories,
        from: { number: 0 },
        config: { duration: 1000 },
        reset: true
    });

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 3 }}>
            <Card sx={{ flex: 1, mr: 2, bgcolor: 'linear-gradient(to right, #d4fc79, #96e6a1)', boxShadow: 3, borderRadius: 2 }}>
                <CardHeader
                    avatar={<Icon sx={{ color: '#4caf50' }}><FitnessCenter /></Icon>}
                    title="Steps Taken"
                    titleTypographyProps={{ variant: 'h6', color: '#1b5e20' }}
                    sx={{ bgcolor: 'rgba(76, 175, 80, 0.1)', borderBottom: 1, borderColor: 'divider' }}
                />
                <CardContent>
                    <Typography variant="h4" color="text.primary">
                        <animated.div>{stepsProps.number.to(n => Math.floor(n))}</animated.div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Your daily step count.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ flex: 1, bgcolor: 'linear-gradient(to right, #ff9a9e, #fad0c4)', boxShadow: 3, borderRadius: 2 }}>
                <CardHeader
                    avatar={<Icon sx={{ color: '#f44336' }}><Fastfood /></Icon>}
                    title="Calories Burned"
                    titleTypographyProps={{ variant: 'h6', color: '#d32f2f' }}
                    sx={{ bgcolor: 'rgba(244, 67, 54, 0.1)', borderBottom: 1, borderColor: 'divider' }}
                />
                <CardContent>
                    <Typography variant="h4" color="text.primary">
                        <animated.div>{caloriesProps.number.to(n => Math.floor(n))}</animated.div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Total calories burned today.</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default HealthMetrics;
