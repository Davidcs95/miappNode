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
      const response = await fetch('https://counting-choosy-starboard.ngrok-free.dev/api/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true' // <-- ¡Este encabezado es obligatorio con Ngrok!
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        // 2. Éxito: Guardamos datos
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuarioLogueado', JSON.stringify(data.user));
        setUsuarioLogueado(data.user);
        console.log("Datos del usuario recibidos:", data.user);
        const nombreUsuario = data.user.username || "Usuario";

        // Alerta de éxito con SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Welcome!',
          text: `You have successfully logged in, ${nombreUsuario}!.`,
          confirmButtonColor: '#ff9800'
        }).then(() => {
          navigate('/'); // Redirige después de cerrar la alerta
        });

      } else {
        // 3. Error controlado por el servidor (ej. credenciales incorrectas)
        Swal.fire({
          icon: 'error',
          title: 'Access Error',
          text: data.message || 'Invalid email or password.',
        });
      }
    } catch (error) {
      // 4. Error de red o servidor caído
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Could not connect to the server. Please try again later.',
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">¡Filomena Store! - Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">Log In</button>
        </form>

        <div className="login-footer">
          <Link className="register-link" to="/register">Create Account</Link>
        </div>
        <div className="contenedor-navegacion">
            <Link to="/" className="btn-back-home1">
            ← Back to home
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Login;
      