import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import Figure from 'components/figure/figure';
// Styles
import './card.sass';

export const Card = ({ image, children, onClick }) => (
  <div className="card" onClick={onClick}>
    <Figure className="card-image" image={image} />
    <div className="card-info">{children}</div>
  </div>
);

Card.defaultProps = {
  onClick: () => {},
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default withRouter(Card);
