import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/Footer';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Call register function from AuthContext
    const result = register(firstName, middleName, lastName, email, password);

    if (result.success) {
      toast.success('Registration successful! Redirecting to login...');
      navigate('/login');
    } else {
      toast.error(result.message); // Show error message from register function
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
        maxWidth="sm" // Increased width
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Ensures full height
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
            width: '100%' // Ensures full width of container
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white' }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  InputLabelProps={{ style: { color: 'white' } }} // White label color
                  InputProps={{
                    style: { color: 'white' }, // White input text
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Middle Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  InputLabelProps={{ style: { color: 'white' } }} // White label color
                  InputProps={{
                    style: { color: 'white' }, // White input text
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  InputLabelProps={{ style: { color: 'white' } }} // White label color
                  InputProps={{
                    style: { color: 'white' }, // White input text
                  }}
                />
              </Grid>
            </Grid>
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Register
            </Button>
          </form>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default SignUp;
