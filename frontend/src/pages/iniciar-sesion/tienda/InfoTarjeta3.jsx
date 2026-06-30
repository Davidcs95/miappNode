import React, { useState } from 'react';
import './InfoTarjeta3.css';

const InfoTarjeta3 = () => {
  const [expandido, setExpandido] = useState(false);

  return (
    <section className="tarjeta-informativa">
      {/* Información básica siempre visible */}
      <div className="contenido-resumido">
        <h2>Advantages of having farm animals</h2>
        <p className='texto-principal'>
          Raising farm animals allows for food self-sufficiency, promotes sustainable practices through the recycling of organic waste, and strengthens the local economy. Furthermore, they encourage an active lifestyle and provide companionship..
        </p>

        
        {expandido && (

          <div className="contenido-extra">

    <div className="columna-izquierda-tarjeta">
      <strong>Advantages of having farm animals</strong>

      <p>• Food self-sufficiency and quality: You gain direct access to fresh and organic foods such as eggs, milk and meat, controlling exactly what they consume unprocessed..</p>
      <p>• Sustainable agriculture: Manure works as an excellent natural fertilizer, improving soil quality and crops. It also helps recycle crop residues and organic waste.</p>
      <p>• Pest management and weeding: Species such as chickens or geese naturally help control insects, larvae, and weeds on the land..</p>
      <p>• Terapia y bienestar emocional: El contacto con animales reduce el estrés, mejora el estado de ánimo y aumenta la empatía y responsabilidad en los miembros de la..</p>
      <p>• Inter-row grazing: Medium-sized animals clear weeds between fruit trees, reducing labor costs and the use of scythes.</p>
      <p>• Easy to care for.</p>
    </div>

    <div className="columna-derecha-tarjeta">
      <strong>Other benefits</strong>

      <p>• Steady income: While coffee or fruit crops take months to harvest, the daily sale of milk or eggs ensures a continuous cash flow..</p>
      <p>• Guaranteed nutrition: Protect your family's diet with high-quality protein without depending on the prices of urban food stalls..</p>
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

export default InfoTarjeta3;