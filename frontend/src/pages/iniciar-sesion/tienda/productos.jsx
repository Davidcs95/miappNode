import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productos.css';

const ProductCarousel = ({ productos }) => {
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
                
                {/* Usamos DIVs para agrupar, evitando P dentro de P */}
                <div className="precio-container">
                  <div className="precio">${producto.precio.toLocaleString('es-CO')}</div>
                  <div className="cantidad">Stock: {producto.cantidad} unidades</div>
                </div>

                <button 
                  className="btn-comprar" 
                  onClick={() => console.log('Agregado:', producto.nombre)}
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