import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productos.css';

const ProductCarousel = ({ productos }) => {
  const navigate = useNavigate();

  // 1. Definimos la función para la alerta
    const handleAgregarCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = [...carritoActual, producto];
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    console.log("Producto guardado:", producto);
    console.log("Carrito total en LocalStorage:", localStorage.getItem('carrito'));
  



    Swal.fire({
    title: '¡Agregado!',
    text: `${producto.nombre} está en tu carrito.`,
    icon: 'success',
    showCancelButton: true, // Esto crea el botón "Next"
    confirmButtonText: 'Ver carrito',
    cancelButtonText: 'Seguir comprando',
    confirmButtonColor: '#ff9800',
    }).then((result) => {
    if (result.isConfirmed) {
      // Redirigir a la página de carrito
     navigate('/carrito'); 
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
              <img src={producto.imagen} alt={producto.nombre} />
              
              <div className="card-info">
                <h3>{producto.nombre}</h3>
                <div className="descripcion">{producto.descripcion}</div>
                
                <div className="precio-container">
                  <div className="precio">${producto.precio?.toLocaleString('es-CO')}</div>
                  <div className="cantidad">Stock: {producto.cantidad} unidades</div>
                </div>

                <button 
                  className="btn-comprar" 
                  // 2. Aquí llamamos a la función pasando el producto específico
                  onClick={() => handleAgregarCarrito(producto)}
                >
                  Agregar al carrito
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