import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext'; // Adjust the path to AuthContext
import { doc, updateDoc } from 'firebase/firestore'; // Import Firestore update function
import { db } from '../firebase'; // Adjust the path to your Firebase config
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function ProfileForm() {
    const { currentUser, isAuthenticated } = useAuth(); // Get user data from AuthContext
    const [user, setUser] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        avatar: '/images/avatar.png', // Default path for avatar
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (isAuthenticated && currentUser) {
            // Set user state with data from AuthContext
            setUser({
                firstName: currentUser.firstName || '',
                middleName: currentUser.middleName || '',
                lastName: currentUser.lastName || '',
                email: currentUser.email || '',
                phone: currentUser.phoneNumber || '',
                address: currentUser.address || '',
                avatar: currentUser.photoURL || '/Health-Track/images/avatar.png',
            });
        }
    }, [currentUser, isAuthenticated]);

    const handleEditProfile = async () => {
        if (isEditing) {
            try {
                const userId = currentUser.uid;
                const userDocRef = doc(db, 'users', userId);
                await updateDoc(userDocRef, {
                    firstName: user.firstName,
                    middleName: user.middleName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phone,
                    address: user.address,
                });
                toast.success('Profile updated successfully!');
            } catch (error) {
                toast.error('Error saving profile: ' + error.message);
            }
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`} sx={{ width: 100, height: 100 }} />
                <Typography variant="h4" sx={{ mt: 2 }}>
                    {`${capitalizeFirstLetter(user.firstName)} ${capitalizeFirstLetter(user.lastName)}`}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {user.email}
                </Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Middle Name"
                        name="middleName"
                        value={user.middleName}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={user.email}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        InputProps={{ readOnly: !isEditing }}
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Button
                        variant="contained"
                        color={isEditing ? 'success' : 'primary' }
                        onClick={handleEditProfile}
                    >
                        {isEditing ? 'Save Profile' : 'Edit Profile'}
                    </Button>
                </Grid>
            </Grid>

            {/* Add ToastContainer for toast notifications */}
            <ToastContainer />
        </Container>
    );
}

export default ProfileForm;
