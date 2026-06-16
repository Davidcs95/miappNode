import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Section2.css';
import './Section3.css';

const Tienda = ({ usuarioLogueado, cerrarSesion }) => {

  // funcion para formulario
  const handleScroll = () => {
  const element = document.getElementById("formulario-registro");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (

  <div> 

    <section>
      {/* Contenedor del encabezado (Barra Azul) */}
      <div className="head">
        <div className="titulo">


          {/* Usamos <Link> de React Router en lugar de <a> para navegar sin recargar la página */}
          
          
          <Link to="/" className="logo">

           <h1>
            <img src="/imagenes/Filomena.png" alt="Logo Filomena"/>
              ¡Filomena store!
            </h1>
          </Link>






           {usuarioLogueado ? (
            
           <div className="saludo-usuario">
           <h3>¡Hola, {usuarioLogueado.nombre}!</h3>
           {/* Botón para cerrar sesión */}
           <button  className="button2" onClick={cerrarSesion}>Cerrar Sesión</button>
           </div>
          ) : null}


        </div>
        
        <input className="input1" type="text" placeholder="What are you looking for?" name="search" />
        <button className="button1" type="submit">¡go!</button>

        {/* Enlace al Login corregido con <Link> */}
        <li className="login">
          <img className="img-iniciar-sesion" src="imagenes/iniciar-sesion.png" alt="" />
          <Link to="/login"> Login</Link>
        </li>
        
        <li className="carrito">
          <img className="img-carrito" src="imagenes/carrito-de-compras.png" alt="" />
          <Link to="/compras"> Purchase</Link>
        </li>
      </div>

      {/* Contenedor de navegación (Menús de animales) */}
      <div className="nav2">
        <li className="dropdown">
          <img className="#" src="imagenes/perro.png" alt="DOG" /> 
          <a href="#">DOGS</a>
          <ul className="submenu">
            <li><a href="#">Toys</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Beds</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </li>

        <li className="dropdowntwo">
          <img className="cat" src="imagenes/pata.png" alt="CAT" />
          <Link to="/"> CATS</Link>
          <ul className="submenu2">
            <li><a href="#">Toys</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Beds</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Other things</a></li>
          </ul>
        </li>

        <li className="dropdownthree">
          <img className="ganado" src="imagenes/ganado 2.png" alt="otros" />
          <a href="#"> OTHERS ANIMALS</a>
          <ul className="submenu3">
            <li><a href="#">Birds</a></li>
            <li><a href="#">Fishes</a></li>
            <li><a href="#">Rodents</a></li>
            <li><a href="#">Horses</a></li>
            <li><a href="#">Rabbits</a></li>
            <li><a href="#">Others</a></li>
          </ul>
        </li>

        <li className="contact">
          <img className="huella" src="imagenes/huella.png" alt="" />
          <a href="#"> CONTACT US</a>
        </li>   

        <li className="find-store">
          <img className="find your store" src="imagenes/store-solid.png" alt="" />
          <a href="#"> FIND YOUR STORE</a>
        </li>  
      </div>        
    </section>

   
     <section>

      <div className="section2">


        <p> ¡Welcome to the ultimate pet paradise! Explore our extensive selection of products and professional services for your pets. Want to stay updated? Click the button below to join our community and learn more."!</p>

       <button 
        type="button" 
        className="boton-registro" 
        onClick={handleScroll}
       >
       ¡Register here!
       </button>

        

       <div id="formulario-registro">
        </div>  
          
       

     

      </div>

      </section>



    <section>
   <div className='section3'>
    
   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi exercitationem, atque voluptatibus aperiam natus temporibus provident animi blanditiis inventore nam, quod perferendis impedit voluptas! Voluptatum debitis quis unde a.</p>


   </div>


    </section>    

    













  </div>
  );
};

export default Tienda;