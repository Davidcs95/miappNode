import React, { useState } from 'react';
import './FormularioRegistro.css'


const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    nombrePropietario: '',
    email: '', // Nuevo campo
    autorizaEnvio: false, // Nuevo estado booleano
    ciudad: '',
    categoria: '',
    nombreMascota: '',
    raza: '',
    edad: '',
    color: '',
    especieOtros: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Si es checkbox, tomamos 'checked', si no, el 'value'
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <div className="formulario-contenedor" id="formulario-registro">
      <h2>Registro de Mascota</h2>
      <form>
        <input name="nombrePropietario" placeholder="Tu nombre completo" onChange={handleChange} required />
        
    
        <input name="email" type="email" placeholder="Correo electrónico" onChange={handleChange} required />
        
        <input name="ciudad" placeholder="Ciudad" onChange={handleChange} required />
        <select name="categoria" onChange={handleChange}>
          <option value="">Selecciona una categoría</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="otros">Otros animales</option>
        </select>
        {formData.categoria === 'perro' && (
            <input name="raza" placeholder="Raza del perro" onChange={handleChange} />
        )}
        {formData.categoria === 'gato' && (
          <input name="raza" placeholder="Raza del gato" onChange={handleChange} />
        )}

        {formData.categoria === 'otros' && (
          <input name="especieOtros" placeholder="¿Qué tipo de animal es?" onChange={handleChange} />
        )}

        {formData.categoria && (
          <>
            <input name="nombreMascota" placeholder="Nombre de la mascota" onChange={handleChange} />
            <input name="edad" type="number" placeholder="Edad" onChange={handleChange} />
            <input name="color" placeholder="Color" onChange={handleChange} />
          </>
        )}

       

        {/* Checkbox de Autorización */}
        <div className="checkbox-contenedor" style={{ margin: '15px 0' }}>
          <label>
            <input 
              type="checkbox" 
              name="autorizaEnvio" 
              checked={formData.autorizaEnvio} 
              onChange={handleChange} 
            />
            Autorizo el envío de información a mi correo.
          </label>
        </div>

        <button type="submit">Enviar Registro</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;