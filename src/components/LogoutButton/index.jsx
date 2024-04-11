import React from 'react';
import { useNavigate  } from 'react-router-dom';

function LogoutButton({ onLogout }) {
    let navigate = useNavigate();
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <button onClick={handleLogout}>Cerrar sesión</button>
  );
}

export default LogoutButton;