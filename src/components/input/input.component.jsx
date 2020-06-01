import React from 'react';
import classNames from 'classnames'
// Styles
import './input.styles.sass'

const Input = ({ className, invalid, ...otherProps }) => {
  const classes = classNames({
    input: true,
    'input-invalid': invalid,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} />
  );
};

export default Input;
