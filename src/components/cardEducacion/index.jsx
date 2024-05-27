import React from 'react';
import PropTypes from 'prop-types';
import {style} from "./style.jsx";

const Card = ({ name, photo, address, years }) => {
  return (
    <article style={style.article}>
      <img src={photo} alt="Education" style={style.photo} />
      <div style={style.div}>
        
        <p style={style.p}><b>{years}</b></p>
        <p style={style.p}>Escuela: {name}</p>
        <p style={style.p}>Dirección: {address}</p>
       
      </div>
    </article>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default Card;