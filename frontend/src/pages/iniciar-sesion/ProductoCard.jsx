import React from 'react';

// Recibimos 'data' como prop, que es el objeto con toda la información
const ProductoCard = ({ data }) => {
  return (
    <div className="tarjeta-producto">
      {/* 1. Imagen */}
      <img src={data.imagen} alt={data.nombre} className="card-img" />
      
      {/* 2. Nombre */}
      <h3>{data.nombre}</h3>
      
      {/* 3. Descripción */}
      <p className="descripcion-corta">{data.descripcion}</p>
      
      {/* 4. Precio y cantidad */}
      <div className="info-extra">
        <p><strong>Precio:</strong> ${data.precio}</p>
        <p><strong>Stock:</strong> {data.cantidad} unidades</p>
      </div>

      {/* 5. Botón */}
      <button className="button2">Add to cart</button>
    </div>
  );
}

export default ProductoCard;