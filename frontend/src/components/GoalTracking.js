import React from 'react';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 75%;
  }
`;

function GoalTracking({ goalName, progress }) {
    return (
        <Paper elevation={3} sx={{ p: 3, m: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                {goalName}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ flexGrow: 1, position: 'relative' }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: 8,
                            borderRadius: 5,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 5,
                                backgroundColor: '#76c7c0',
                                animation: `${progressAnimation} 1s ease-out`,
                                width: `${progress}%`
                            },
                        }}
                    />
                </Box>
                <Typography variant="body2" sx={{ ml: 2, color: '#666' }}>
                    {`${progress}%`}
                </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
                {`${progress}% completed`}
            </Typography>
        </Paper>
    );
}

export default GoalTracking;
