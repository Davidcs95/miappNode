import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import './Section2.css';
import './Section3.css';
import './Carrusel.css';
import Carrusel from './Carrusel';
import './section4.css';
import './productos.css';
import ProductCarousel from './productos';
import InfoTarjeta from './InfoTarjeta';
import InfoTarjeta2 from './InfoTarjeta2';
import InfoTarjeta3 from './InfoTarjeta3';
import FormularioRegistro from '../FormularioRegistro';
import Mapa from './Mapa';



const Tienda = ({ usuarioLogueado, cerrarSesion }) => {
const [showButton, setShowButton] = useState(false);
const seccionPerrosRef = useRef(null);
const seccionCatsRef = useRef(null);
const seccionAnimalsRef = useRef(null);
const seccionFormRegRef = useRef(null);
const seccionFindStoreRef = useRef(null);
const seccionRegistroRef = useRef(null);


// 2. Efecto para el botón de volver arriba

useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > 300;
      console.log("¿Botón visible?:", isVisible);
      setShowButton(isVisible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
const scrollToPerros = () => {
  seccionPerrosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCats = () => { // Nueva función
  seccionCatsRef.current?.scrollIntoView({ behavior: 'smooth' });
};




const scrollToAnimals = () => {
  seccionAnimalsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

   const scrollToFormReg = () => { // Nueva función
  seccionFormRegRef.current?.scrollIntoView({ behavior: 'smooth' });
};


 const scrollToFindStore = () => { // Nueva función
  seccionFindStoreRef.current?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToRegistro = () => {
  const element = document.getElementById("formulario-registro");
  if (seccionRegistroRef.current) {
    seccionRegistroRef.current.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error("Error: La referencia es nula. ¡El div no está conectado!");
  }
};

const misProductos = [

    {
      id: 1, nombre: "Refillable toys",
      precio: 30.000, 
      imagen: "/imagenes/Juguetes.jpg",
      descripcion: "Refillable dog toys are interactive accessories designed with a hollow interior that can be filled with wet food, kibble, or treats. They function like an edible puzzle, stimulating the intellect, reducing anxiety, and relieving boredom by encouraging the pet to lick or chew to extract the reward..", 
      cantidad:5
    },
      
    { id: 1, nombre: "Wet dog food", 
      precio: 8.000,
      categoria: "Dog", 
      imagen: "/imagenes/PEDIGREE.jpg", 
      descripcion: "Wet dog food is a food rich in water (up to 80%), packaged in cans or airtight envelopes. It combines fresh and natural ingredients such as meats and vegetables, offering a soft texture, intense flavor and high hydration. It is ideal for stimulating appetite, promoting digestion and facilitating chewing.",
      cantidad: 80
    },
    { id: 2, nombre: "Bed", 
      precio: 100.000,
      categoria: "Dog", 
      imagen: "/imagenes/cama2.jpg", 
      descripcion: "Dog beds and mats are accessories designed to ensure your dog's comfort, protect their joints, and regulate their temperature. They are classified according to their materials and features, with orthopedic, cooling (gel-infused), and elevated options being particularly noteworthy. .",
      cantidad: 6
    },
    { id: 3, nombre: "paw dazzle", 
      precio: 47.000,
      categoria: "Dog", 
      imagen: "/imagenes/rascadordog.jpg", 
      descripcion: "Specialize in fresh, locally-made dog treats, beautifully iced bakery cookies, collars, toys, and apparel (including bridal wear for pets).A highly-rated, family-owned pet bakery and boutique, or a specialized line of dog-grooming and scratch-board products..",
      cantidad: 7
    },
    { id: 4, nombre: "feeder", 
      precio: 60.000, 
      categoria: "Dog",
      imagen: "/imagenes/Comederos_bebederos.jpg", 
      descripcion: "Food and water bowls are essential accessories designed to ensure your dog is properly fed and hydrated. They help maintain good posture, control the rate of food intake, and ensure access to fresh water. Stainless steel: Made of stainless steel or ceramic to maintain hygiene..",
      cantidad: 40
    },
    { id: 5, nombre: "Collar or Harness", 
      precio: 58.000, 
      categoria: "Dog",
      imagen: "/imagenes/Collar_Arnes.jpg", 
      descripcion: "A dog collar is an essential safety and control accessory fastened around a dog's neck. It primarily serves as a sturdy anchor for attaching a leash during walks, a platform to display identification tags, and a secure base for specialized devices like GPS trackers or parasite treatments.",
      cantidad: 24
    },
    { id: 6, nombre: "Bags and dispenser", 
      precio: 15.000,
      categoria: "Dog", 
      imagen: "/imagenes/Bolsas_dispensador.jpg", 
      descripcion: "A dog waste bag dispenser is a portable accessory that attaches to a leash or backpack for conveniently carrying rolls of bags. Designed to collect waste during walks, it allows for quick and clean bag removal.",
      cantidad: 30
    },
    { id: 7, nombre: "blanket", 
      precio: 38.000,
      categoria: "Dog", 
      imagen: "/imagenes/Manta_Cobija.jpg", 
      descripcion: "A dog blanket (manta o cobija) is a cozy, insulating accessory designed to provide warmth, comfort, and security. Perfect for lining beds, sofas, or crates, they typically feature soft, pet-safe materials and are highly machine-washable.",
      cantidad: 10
    },
    { id: 8, nombre: "kennel", 
      precio: 55.000,
      categoria: "Dog", 
      imagen: "/imagenes/Transportín_guacal.jpg", 
      descripcion: "A transportín or guacal (kennel) is a portable, enclosed container used to safely and comfortably transport dogs. It provides a secure den-like environment for travel, vet visits, or crate training, and is strictly required by airlines to meet specific safety standards..",
      cantidad: 2
    },
    { id: 9, nombre: "Dog shampoo and conditioner", 
      precio: 16.000,
      categoria: "Dog", 
      imagen: "/imagenes/Champu_acondicionador.jpg", 
      descripcion: "Dog shampoo and conditioner are hygiene products formulated to cleanse dirt, control odors, and maintain your pet's skin pH balance. Using both products nourishes the coat, prevents dryness, detangles fur, and makes brushing easier..",
      cantidad: 8
    },
    { id: 10, nombre: "Comb", 
      precio: 22.000, 
      imagen: "/imagenes/Cepillo_peine.jpg", 
      categoria: "Dog",
      descripcion: "Choosing between a brush or comb depends entirely on your dog’s coat type. Brushes are best for removing loose hair, distributing natural oils, and removing surface dirt, while combs are precision tools designed to penetrate deep, untangle stubborn mats, and check for fleas.",
      cantidad: 50
    },

    { id: 11, nombre: "Dry food", 
      precio: 5.000, 
      categoria: "Cat",
      imagen: "/imagenes/foodcat.jpg", 
      descripcion: "Is dehydrated food with only 6% to 11% moisture. It's a popular choice for pets because of its long shelf life and low cost. The crunchy texture helps reduce tartar buildup, although it requires more carbohydrates to produce.",
      cantidad: 50
    },

     { id: 12, nombre: "Feeders and waterers", 
      precio: 80.000, 
      categoria: "Cat",
      imagen: "/imagenes/comederocat.jpg", 
      descripcion: "Feeders and waterers are containers or automatic systems designed to provide food and fresh water continuously or periodically to animals. They prevent waste, maintain hygiene, and ensure animal welfare and nutrition.",
      cantidad: 15
    },
     { id: 13, nombre: "Arenero", 
      precio: 22.000, 
      categoria: "Cat",
      imagen: "/imagenes/arenaa.jpg", 
      descripcion: "An arenero (bandeja sanitaria) is a specialized indoor container where pets, primarily cats, relieve themselves. The arena (o sustrato) is the absorbent material placed inside, which triggers their instinct to dig and cover their waste..",
      cantidad: 90
    },

     { id: 14, nombre: "scoop", 
      precio: 9.000, 
      categoria: "Cat",
      imagen: "/imagenes/pala.jpg", 
      descripcion: "A litter scoop is an essential tool for maintaining your cat's litter box. Its design acts like a sieve, allowing you to easily remove solid waste while letting clean litter fall back into the box, optimizing hygiene and reducing litter consumption..",
      cantidad: 140
    },

     { id: 15, nombre: "Cat hammocks", 
      precio: 70.000, 
      categoria: "Cat",
      imagen: "/imagenes/camacat.jpg", 
      descripcion: "Cat hammocks and cunas (cat beds) are designed to provide felines with secure, comfortable retreats. Hammocks elevate cats to satisfy their love for heights and bird-watching, while cunas offer enclosed, padded spaces for nesting. Both utilize soft materials.",
      cantidad: 30
    },

     { id: 16, nombre: "Cat scratcher", 
      precio: 90.000, 
      categoria: "Cat",
      imagen: "/imagenes/rascadorcat.jpg", 
      descripcion: "A cat scratcher (rascador) is an essential feline accessory designed to satisfy a cat's natural urge to scratch. It protects your furniture while providing an outlet for stress, stretching, and marking territory. Helps remove old claw sheaths and keeps nails sharp.",
      cantidad: 80
    },

     { id: 17, nombre: "Clothing", 
      precio: 22.000, 
      categoria: "Cat",
      imagen: "/imagenes/ropacat.jpg", 
      descripcion: "Cat clothing is specially designed apparel for felines, ranging from lightweight cotton t-shirts and fleece sweaters to protective recovery suits. While some styles are for fashion, most serve practical purposes like keeping hairless breeds warm, shielding shaved skin, or preventing cats from licking surgical.",
      cantidad: 50
    },
    { id: 18, nombre: "Pig food", 
      precio: 22.000, 
      categoria: "Animal",
      imagen: "/imagenes/pigfood.jpg", 
      descripcion: "Pig feed is a balanced diet that combines energy sources (such as corn or sorghum), protein (soybean meal or meat by-products), and mineral supplements. The formulas are tailored to the animal's life stage (breeding, growing, or finishing) to ensure rapid development and high-quality meat..",
      cantidad: 50
    },


    { id: 19, nombre: "Chicken feeders", 
      precio: 29.000, 
      categoria: "Animal",
      imagen: "/imagenes/comederogallina.jpg", 
      descripcion: "Chicken feeders are containers designed to provide food continuously and in an orderly manner. Their main purpose is to optimize feed consumption, prevent birds from wasting or contaminating it by scratching, and ensure that all chickens have enough space to feed.",
      cantidad: 500
    },

    { id: 20, nombre: "Horse Health Red Cell", 
      precio: 77.000, 
      categoria: "Animal",
      imagen: "/imagenes/suplementohorse.jpg", 
      descripcion: "Horse Health Red Cell is a premium, iron-rich vitamin and mineral supplement designed to support normal blood cell health, cardiovascular function, and energy levels in horse.Energy & Performance: Provides essential nutrients to meet rigorous performance demands and maintain stamina.",
      cantidad: 71
    },
    { id: 21, nombre: "licopan Energy", 
      precio: 88.000, 
      categoria: "Animal",
      imagen: "/imagenes/caballosumplemento2.jpg", 
      descripcion: "licopan Energy is a premium veterinary supplement designed to provide rapid energy and nutritional support for equines (horses, mules, donkeys) and pigs. Formulated with readily assimilable amino acids, glucose, and essential vitamins (like the B-complex), it is used to stimulate the appetite, accelerate physical recovery, promote weight gain, and improve athletic performance..",
      cantidad: 96
    },
    { id: 22, nombre: "Solla Ponedoras", 
      precio: 37.000, 
      categoria: "Animal",
      imagen: "/imagenes/gallinafood.jpg", 
      descripcion: "Solla Ponedoras is a line of specialized commercial poultry feed designed to maximize egg production, ensure excellent conversion rates, and produce high-quality eggs with strong shells and vibrant yolk color. The feeds are tailored to support hens through their critical laying phases, from early production to the late stages..",
      cantidad: 30
    },
    { id: 23, nombre: "The Agrofácil Nipple Drinker", 
      precio: 44.000, 
      categoria: "Animal",
      imagen: "/imagenes/bebederochicken.jpg", 
      descripcion: "The Agrofácil Nipple Drinker with Coupling is a teat-type water supply system designed for efficient and clean drinking in poultry. It allows animals to drink by pecking at the valve, ensuring fresh water without spills..",
      cantidad: 400
    },

    { id: 24, nombre: "Pig feeders", 
      precio: 100.000, 
      categoria: "Animal",
      imagen: "/imagenes/pigfood2.jpg", 
      descripcion: "Pig feeders are essential structures designed to provide feed continuously or in rations. They optimize feed intake, minimize waste, and prevent feed contamination. They are adapted to the stage of development and the type of feeding system.",
      cantidad: 250
    },

  ];

  const productosDog = misProductos.filter(p => p.categoria === 'Dog');
  const productosCat = misProductos.filter(p => p.categoria === 'Cat');
  const productosAnimal = misProductos.filter(p => p.categoria === 'Animal');

// funcion para formulario
  const handleScroll = () => {
  const element = document.getElementById("formulario-registro");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    
  }
};
 console.log("Perros filtrados:", productosDog);
 console.log("Gatos filtrados:", productosCat);
 console.log("Animal filtrados:", productosAnimal);
 
  

  return (

  <div className="contenedor-padre"> 


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
            className="input1"
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
          <button onClick={scrollToPerros} className="btn-link-nav">Dogs</button>
          <ul className="submenu">
            <li><a href="#">Toys</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Beds</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
          
        </li>
        

        <li className="dropdowntwo">
          <img className="cat" src="imagenes/pata.png" alt="CAT" />
          <button onClick={scrollToCats} className="btn-link-nav">Cats</button>
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
         <button onClick={scrollToAnimals} className="btn-link-nav">Others Animals</button>
         

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
          <button onClick={scrollToFormReg} className="btn-link-nav">Contact Us</button>
          
        </li>   

        <li className="find-store">
          <img className="find your store" src="imagenes/store-solid.png" alt="" />
          <button onClick={scrollToFindStore} className="btn-link-nav">Find your store</button>
        </li>
         

        {showButton && (
  <button className="btn-back-to-top" onClick={scrollToTop}>
    ↑
  </button>
)}




      </div> 
      <a 
  href="https://wa.me/3229460423" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="whatsapp-float"
>
  <img src="./imagenes/whatsapp.png" />
  </a>
             
    </section>

   
     <section> {/* head 2 */}

      <div className="section2">


        <p> ¡Welcome to the ultimate pet paradise! Explore our extensive selection of products and professional services for your pets. Want to stay updated? Click the button below to join our community and learn more."!</p>
       
       
       
      
       <button type="button" 
        className="boton-registro" 
        
        onClick={scrollToFormReg}
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

   

   
      <div ref={seccionPerrosRef}>
        <h2>Dogs products</h2>
        <ProductCarousel productos={productosDog} />

        <div className="columna-derecha">
         <InfoTarjeta />
        </div>
      </div>
     


    </section>


   <section> {/* head 5 */}

   <section className="parallax-section">
          <div className="parallax-bg" style={{ backgroundImage: "url('/imagenes/backgato.jpg')" }}></div>
          <h2 className="section-title">CATS</h2>
        </section>



        <div ref={seccionCatsRef} className="seccion-cats-container">
          <h2>Cats products</h2>
             <ProductCarousel productos={productosCat} />
             </div>
        

         <div className='contenido2'>
          

          <InfoTarjeta2 />


         </div>


   </section>

   

   <section> {/* head 6 */}

   <section className="parallax-section">
          <div className="parallax-bg" style={{ backgroundImage: "url('/imagenes/aniamlesfull.jpg')" }}></div>
          <h2 className="section-title">Animals</h2>
        </section>




         <div ref={seccionAnimalsRef} className="seccion-Animal-container">
          <h2>Others animals products</h2>
           <ProductCarousel productos={productosAnimal} />
           </div>

          <div>
            <InfoTarjeta3 />
          </div>
   </section>





   
   <section> {/* head 7 */}
    
    <div id="formulario-registro" ref={seccionFormRegRef}>
    <FormularioRegistro />
   </div>

    
   </section>

   <section className='Mapa4'> {/* head 8 */}
   <div id="find-store" ref={seccionFindStoreRef}>
   
   <Mapa />

    </div>



   </section>






  </div>
  );
};

export default Tienda;