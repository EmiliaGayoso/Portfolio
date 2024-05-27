import React from 'react';
import PropTypes from 'prop-types';
import {style} from "./style.jsx";

const Card = ({ photo, address, years }) => {
  return (
    <div className={style.card}>
      <img src={photo} alt="Education" className={style.photo} />
      <div className={style.details}>
        <p>Address: {address}</p>
        <p>Years: {years}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
};

export default Card;