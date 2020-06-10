import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './card-info.styles.sass';

const CardInfo = ({ children }) => {
  return (
    <div className="card-info">
      {children}
    </div>
  );
};

CardInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardInfo;
