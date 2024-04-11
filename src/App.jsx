// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NameListPage from './components/NameListPage';
import LoginPage from './components/LoginPage';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import Contact from './components/ContactPage';
import Navbar from './components/Navbar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  // Función para manejar el inicio de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <Navbar setIsLoggedIn= {setIsLoggedIn} />
        <Routes>
          <Route
            exact
            path="login"
            element={isLoggedIn ? <Navigate replace to={"/names"} /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact />}
          />
          <Route
            exact
            path="names"
            element={isLoggedIn ? <NameListPage /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </Router>
      {/* <button onClick={toggleRoute}>Toggle</button> */}
    </>
  );
}

export default App;



