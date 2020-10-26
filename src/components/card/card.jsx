import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import './card.sass';

const Card = ({ image, onClick, children }) => {
  return (
    <div className="card" onClick={onClick}>
      <figure className="card-image" style={{ backgroundImage: `url(${image})` }}></figure>
      <div className="card-info">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  onClick: () => { },
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRouter(Card);