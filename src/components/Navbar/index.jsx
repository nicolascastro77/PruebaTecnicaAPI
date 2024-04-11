import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Lógica para cerrar sesión
        // Por ejemplo, limpiar el token de acceso del almacenamiento local
        localStorage.removeItem('accessToken');
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
        setIsLoggedIn(false);
    };

    // Verifica si hay un token de acceso almacenado en el almacenamiento local
    const isLoggedIn = localStorage.getItem('accessToken');

    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://www.practisistemas.com/wp-content/uploads/2022/08/Logo-Practi-OK-01.png" alt="Logo de la Aplicación" className=" w-20 mr-2" />
                    <h1 className=" ml-6 text-white text-lg font-semibold">Recarga en nuestra aplicacion!</h1>
                </div>
                <ul className="flex space-x-4">
                    <li><Link to="/PruebaTecnicaAPI" className="text-white hover:text-gray-300">Inicio</Link></li>
                    {/* Muestra el botón de cierre de sesión solo si el usuario ha iniciado sesión */}
                    {isLoggedIn && <li><button onClick={handleLogout} className="text-white hover:text-gray-300">Cerrar sesión</button></li>}
                    {/* Si el usuario no ha iniciado sesión, muestra el enlace al login */}
                    {!isLoggedIn && <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>}
                    <li><Link to="/contact" className="text-white hover:text-gray-300">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
