import React from 'react';
import {style} from "./style.jsx";
import PropTypes from 'prop-types';


const Boton = ({ text }) => {
  return (
    <a style={style.a} href="#contacto"> <button style={style.boton}>{text}</button></a>
    
  );
  
};
Boton.propTypes = {
  text: PropTypes.string.isRequired
};


export default Boton;