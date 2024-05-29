import React from 'react';
import NavBar from "./components/NavBar/index.jsx";
import Boton from "./components/Boton/index.jsx"
import AcercaDeMi from "./views/AcercaDeMi/index.jsx";
import Conocimientos from "./views/Conocimientos/index.jsx";
import Contacto from "./views/Contacto/index.jsx";
import Educacion from "./views/Educacion/index.jsx";
import Experiencia from "./views/Experiencia/index.jsx";
import {style} from "./AppStyle.jsx";
import imagen from "./imgs/inicio.png";
import RedesSociales from "./components/RedesSociales/index.jsx"
import './App.css';
function App() {
  return (
    
  <>
  
  <link rel="stylesheet" src="./App.css"></link>
  <NavBar/>
  <div class="container">
    <div class="content">
      <section id='i' style={{margin:"1%", padding:"0", width:"70%"}}>
        
        <article style={style.flex}>
          <div style={style.div}>
            <img style={style.img} src={imagen} alt='img'/>
          </div>

          <div style={style.div}>
                <p style={style.p}>Hola!</p>
                <h1 style={style.h1}>Soy Maria Emilia Gayoso Martinez</h1>
                <p style={style.p}>Estudiante de Informatica</p><br></br>
                <RedesSociales/>
                <Boton text='Contactame!' link="#contacto"/>
          </div>
        </article>
    </section>

    </div>

    <div class="waves">
        <div class="wave circulo a"></div>
        <div class="wave circulo b"></div>
        <div class="wave circulo c"></div>
      </div>
  </div>
  
    <AcercaDeMi/>
    <Conocimientos/>
    <Experiencia/>
    <Educacion/>
    <Contacto/>
    
    
  </>
  );
}

export default App;

/*const nombre = "Pepe"
  const clickBoton1 = () => console.log("Hola")
  const clickBoton2 = () => console.log("Chau")*/

  /*class="Presente" */

/*<div className="App">
     <Boton onClick={clickBoton1} style={style.boton}/>
     <Boton onClick={clickBoton2}/>
     <Boton/>
     <Boton/>
     <Boton/>
     <Boton/>

      <p style={style.parrafo}>hola {nombre} esta es mi app</p>

      
    </div>*/