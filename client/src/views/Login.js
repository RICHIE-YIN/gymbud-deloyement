import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('/api/login', {
        email: email,
        password: password
    });
    console.log(response.data);
    // Redirect to dashboard or profile page
    } catch (err) {
    console.log(err);
    }
};

return (
    <div>
    <h1>Login</h1>
    <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
        />
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        </Form.Group>

        <Button variant="primary" type="submit">
        Login
        </Button>
        <Link to="/register">Don't have an account? Register here</Link>
    </Form>
    </div>
);
}
