import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UserService from '../services/UserService';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const LoginContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
`;

const LoginCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
`;

const Button = styled.button`
    padding: 0.8rem;
    background: #0984e3;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #0873c4;
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Here you would typically make an API call to verify credentials
            // For now, we'll simulate it with the UserService
            const response = await UserService.login(credentials);
            
            if (response.roles.includes('ADMIN')) {
                login(response);
                navigate('/admin');
                toast.success('Welcome back, Admin!');
            } else {
                toast.error('Unauthorized access');
            }
        } catch (error) {
            toast.error(error.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer>
            <LoginCard>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h2>
                <LoginForm onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            email: e.target.value
                        })}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({
                            ...credentials,
                            password: e.target.value
                        })}
                        required
                    />
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </LoginForm>
            </LoginCard>
        </LoginContainer>
    );
};

export default Login; 