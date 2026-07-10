import React, { useState } from 'react';

function RegistroCRUD() {
  const [usuarios, setUsuarios] = useState([]); // El "Read" (la lista)
  const [nombre, setNombre] = useState('');

  // El "Create"
  const agregarUsuario = () => {
    setUsuarios([...usuarios, nombre]);
    setNombre('');
  };

  return (
    <div>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button onClick={agregarUsuario}>Registrar</button>
      
      <ul>
        {usuarios.map((u, index) => <li key={index}>{u}</li>)}
      </ul>
    </div>
  );
}