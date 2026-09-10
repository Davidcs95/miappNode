import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './cart.css';

const Cart = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  // Cargar compras desde localStorage usando la clave 'compras'
  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem('compras')) || [];

    setCarrito(productosGuardados);
  }, []);

  // Actualizar carrito en estado y guardar en localStorage bajo la clave 'compras'
  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('compras', JSON.stringify(nuevoCarrito));
  };

  // Aumentar o disminuir cantidad
  const modificarCantidad = (id, delta) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === id) {
        const nuevaCantidad =
          (item.cantidadSeleccionada || 1) + delta;

        return {
          ...item,
          cantidadSeleccionada: Math.max(1, nuevaCantidad),
        };
      }

      return item;
    });

    actualizarCarrito(nuevoCarrito);
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(
      (item) => item.id !== id
    );

    actualizarCarrito(nuevoCarrito);
  };

  // Calcular total
  const calcularTotal = () => {
    return carrito.reduce(
      (acc, item) =>
        acc +
        item.precio * (item.cantidadSeleccionada || 1),
      0
    );
  };

  return (
    <div className="cart-container">

      {/* Botón Back para retroceder */}
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Tu Carrito</h2>

      {carrito.length === 0 ? (
       
        <div className="cart-empty">
          <span className="cart-empty-icon">🐶🔍</span>
          <p>Tu carrito está vacío.</p>
        </div>
      ) : (
        carrito.map((item) => {
          console.log("Producto:", item.nombre, "Valor de item.imagen:", item.imagen);

          return (
            <div key={item.id} className="cart-item">

              {/* Imagen del producto */}
              <img 
                src={item.imagen.startsWith('http') ? item.imagen : `${import.meta.env.VITE_API_URL}/api/imagenes/${item.imagen}`} 
                alt={item.nombre} 
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  marginRight: '20px',
                  borderRadius: '8px',
                }}
              />

              {/* Información del producto */}
              <span>
                {item.nombre} - $
                {item.precio.toLocaleString('es-CO')}
              </span>

              {/* Botón disminuir */}
              <button
                onClick={() =>
                  modificarCantidad(item.id, -1)
                }
              >
                -
              </button>

              {/* Cantidad */}
              <span>
                {item.cantidadSeleccionada || 1}
              </span>

              {/* Botón aumentar */}
              <button
                onClick={() =>
                  modificarCantidad(item.id, 1)
                }
              >
                +
              </button>

              {/* Eliminar */}
              <button
                onClick={() =>
                  eliminarProducto(item.id)
                }
              >
                Eliminar
              </button>

            </div>
          );
        })
      )}

      {/* Total y pago */}
      {carrito.length > 0 && (
        <div className="cart-total">

          <h3>
            Total: $
            {calcularTotal().toLocaleString('es-CO')}
          </h3>

          <button
            className="btn-pagar"
            onClick={() =>
              Swal.fire(
                'Procesando',
                'Redirigiendo a pago...',
                'info'
              )
            }
          >
            Continuar con el pago
          </button>

        </div>
      )}

    </div>
  );
};

export default Cart;