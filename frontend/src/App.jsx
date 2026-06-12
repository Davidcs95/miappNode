import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tienda from './pages/iniciar-sesion/tienda/Tienda.jsx'; 
import Login from './pages/iniciar-sesion/Login.jsx'; 
import '../style.css'; 
import Register from './pages/iniciar-sesion/Register.jsx';

function App() {
  // 1. Estado de usuarios (lee del localStorage)
   const [usuarios, setUsuarios] = useState(() => {
    const usuariosGuardados = localStorage.getItem('usuarios');
    return usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
  });

  // 2. Estado de usuarioLogueado (va fuera del useState anterior)
  const [usuarioLogueado, setUsuarioLogueado] = useState(() => {
  const sesionGuardada = localStorage.getItem('usuarioLogueado');
  return sesionGuardada ? JSON.parse(sesionGuardada) : null;
});


 const cerrarSesion = () => {
  setUsuarioLogueado(null); // Borra el usuario del estado de React
  localStorage.removeItem('usuarioLogueado'); // Borra la sesión del navegador
};


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tienda usuarioLogueado={usuarioLogueado} cerrarSesion={cerrarSesion} />} />
        <Route path="/login" element={<Login usuarios={usuarios} setUsuarioLogueado={setUsuarioLogueado} />} />
        <Route path="/register" element={<Register setUsuarios={setUsuarios} usuarios={usuarios} />} />
      </Routes>
    </Router>
  );
}
export default App;