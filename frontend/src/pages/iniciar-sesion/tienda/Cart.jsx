import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './cart.css';

const Cart = () => {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const productosGuardados =
      JSON.parse(localStorage.getItem('carrito')) || [];

    setCarrito(productosGuardados);
  }, []);

  // Actualizar carrito en estado y localStorage
  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
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

      <h2>Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        carrito.map((item) => {
          // Log para inspeccionar qué trae cada producto y su imagen exacta
          console.log("Producto:", item.nombre, "Valor de item.imagen:", item.imagen);

          return (
            <div key={item.id} className="cart-item">

              {/* Imagen del producto */}
              <img
                src={`${import.meta.env.VITE_API_URL}${item.imagen}`}
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