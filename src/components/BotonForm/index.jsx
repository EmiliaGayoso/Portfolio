import React from 'react';
import {style} from "./style.jsx";
import PropTypes from 'prop-types';


const BotonForm = ({ text }) => {
  return (
    <a style={style.a} href="#contacto"> <button style={style.boton}><b>{text}</b></button></a>
  );
  
};
BotonForm.propTypes = {
  text: PropTypes.string.isRequired
};


export default BotonForm;