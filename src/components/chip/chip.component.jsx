import React from 'react';
import classNames from 'classnames';
// Styles
import './chip.styles.sass';

const Chip = ({ children, className }) => {
  const classes = classNames({
    'chip': true,
    [className]: className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Chip;