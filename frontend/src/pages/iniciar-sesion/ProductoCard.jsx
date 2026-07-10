import React from 'react';

const ProductoCard = ({ data }) => {
  return (
    <div className="tarjeta-producto">
      <img src={data.imagen} alt={data.nombre} />
      <h3>{data.nombre}</h3>
      <button className="button2">Comprar</button>
    </div>
  );
}

export default ProductoCard;