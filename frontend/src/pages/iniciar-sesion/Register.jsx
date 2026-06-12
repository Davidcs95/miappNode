import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ({ setUsuarios, usuarios }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');


  const handleRegister = (e) => {
  e.preventDefault();
  const nuevoUsuario = { nombre, email, password };
  const listaActualizada = [...usuarios, nuevoUsuario];
  setUsuarios(listaActualizada);
  localStorage.setItem('usuarios', JSON.stringify(listaActualizada)); 
  alert("¡Usuario registrado con éxito!");
  setEmail('');
  setPassword('');
  setNombre('');

  };





  return (

    <div style={{ padding: '48px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>¡Filomena store! - Crear Cuenta</h2>
      
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name (Nombre Completo):</label>
          <input type="text"
           placeholder="Ej. Juan Pérez" 
           value={nombre}
           onChange={(e) => setNombre(e.target.value)}
           style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
          <input type="email" 
          value={email}
          placeholder="example@gmail.com" 
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" 
          value={password}
          placeholder="Crea una contraseña" 
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Registrarse
        </button>
      </form>

      <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
        <span>¿Ya tienes una cuenta? </span>
        <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default Register;