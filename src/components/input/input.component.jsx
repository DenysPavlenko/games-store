import React from 'react';
import classNames from 'classnames'
// Styles
import './input.styles.sass'

const Input = ({ className, invalid, isDark, ...otherProps }) => {
  const classes = classNames({
    input: true,
    'input-invalid': invalid,
    'input-dark': isDark,
    [className]: className
  });

  return (
    <input className={classes} {...otherProps} />
  );
};

export default Input;
