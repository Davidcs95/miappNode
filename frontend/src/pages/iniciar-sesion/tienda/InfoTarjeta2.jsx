import React, { useState } from 'react';
import './InfoTarjeta2.css';

const InfoTarjeta2 = () => {
  const [expandido, setExpandido] = useState(false);

  return (
    <section className="tarjeta-informativa">
      {/* Información básica siempre visible */}
      <div className="contenido-resumido">
        <h2>Reasons to live with a cat at home</h2>
        <p className='texto-principal'>
          Cats, along with dogs, are the most common pets in the home. They are independent yet loyal. Their characteristics make them the perfect choice for people with less time, as they generally require less attention than a dog. You probably already knew all this, but you might not know about the positive effects they have on people's health. That's right, there are many benefits to having a cat at home, and we'll tell you all about them below..
        </p>

        
        {expandido && (

          <div className="contenido-extra">

    <div className="columna-izquierda-tarjeta">
      <strong>Advantages of having a cat at home</strong>

      <p>• They are affectionate yet independent.</p>
      <p>• They don't need to go outside to relieve themselves or for walks..</p>
      <p>• They tolerate solitude better than dogs..</p>
      <p>• They are extremely clean...</p>
      <p>• They make you laugh...</p>
      <p>• Easy to care for.</p>
    </div>

    <div className="columna-derecha-tarjeta">
      <strong>Other benefits</strong>

      <p>• Improved sleep and rest: The special bond that forms between a person and their cat can have a positive effect on sleep quality. Feeling a cat's presence by our side provides a sense of security and tranquility, helping us fall asleep more easily and enjoy restful sleep.</p>
      <p>• Improves cardiovascular health.</p>
      <p>• Helps maintain active routines.</p>
    </div>

  </div>
)}

        <button className='btn-info' onClick={() => setExpandido(!expandido)}>
          {expandido ? "Less info" : "More info"}
        </button>
      </div>
    </section>
  );
};

export default InfoTarjeta2;