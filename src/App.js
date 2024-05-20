
import {style} from "./AppStyle.jsx"
import Boton from './components/Boton';
import Home from "./views/Home/index.jsx";


function App() {
  const nombre = "Pepe"
  const clickBoton1 = () => console.log("Hola")
  const clickBoton2 = () => console.log("Chau")


  return (
    <div className="App">
     <Boton onClick={clickBoton1} style={style.boton}/>
     <Boton onClick={clickBoton2}/>
     <Boton/>
     <Boton/>
     <Boton/>
     <Boton/>

      <p style={style.parrafo}>hola {nombre} esta es mi app</p>

      <Home/>
    </div>
  );
}

export default App;

