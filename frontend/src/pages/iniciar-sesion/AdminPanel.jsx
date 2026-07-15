import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Cat');
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('productos')) || [];
    setProductos(guardados);
  }, []);

  const cerrarSesionAdmin = () => {
    localStorage.removeItem('adminAuth');
    window.location.reload();
  };

  const agregarProducto = () => {
    if (!nombre.trim()) return alert("The name is required");

    const nuevoProducto = { 
      id: Date.now(), 
      nombre, 
      categoria: categoriaSeleccionada, 
      cantidad, 
      precio, 
      descripcion, 
      imagen 
    };

    const listaActualizada = [...productos, nuevoProducto];
    setProductos(listaActualizada);
    localStorage.setItem('productos', JSON.stringify(listaActualizada));
    
    setNombre(''); setImagen(''); setDescripcion(''); setPrecio(''); setCantidad('');
    alert("Producto guardado");
  };

  const eliminarProducto = (id) => {
    const listaActualizada = productos.filter(p => p.id !== id);
    setProductos(listaActualizada);
    localStorage.setItem('productos', JSON.stringify(listaActualizada));
  };

  return (
    <div className="admin-container">
      <h2>Administration Panel</h2>
      
      {/* INPUTS */}
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Name" />
      
      <select value={categoriaSeleccionada} onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Animal">Animal</option>
      </select>

      <input value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Image URL" />
      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Description" />
      <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Price" />
      <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Quantity" />

      {/* BOTONES */}
      <button className="btn-upload" onClick={agregarProducto}>Submit Product</button>
      <button className="btn-logout" onClick={cerrarSesionAdmin}>Logout</button>

      {/* LISTA */}
      <ul>
        {productos.map(p => (
          <li key={p.id}>
            {p.nombre} ({p.categoria})
            <button className="btn-delete" onClick={() => eliminarProducto(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;