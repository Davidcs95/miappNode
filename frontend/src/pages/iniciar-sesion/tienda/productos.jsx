import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productos.css';

const ProductCarousel = ({ productos, onAgregarAlCarrito }) => {
  const navigate = useNavigate();

  // Función para agregar al carrito usando la clave 'compras'
  const handleAgregarCarrito = (producto) => {
    // CAMBIO AQUÍ: leemos de 'compras'
    const carritoActual = JSON.parse(localStorage.getItem('compras')) || [];
    const nuevoCarrito = [...carritoActual, producto];
    
    // CAMBIO AQUÍ: guardamos en 'compras'
    localStorage.setItem('compras', JSON.stringify(nuevoCarrito));
    console.log("Producto guardado:", producto);
    console.log("Carrito total en LocalStorage:", localStorage.getItem('compras'));

    Swal.fire({
      title: 'Added!',
      text: `${producto.nombre} is in your cart.`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'See cart',
      cancelButtonText: 'Continue shopping',
      confirmButtonColor: '#ff9800',
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir a la página de compras
        navigate('/compras'); 
      }
    });
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id}>
            <div className="card">
              <img
                src={producto.imagen.startsWith('http') ? producto.imagen : `${import.meta.env.VITE_API_URL}/api/imagenes/${producto.imagen}`}
                alt={producto.nombre}
              />
              
              <div className="card-info">
                <h3>{producto.nombre}</h3>
                <div className="descripcion">{producto.descripcion}</div>
                
                <div className="precio-container">
                  <div className="precio">${producto.precio?.toLocaleString('es-CO')}</div>
                  <div className="cantidad">Stock: {producto.cantidad} units</div>
                </div>

                <button 
                  className="btn-comprar" 
                  onClick={() => handleAgregarCarrito(producto)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
