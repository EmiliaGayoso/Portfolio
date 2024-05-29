import React from 'react';
import {style} from "./style.jsx";
import PropTypes from 'prop-types';


const Boton = ({ text, link }) => {
  return (
    <a style={style.a} href={link}> <button style={style.boton}>{text}</button></a>
    
  );
  
};
Boton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};


export default Boton;