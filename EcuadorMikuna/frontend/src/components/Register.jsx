// frontend/src/components/Register.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                password,
                email,
                firstName,
                lastName
            });
            console.log('Registration successful:', response.data);
            setError('');
            // Aquí podrías redirigir al usuario a una página de inicio de sesión, por ejemplo
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Error al registrar usuario');
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={e => { e.preventDefault(); handleRegister(); }}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="firstName">Nombre:</label>
                    <input type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Apellido:</label>
                    <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <button type="submit">Registrarse</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Register;
