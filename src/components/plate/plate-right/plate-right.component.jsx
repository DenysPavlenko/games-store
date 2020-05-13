import React from 'react';
import classNames from 'classnames'
// Styles
import './plate-right.styles.sass'

const PlateRight = ({ children, className }) => {
  const classes = classNames({
    'plate-right': true,
    [className]: className
  })
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default PlateRight;