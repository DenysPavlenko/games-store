import React from 'react';
import './card-info.styles.sass'

const CardInfo = ({ children }) => {
  return (
    <div className="card-info">
      {children}
    </div>
  );
};

export default CardInfo;