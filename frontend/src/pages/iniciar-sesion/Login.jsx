import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


const Login = ({ setUsuarioLogueado }) => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        'http://localhost:3000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

     localStorage.setItem('token', data.token);

     localStorage.setItem(
     'usuarioLogueado',
     JSON.stringify(data.user)
     );

     setUsuarioLogueado(data.user);

     alert('¡Inicio de sesión exitoso!');

     navigate('/');
     

      }

     } catch (error) {

      console.error(error);

      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="login-container">

  <div className="login-card">

    <h2 className="login-title">
      ¡Filomena Store! - Iniciar Sesión
    </h2>

    <form
      className="login-form"
      onSubmit={handleSubmit}
    >

      <input
        className="login-input"
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="login-button"
        type="submit"
      >
        Iniciar Sesión
      </button>

    </form>

    <div className="login-footer">
      <Link
        className="register-link"
        to="/register"
      >
        Crear cuenta
      </Link>
    </div>

  </div>

</div>
  );
};

export default Login;