
import NavBar from "./components/NavBar/index.jsx";
import AcercaDeMi from "./views/AcercaDeMi/index.jsx";
import Conocimientos from "./views/Conocimientos/index.jsx";
import Contacto from "./views/Contacto/index.jsx";
import Educacion from "./views/Educacion/index.jsx";
import Experiencia from "./views/Experiencia/index.jsx";
/*import { style } from "./AppStyle.jsx";*/

function App() {
  
  return (
    
  <>
    <div>
          <p>Hola!</p>
          <h1>Soy Maria Emilia Gayoso Martinez</h1>
          <p>Estudiante de Informatica</p>
    </div>
    <div>
            <a href="#contacto">Contactame!→</a>
    </div>

    <NavBar/>
    <AcercaDeMi/>
    <Conocimientos/>
    <Contacto/>
    <Educacion/>
    <Experiencia/>
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