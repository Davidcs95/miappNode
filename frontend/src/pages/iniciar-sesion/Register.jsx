import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = ({ setUsuarios, usuarios }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');

  const handleRegister = async (e) => { 
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        },
        body: JSON.stringify({
          username: nombre,
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'User successfully registered in the database!'
        });
        // Limpiar formulario
        setEmail('');
        setPassword('');
        setNombre('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: "Error: " + (data.message || "It could not be registered")
        });
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Error al conectar con el servidor'
      });
    }
  };

  return (
    <div style={{ padding: '48px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>¡Filomena store! - Create Account</h2>
      
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {/* Campo Nombre */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Full Name:</label>
          <input 
            type="text"
            placeholder="Ej. Juan Pérez" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
            required
          />
        </div>

        {/* Campo Email */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
          <input 
            type="email" 
            value={email}
            placeholder="example@gmail.com" 
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
            required
          />
        </div>
        
        {/* Campo Password */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input 
            type="password" 
            value={password}
            placeholder="Create a password" 
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
            required
          />
        </div>
        
        <button 
          type="submit" 
          style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Register
        </button>
      </form>

      <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
        <span>Do you already have an account? </span>
        <Link to="/login" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;