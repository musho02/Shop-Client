import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Register = ({ setToken, setRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://shop-web-95o8.onrender.com/register', { username, password });
            setToken(response.data.token);
            setRole(response.data.role);
            navigate('/');
            alert('User registered successfully');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Register</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleRegister}>Register</button>
                <p>
                    Already have an account? <Link to="/">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;