import React, { useState, useEffect } from 'react';

function WelcomeMessage() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch('http://137.184.230.141:5000/users/me', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del usuario');
                }
                const userData = await response.json();
                setUserData(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="">
            {userData && (
                <div className="px-8 py-6 animate__animated animate__fadeIn">
                    <h1 className="text-4xl mb-4 font-extrabold text-center text-gray-800">¡Bienvenido, {userData.username}!</h1>
                    <p className="text-lg mb-2">Correo electrónico: {userData.email}</p>
                    <p className="text-lg mb-2">Nombre completo: {userData.full_name}</p>
                </div>
            )}
        </div>
    );
}

export default WelcomeMessage;
