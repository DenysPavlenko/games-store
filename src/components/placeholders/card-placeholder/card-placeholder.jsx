import React from 'react';
// Styles
import './card-placeholder.sass';

const CardPlaceholder = () => (
  <div className="card-placeholder">
    <div className="card-placeholder-wrap">
      <div className="card-placeholder-image" />
      <div className="card-placeholder-info">
        <div className="card-placeholder-info-name" />
        <div className="card-placeholder-info-total" />
      </div>
    </div>
  </div>
);

export default CardPlaceholder;
