import React from 'react';
// Styles
import './card-placeholder.styles.sass'

const CardPlaceholder = ({ image, name, slug, total }) => {
  return (
    <div className="card-placeholder">
      <div className="card-placeholder-image"></div>
      <div className="card-placeholder-info">
        <div className="card-placeholder-info-name"></div>
        <div className="card-placeholder-info-total"></div>
      </div>
    </div>
  )
}

export default CardPlaceholder;