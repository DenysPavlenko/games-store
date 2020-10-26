import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './card-image.sass';

const CardImage = ({ image }) => {
  return (
    <figure className="card-image" style={{ backgroundImage: `url(${image})` }}></figure>
  );
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardImage;
