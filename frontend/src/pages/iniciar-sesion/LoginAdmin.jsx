import React, { useState } from 'react';

const LoginAdmin = ({ setIsAdmin }) => {
  
  const [password, setPassword] = useState("");
  

const cerrarSesionAdmin = () => {
  localStorage.removeItem('adminAuth'); // 
  window.location.reload(); 
};



  const verificar = () => {
    if (password === "Filomena2026*") {
      setIsAdmin(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert("Incorrect password");
      setPassword(""); // Limpiamos el input
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h2>Administrative Access</h2>
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter the key"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button className='btn-logout' onClick={verificar} style={{ padding: '10px 20px' }}>Log in</button>
      
    </div>
  );
};

export default LoginAdmin;