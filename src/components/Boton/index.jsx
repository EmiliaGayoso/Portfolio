import React from 'react';
import {style} from "./style.jsx";
import PropTypes from 'prop-types';


const Boton = ({ text }) => {
  return (
    <div>
     <a href="#contacto"> <button style={style.boton}>{text}</button></a>
    </div>
  );
  
};
Boton.propTypes = {
  text: PropTypes.string.isRequired
};


export default Boton;