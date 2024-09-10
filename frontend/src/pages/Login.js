// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import IndexAppBar from '../components/IndexAppBar';
import Footer from '../components/footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Call login function from AuthContext and check if login is successful
        const isSuccess = login(email, password);

        if (isSuccess) {
            toast.success('Welcome! Samuel', { position: "bottom-right" });
            navigate('/dashboard');
        } else {
            toast.error('Login Failed. Please check your credentials.');
            navigate('/login');
        }
    };

    return (

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop: '20px' }}>
            <IndexAppBar />
            <Container maxWidth="xl">
                <h1> Login </h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </Container>
            <Footer />
        </div>

    );
}

export default Login;
