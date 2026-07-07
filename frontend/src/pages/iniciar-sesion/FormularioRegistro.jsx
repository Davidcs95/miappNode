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
    
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <div className="formulario-contenedor" id="formulario-registro">
      <h2>Registro de Mascota</h2>
      <form>
        <input name="nombrePropietario" placeholder="Full name" onChange={handleChange} required />
        
    
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        
        <input name="ciudad" placeholder="City" onChange={handleChange} required />
        <select name="categoria" onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="perro">Dog</option>
          <option value="gato">Cat</option>
          <option value="otros">Other animals</option>
        </select>
        {formData.categoria === 'perro' && (
            <input name="raza" placeholder="Dog breed" onChange={handleChange} />
        )}
        {formData.categoria === 'gato' && (
          <input name="raza" placeholder="cat breed" onChange={handleChange} />
        )}

        {formData.categoria === 'otros' && (
          <input name="especieOtros" placeholder="What type of animal is it?" onChange={handleChange} />
        )}

        {formData.categoria && (
          <>
            <input name="nombreMascota" placeholder="pet name" onChange={handleChange} />
            <input name="edad" type="number" placeholder="Age" onChange={handleChange} />
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
             I authorize the sending of information to my email.
          </label>
        </div>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;