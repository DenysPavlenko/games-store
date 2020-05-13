import React from 'react';
import classNames from 'classnames'
// Styles
import './plate-left.styles.sass'

const PlateLeft = ({ children, className }) => {
  const classes = classNames({
    'plate-left': true,
    [className]: className
  })
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default PlateLeft;