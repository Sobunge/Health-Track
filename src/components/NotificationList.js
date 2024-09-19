import React from 'react';
import { List, ListItem, ListItemText, Box, Typography, Divider } from '@mui/material';

function NotificationList({ notifications }) {
  return (
    <Box sx={{ m: 3, p: 2, borderRadius: 2, backgroundColor: '#f5f5f5', boxShadow: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#444' }}>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            <ListItem
              sx={{
                borderRadius: 1,
                mb: 1,
                backgroundColor: '#ffffff',
                boxShadow: 1,
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  cursor: 'pointer'
                },
                p: 2
              }}
            >
              <ListItemText 
                primary={notification.message} 
                secondary={notification.date} 
                primaryTypographyProps={{ fontWeight: 'medium', color: '#333' }}
                secondaryTypographyProps={{ color: '#888' }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default NotificationList;
