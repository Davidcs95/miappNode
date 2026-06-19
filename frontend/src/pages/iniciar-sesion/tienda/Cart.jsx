import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './cart.css';

const Cart = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(productosGuardados);
  }, []);

  // Función para actualizar el carrito en localStorage
  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const modificarCantidad = (id, delta) => {
    const nuevoCarrito = carrito.map(item => {
      if (item.id === id) {
        const nuevaCantidad = (item.cantidadSeleccionada || 1) + delta;
        return { ...item, cantidadSeleccionada: Math.max(1, nuevaCantidad) };
      }
      return item;
    });
    actualizarCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    actualizarCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + (item.precio * (item.cantidadSeleccionada || 1)), 0);
  };

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {carrito.map(item => (
        
        <div key={item.id} className="cart-item"> 
        <img 
      src={item.imagen} 
      alt={item.nombre} 
      style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '20px', borderRadius: '8px' }} 
    />

              
          <span>{item.nombre} - ${item.precio}</span>
          <button onClick={() => modificarCantidad(item.id, -1)}>-</button>
          <span>{item.cantidadSeleccionada || 1}</span>
          <button onClick={() => modificarCantidad(item.id, 1)}>+</button>
          <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
        </div>
      ))}
      
      <div className="cart-total">
        <h3>Total: ${calcularTotal().toLocaleString('es-CO')}</h3>
        <button className="btn-pagar" onClick={() => Swal.fire('Procesando', 'Redirigiendo a pago...', 'info')}>
          Continuar con el pago
        </button>
      </div>
    </div>
  );
};

export default Cart;