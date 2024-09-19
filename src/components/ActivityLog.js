import React from 'react';
import { List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';

function ActivityLog({ activities }) {
  return (
    <Box sx={{ m: 3, p: 2, borderRadius: 2, backgroundColor: '#f9f9f9', boxShadow: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                borderRadius: 1,
                mb: 1,
                backgroundColor: '#ffffff',
                boxShadow: 1,
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  cursor: 'pointer'
                },
                p: 2
              }}
            >
              <ListItemText 
                primary={activity.name} 
                secondary={activity.date} 
                primaryTypographyProps={{ fontWeight: 'medium' }}
                secondaryTypographyProps={{ color: 'text.secondary' }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default ActivityLog;
