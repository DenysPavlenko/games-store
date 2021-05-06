import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './plate-left.sass';

const PlateLeft = ({ children, className }) => {
  const classes = classNames({
    'plate-left': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

PlateLeft.defaultProps = {
  className: ''
};

PlateLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PlateLeft;
