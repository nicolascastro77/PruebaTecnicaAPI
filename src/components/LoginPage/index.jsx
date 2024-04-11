import React, { useState } from 'react';
import LoginForm from '../LoginForm';

function LoginPage({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://137.184.230.141:5000/token_json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Error al iniciar sesión');
            }

            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del API, por ejemplo, guardar el token de acceso en el estado de la aplicación o en el almacenamiento local
            // Luego, llama a la función onLogin para establecer el estado de autenticación en App.js
            // onLogin(data.access_token);
            localStorage.setItem('accessToken', data.access_token);
            setIsLoggedIn(true);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6">
                <h1 className="text-4xl mb-6 font-extrabold text-center text-gray-800">Iniciar sesión</h1>
                <LoginForm
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    onSubmit={handleSubmit}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;