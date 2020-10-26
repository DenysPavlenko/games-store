import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './plate-right.sass';

const PlateRight = ({ children, className }) => {
  const classes = classNames({
    'plate-right': true,
    [className]: className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

PlateRight.defaultProps = {
  className: ''
};
PlateRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PlateRight;
