import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}));

const UserOverview = ({ userName, avatar }) => {
    return (
        <StyledCard>
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar alt={userName} src={avatar} sx={{ width: 80, height: 80, mr: 2 }} />
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Welcome, {userName}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Here’s your daily overview and insights.
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                    Last login: {new Date().toLocaleDateString()}
                </Typography>
            </CardContent>
        </StyledCard>
    );
}

export default UserOverview;
