import React, { useState } from 'react';
import './InfoTarjeta.css';

const InfoTarjeta = () => {
  const [expandido, setExpandido] = useState(false);

  return (
    <section className="tarjeta-informativa">
      {/* Información básica siempre visible */}
      <div className="contenido-resumido">
        <h2>Why is caring for a pet beneficial to your health?</h2>
        <p className='texto-principal'>
          Those who have pets know the joy that an animal's companionship brings. 
          Even so, the presence of pets at home not only brings joy and well-being, 
          but can also have very positive effects on our health.
        </p>

        
        {expandido && (

          <div className="contenido-extra">

    <div className="columna-izquierda-tarjeta">
      <strong>Emotional Benefits</strong>

      <p>• Reduces stress and anxiety.</p>
      <p>• Provides companionship.</p>
      <p>• Improves mood and happiness.</p>
    </div>

    <div className="columna-derecha-tarjeta">
      <strong>Physical Benefits</strong>

      <p>• Encourages daily exercise.</p>
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

export default InfoTarjeta;