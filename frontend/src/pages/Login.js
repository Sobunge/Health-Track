// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Call login function from AuthContext (now using Firebase)
        const isSuccess = await login(email, password);

        if (isSuccess) {
            toast.success('Welcome!', { position: "bottom-right" });
            navigate('/dashboard');
        } else {
            toast.error('Login Failed. Please check your credentials.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: "url('/images/login.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
        }}>
            <IndexAppBar />
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '90vh',  // Ensures full height
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                        padding: '2rem', // Padding for spacing
                        borderRadius: '8px', // Rounded corners
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow for depth
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white' }}>
                        Login
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            InputLabelProps={{ style: { color: 'white' } }} // White label color
                            InputProps={{
                                style: { color: 'white' }, // White input text
                            }}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            InputLabelProps={{ style: { color: 'white' } }} // White label color
                            InputProps={{
                                style: { color: 'white' }, // White input text
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '1rem' }}
                        >
                            Login
                        </Button>
                    </form>
                </Box>
            </Container>
            <Footer />
        </div>
    );
}

export default Login;
