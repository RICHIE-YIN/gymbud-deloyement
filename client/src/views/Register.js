import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function RegisterPage() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleRegister = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/api/users', {
            username: username,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response.data);
            // Redirect to dashboard or profile page
        })
        .catch((err) => {
            console.log(err);
        });
    };

return (
    <div>
    <h1>Register</h1>
    <Form onSubmit={handleRegister}>
        <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
        />
        </Form.Group>

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
        Register
        </Button>
        <Link to="/login">Already have an account? Login here</Link>
    </Form>
    </div>
);
}
