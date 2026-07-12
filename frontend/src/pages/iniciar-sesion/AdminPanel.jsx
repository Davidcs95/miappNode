import './AdminPanel.css';
import React, { useState, useEffect } from 'react';

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

  const agregarProducto = () => {
    // Validamos que el nombre no esté vacío
    if (!nombre.trim()) return alert("El nombre es obligatorio");

    const nuevoProducto = { 
    id: Date.now(), 
    nombre: nombre,
    categoria: categoriaSeleccionada, 
    cantidad: cantidad, 
    precio: precio, 
    descripcion: descripcion, 
    imagen: imagen            
  };

  
    const listaActualizada = [...productos, nuevoProducto];
    
    setProductos(listaActualizada);
    localStorage.setItem('productos', JSON.stringify(listaActualizada));
    
    setNombre(''); 
    setImagen('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
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
      
      <input 
      value={imagen} 
      onChange={(e) => setImagen(e.target.value)} 
      placeholder="URL de la imagen (ej: /imagenes/producto.jpg)"
    />
    <textarea 
      value={descripcion} 
      onChange={(e) => setDescripcion(e.target.value)} 
      placeholder="Descripción del producto"
    />
    <input 
      value={precio} 
      onChange={(e) => setPrecio(e.target.value)} 
      placeholder="Precio del producto"
    />
    <input 
      value={cantidad} 
      onChange={(e) => setCantidad(e.target.value)} 
      placeholder="Cantidad en stock"
    />



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