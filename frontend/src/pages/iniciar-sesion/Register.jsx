import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. Agregamos "async" antes de (e)
const Register = ({ setUsuarios, usuarios }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');

  const handleRegister = async (e) => { 
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: nombre,
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("¡Usuario registrado con éxito en la base de datos!");
        // Limpiar formulario
        setEmail('');
        setPassword('');
        setNombre('');
      } else {
        alert("Error: " + (data.message || "No se pudo registrar"));
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor");
    }
    
  };

  return (
    
    <div style={{ padding: '48px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>¡Filomena store! - Crear Cuenta</h2>
      
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {/* Campo Nombre */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
          <input type="text"
            placeholder="Ej. Juan Pérez" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        {/* Campo Email */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
          <input type="email" 
            value={email}
            placeholder="example@gmail.com" 
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        {/* Campo Password */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" 
            value={password}
            placeholder="Crea una contraseña" 
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <button type="submit" 
          style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
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