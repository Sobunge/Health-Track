import React from 'react';
import { List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';

function HealthTipsList({ tips }) {
  return (
    <Box sx={{ m: 3, p: 2, borderRadius: 2, backgroundColor: '#f5f5f5', boxShadow: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
        Health Tips
      </Typography>
      <List>
        {tips.map((tip, index) => (
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
                primary={tip.title} 
                secondary={tip.description} 
                primaryTypographyProps={{ fontWeight: 'medium', color: '#333' }}
                secondaryTypographyProps={{ color: '#666' }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}

export default HealthTipsList;
