import React from 'react';
import './card-image.styles.sass'

const CardImage = ({image}) => {
  return (
    <figure className="card-image" style={{ backgroundImage: `url(${image})` }}></figure>
  );
};

export default CardImage;