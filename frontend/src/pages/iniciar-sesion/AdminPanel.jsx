import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  // 1. Usamos minúsculas aquí para que coincida con los valores del select
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Cat');

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(guardados);
  }, []);

  const agregarProducto = () => {
    // Validamos que el nombre no esté vacío
    if (!nombre.trim()) return alert("El nombre es obligatorio");

    const nuevoProducto = { 
      id: Date.now(), 
      nombre: nombre,
      categoria: categoriaSeleccionada, 
      cantidad: 10,
      precio: 10000,
    };

    // 2. Solo necesitamos una lista actualizada, usamos la que ya tenemos en estado
    const listaActualizada = [...productos, nuevoProducto];
    
    setProductos(listaActualizada);
    localStorage.setItem('productos', JSON.stringify(listaActualizada));
    
    setNombre(''); 
    alert(`Producto guardado en categoría: ${categoriaSeleccionada}`);
  };

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
      
      {/* 3. Selector coherente con los valores del filtro */}
      <select value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Animal">Animal</option>
      </select>

      <button onClick={agregarProducto}>Subir Producto</button>

      <ul>
        {productos.map(p => (
          <li key={p.id}>
            {p.nombre} ({p.categoria})
            <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;