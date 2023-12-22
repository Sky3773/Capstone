import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const user = await response.json();
                console.log(user)
                setUser(user); // Assuming the response includes user details including roles

                if (user.role === role) {
                    setMessage('');}
                       
                    
                // Redirect based on roles
                if (user.role === 'admin') {
                    navigate('/admin');
                } else if (user.role === 'user') {
                    navigate('/user');
                } else {
                    setMessage('Unknown user role:', user.role);
                }
            } else {
                setMessage('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>

            <button onClick={handleLogin}>Login</button>
            <p className='message'>{message}</p>
        </div>
    );
};

export default Login;