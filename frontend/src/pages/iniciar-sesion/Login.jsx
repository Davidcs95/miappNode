import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Asegúrate de tenerlo instalado
import './Login.css';

const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Ejecutamos la petición al servidor
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // 2. Éxito: Guardamos datos
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuarioLogueado', JSON.stringify(data.user));
        setUsuarioLogueado(data.user);

        // Alerta de éxito con SweetAlert
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          text: 'Has iniciado sesión correctamente.',
          confirmButtonColor: '#ff9800'
        }).then(() => {
          navigate('/'); // Redirige después de cerrar la alerta
        });

      } else {
        // 3. Error controlado por el servidor (ej. credenciales incorrectas)
        Swal.fire({
          icon: 'error',
          title: 'Error de acceso',
          text: data.message || 'Correo o contraseña incorrectos.',
        });
      }
    } catch (error) {
      // 4. Error de red o servidor caído
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor. Inténtalo más tarde.',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">¡Filomena Store! - Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Contraseña"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">Iniciar Sesión</button>
        </form>

        <div className="login-footer">
          <Link className="register-link" to="/register">Crear cuenta</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
      