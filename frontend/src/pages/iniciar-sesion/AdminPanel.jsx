import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');

  // Cargar datos al abrir la página
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(guardados);
  }, []);

  // CREATE (Añadir)
  
  const agregarProducto = () => {
  console.log("Intentando agregar:", nombre); // Veremos si 'nombre' tiene valor
  
  const nuevoProducto = { id: Date.now(), nombre };
  const listaActualizada = [...productos, nuevoProducto];
  
  console.log("Nueva lista:", listaActualizada); // Veremos qué se está guardando
  
  setProductos(listaActualizada);
  localStorage.setItem('productos', JSON.stringify(listaActualizada));
  
  setNombre(''); // Limpiamos el input
  alert("Producto guardado, revisa el LocalStorage");
};

  // DELETE (Eliminar)
  const eliminarProducto = (id) => {
    const listaActualizada = productos.filter(p => p.id !== id);
    setProductos(listaActualizada);
    localStorage.setItem('productos', JSON.stringify(listaActualizada));
  };

  return (
    <div className="admin-container">
      <h2>Panel de Administración</h2>
      <input 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        placeholder="Nombre del producto"
      />
      <button onClick={agregarProducto}>Subir Producto</button>

      <ul>
        {productos.map(p => (
          <li key={p.id}>
            {p.nombre} 
            <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;