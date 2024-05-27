import React from 'react';
import {style} from "./style.jsx"


const Boton = ({onClick}) => {
//   const clickear = () => console.log("click")
  return (
    <div>
     <a href="#contacto"> <button /*onClick={onClick}*/ style={style.boton}>Contatame!</button></a>
    </div>
  );
}

export default Boton;