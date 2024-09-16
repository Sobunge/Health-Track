import React, { useState } from 'react';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

function ProfileForm() {
    // Initial state for user profile
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+123456789',
        address: '1234 Elm Street, City, Country',
        avatar: '/images/avatar.png', // Path to user's avatar image
    });

    // State to manage edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Handle toggling between edit and save mode
    const handleEditProfile = () => {
        if (isEditing) {
            // Save profile changes (e.g., send data to server)
            console.log('Profile saved', user);
        }
        setIsEditing(!isEditing); // Toggle edit mode
    };

    // Handle changes in the form fields
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar src={user.avatar} alt={user.name} sx={{ width: 100, height: 100 }} />
                <Typography variant="h4" sx={{ mt: 2 }}>
                    {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {user.email}
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }} // Toggle readOnly based on edit mode
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }} // Toggle readOnly based on edit mode
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }} // Toggle readOnly based on edit mode
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }} // Toggle readOnly based on edit mode
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEditProfile}
                    >
                        {isEditing ? 'Save Profile' : 'Edit Profile'}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProfileForm;
