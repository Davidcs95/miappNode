import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const Login = ({ usuarios, setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos si el usuario existe en nuestra lista
    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (usuarioEncontrado) {
  setUsuarioLogueado(usuarioEncontrado);
  localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado)); // <--- ¡Esto es la clave!
  alert("¡Inicio de sesión exitoso!");
  navigate('/');
    } else {
      alert("Usuario no registrado o credenciales incorrectas");
    }
  };

    


 return (

    <div style={{ padding: '48px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>¡Filomena store! - Iniciar Sesión</h2>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }} onSubmit={handleSubmit}>
        
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
            <input type="email" 
            placeholder="example@gmail.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" 
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>
        
    
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign In
        </button>
      </form>



      <div style={{ marginTop: '15px', textAlign: 'center', fontSize: '14px' }}>
        <span>¿No tienes una cuenta? </span>
        <Link to="/register" style={{ color: '#007bff', fontWeight: 'bold', textDecoration: 'none' }}>
          Regístrate aquí
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default Login;