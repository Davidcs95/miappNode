import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Carrusel() {
  return (
    <div className="carrusel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true} // Si tienes 3 imágenes o más, esto funcionará
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        modules={[EffectCoverflow, Navigation, Autoplay]}
      >
        <SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/caballo11.jpg`} alt="1" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/conejo1.webp`} alt="2" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/maggi2.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/cateating2.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/catanddog.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/orange.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/cama1.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/Ave.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/food1.webp`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/cepillodog.webp`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/horseeating.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/dogfood.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/dogeating1.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/Comidacat.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/ave1.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/Arena.jpg`} alt="3" /></SwiperSlide>
<SwiperSlide className="tarjeta-3d"><img src={`${import.meta.env.VITE_API_URL}/imagenes/toys1.webp`} alt="3" /></SwiperSlide>
      </Swiper>
    </div>
  );
}