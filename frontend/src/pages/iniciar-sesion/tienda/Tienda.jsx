import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Section2.css';
import './Section3.css';
import './Carrusel.css';
import Carrusel from './Carrusel';
import './section4.css';
import './productos.css';
import ProductCarousel from './productos';


const Tienda = ({ usuarioLogueado, cerrarSesion }) => {
const misProductos = [

    {
      id: 1, nombre: "Refillable toys",
      precio: 30.000, 
      imagen: "/imagenes/Juguetes.jpg",
      descripcion: "Refillable dog toys are interactive accessories designed with a hollow interior that can be filled with wet food, kibble, or treats. They function like an edible puzzle, stimulating the intellect, reducing anxiety, and relieving boredom by encouraging the pet to lick or chew to extract the reward..", 
      cantidad:5
    },
      
    { id: 20, nombre: "Wet dog food", 
      precio: 8.000, 
      imagen: "/imagenes/PEDIGREE.jpg", 
      descripcion: "Wet dog food is a food rich in water (up to 80%), packaged in cans or airtight envelopes. It combines fresh and natural ingredients such as meats and vegetables, offering a soft texture, intense flavor and high hydration. It is ideal for stimulating appetite, promoting digestion and facilitating chewing.",
      cantidad: 12
    },
    { id: 3, nombre: "Bed", 
      precio: 50.000, 
      imagen: "/imagenes/cama2.jpg", 
      descripcion: "Dog beds and mats are accessories designed to ensure your dog's comfort, protect their joints, and regulate their temperature. They are classified according to their materials and features, with orthopedic, cooling (gel-infused), and elevated options being particularly noteworthy. .",
      cantidad: 12
    },
    { id: 4, nombre: "paw dazzle", 
      precio: 47.000, 
      imagen: "/imagenes/rascadordog.jpg", 
      descripcion: "Specialize in fresh, locally-made dog treats, beautifully iced bakery cookies, collars, toys, and apparel (including bridal wear for pets).A highly-rated, family-owned pet bakery and boutique, or a specialized line of dog-grooming and scratch-board products..",
      cantidad: 4
    },
    { id: 5, nombre: "nn", 
      precio: 11.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 6, nombre: "nnn", 
      precio: 12.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 7, nombre: "a", 
      precio: 13.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 8, nombre: "aa", 
      precio: 12.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 9, nombre: "aaa", 
      precio: 15.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 10, nombre: "aaaa", 
      precio: 16.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },
    { id: 11, nombre: "q", 
      precio: 17.000, 
      imagen: "/imagenes/snaks.jpg", 
      descripcion: "Juguete resistente ideal para mantener a tu perro entretenido por horas.",
      cantidad: 12
    },

  ];
 




  // funcion para formulario
  const handleScroll = () => {
  const element = document.getElementById("formulario-registro");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    
  }
};

 
  return (

    

  <div> 


    

    <section>  {/* head 1 */}
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
           <h3>¡Hola, {usuarioLogueado.username}!</h3>
           {/* Botón para cerrar sesión */}
           <button  className="button2" onClick={cerrarSesion}>Cerrar Sesión</button>
           </div>
          ) : null}


        </div>

      <div class="huesos">
          <input className='hueso111'
            type="text"
            class="input1"
            placeholder="What are you looking for?"
        />
    
       </div>


        <button className="button3" type="submit">¡go!</button>
        

        {/* Enlace al Login */}
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

   
     <section> {/* head 2 */}

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



    <section> {/* head 3 */}
    <div className='section3'> 
    
   
   

   <Carrusel />


    


   </div>


    </section>    

    



    <section>  {/* head 4 */}

    <section className="parallax-section">
    <div className="parallax-bg" style={{ backgroundImage: "url('/imagenes/labradorright.jpg')" }}></div>
    <h2 className="section-title">DOGS</h2>
    </section>

    <div className='tarjetas1'>

    <div className="tarjetas2">
      <h1>Nuestros Productos</h1>
      <ProductCarousel productos={misProductos} />
      <button onClick={handleScroll}>Ir al formulario</button>
    </div>
   



    </div>




    </section>




   <section>


    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic id nam doloremque cum porro deserunt voluptatem temporibus! Quia enim eos esse expedita nam repudiandae explicabo laudantium architecto, magnam nostrum libero sequi asperiores eaque rerum tenetur, dicta officia? Adipisci ducimus itaque labore at aliquam, sit quis dolores dolore, dignissimos dolorem omnis vel temporibus. Eius libero sit doloremque alias, corrupti commodi tenetur, aliquam facilis neque ex dolore consequuntur deserunt numquam rerum minus! Nulla voluptates iusto, porro, amet error dolorum unde nobis ipsa sed, recusandae obcaecati ipsum perferendis eveniet illum exercitationem delectus laborum harum temporibus ullam facere sapiente incidunt magni eum non. Minima minus velit nihil laudantium accusamus deleniti ipsam necessitatibus obcaecati quae labore quam, repellat sapiente suscipit deserunt consectetur enim vel dolor commodi a soluta in nobis quis saepe distinctio. Necessitatibus animi dicta quo laborum suscipit hic? Facere, quaerat eaque illum veniam assumenda nostrum dolores non optio itaque, velit adipisci inventore repudiandae voluptatem! Quae officiis excepturi, totam necessitatibus modi dignissimos incidunt eius! Deleniti perferendis optio distinctio id cumque esse aliquam maiores nobis voluptas vel reprehenderit impedit, alias asperiores. At ad maiores quam delectus autem exercitationem modi magnam. Vel quos temporibus, eius atque, architecto cum neque nam similique, tenetur consequatur blanditiis perspiciatis necessitatibus dolores maxime! Itaque aliquid excepturi dolor repudiandae fuga aliquam officia ullam facilis explicabo veniam obcaecati, quod pariatur ad, quidem nemo ipsam. Voluptatem tenetur error, exercitationem commodi possimus ea! Perspiciatis ad aliquid culpa iusto quo ipsam autem aspernatur sint id temporibus, reiciendis alias rerum? Corrupti, minus laborum illum modi omnis quis nostrum doloribus eius laboriosam exercitationem quibusdam accusamus veritatis laudantium ipsum aspernatur explicabo ad, quaerat dolor dolorum dolores facilis? Voluptates velit iure inventore, fugiat rem ratione omnis eum? Tempore ratione unde sapiente ipsum totam officia vero tenetur sequi voluptates architecto autem rerum, qui ipsa consectetur distinctio. Perspiciatis quo ab veritatis nulla. Neque exercitationem quam quisquam natus esse id consectetur vero sit repellat maxime voluptatem at soluta magnam harum nihil totam temporibus, culpa veniam similique expedita sint, ex laborum hic. Sit soluta architecto fugiat vel ullam repellendus odio aut eaque doloribus, quo, quas, rerum atque reprehenderit nisi quia iste assumenda id laborum recusandae dolore et dolorum consectetur eveniet earum. Repellat facere numquam velit corporis molestiae ea blanditiis reprehenderit cum porro! Quia placeat ipsum aliquid, est tempore nulla maiores dolor, ipsam harum, animi quidem iusto officia. Consequatur nam quisquam, sequi laborum repellendus optio qui possimus ad officiis cum saepe eos eveniet. Eius quidem dolorem recusandae adipisci facilis facere, rem sapiente. Voluptates obcaecati culpa dolorum blanditiis nostrum assumenda, enim similique molestiae et veniam qui perferendis animi, recusandae quas modi nihil eos repudiandae totam cupiditate. Sit natus earum officia delectus repudiandae tempore rem commodi, deserunt similique adipisci, esse dignissimos consequatur voluptatem. Deleniti sequi voluptas, eaque expedita odio ad facere minima dolorem nulla autem beatae quas illo. Recusandae et omnis, ut minus, sunt eaque iste dicta, totam praesentium quos quia! Tempora necessitatibus itaque, ea laboriosam fugit omnis sit nam non dignissimos deserunt sequi dicta suscipit corporis accusamus perferendis officia distinctio quasi quia quod. Reprehenderit, aliquid quibusdam!</p>
   </section>








  </div>
  );
};

export default Tienda;