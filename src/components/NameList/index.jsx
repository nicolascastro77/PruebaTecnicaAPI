import React, { useState, useEffect } from 'react';

function NameList() {
    const [operadores, setOperadores] = useState([]);
    const [selectedOperadorId, setSelectedOperadorId] = useState('');
    const [recargaStatus, setRecargaStatus] = useState('');

    useEffect(() => {
        const fetchOperadores = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch('http://137.184.230.141:5000/api/v1/operadores', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Error al cargar los operadores');
                }
                const data = await response.json();
                if (Array.isArray(data.data)) {
                    setOperadores(data.data);
                } else {
                    throw new Error('La respuesta no contiene un arreglo de operadores');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOperadores();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const numero = e.target.numero.value;
        const valor = e.target.valor.value;
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('http://137.184.230.141:5000/api/v1/enviar_recarga', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    operador_id: selectedOperadorId,
                    numero: numero,
                    valor: valor
                })
            });
            if (!response.ok) {
                throw new Error('Error al enviar la recarga');
            }
            setRecargaStatus('Recarga enviada exitosamente');
        } catch (error) {
            console.error(error);
            setRecargaStatus('Error al enviar la recarga');
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg px-8 py-6 w-1/3">
            <h2 className="text-3xl mb-4 font-bold text-center text-gray-800">Lista de Operadores</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <select
                    value={selectedOperadorId}
                    onChange={(e) => setSelectedOperadorId(e.target.value)}
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                >
                    <option value="">Selecciona un operador</option>
                    {operadores.map(operador => (
                        <option key={operador.id} value={operador.id}>{operador.name}</option>
                    ))}
                </select>
                <label htmlFor="numero" className="block mt-4 text-sm font-medium text-gray-700">Número:</label>
                <input
                    type="text"
                    id="numero"
                    name="numero"
                    pattern="[0-9]*" // Solo permite números
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                />
                <label htmlFor="valor" className="block mt-4 text-sm font-medium text-gray-700">Valor:</label>
                <input
                    type="number" // Utiliza un input de tipo número para permitir solo números
                    id="valor"
                    name="valor"
                    className="block w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Enviar recarga
                </button>
            </form>
            {recargaStatus && <p className="text-center text-green-500">{recargaStatus}</p>}
        </div>
    );

}

export default NameList;