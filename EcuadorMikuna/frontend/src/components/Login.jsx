// frontend/src/components/Login.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });
            const token = response.data.token;
            // Aquí podrías guardar el token en localStorage o en contexto de tu aplicación
            console.log('Login successful. Token:', token);
            setError('');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={e => { e.preventDefault(); handleLogin(); }}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Iniciar sesión</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
