import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.styles.sass';

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

Input.defaultProps = {
  invalid: false,
  isDark: false,
  className: '',
};

Input.propTypes = {
  invalid: PropTypes.bool,
  isDark: PropTypes.bool,
};

export default Input;
