import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a nuestra Aplicación</h1>
                <p className="text-lg text-gray-200 mb-8">Descubre lo último en tecnología y mantente actualizado con nuestras noticias y actualizaciones.</p>
            </div>
            <div className="flex justify-center mt-8">
                <div className="w-1/3 mx-2">
                    <img src="https://i.ibb.co/X3JpRYJ/3d-casual-life-man-holding-payment-terminal.png" alt="Imagen 1" className="rounded-lg " />
                </div>
            </div>
            <div className=' mx-10 my-10'>
                <Link to="/login" className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-4 px-6 m-4 rounded-full transition duration-300">
                    Comenzar
                </Link>
            </div>
        </div>
    );
}

export default Home;


