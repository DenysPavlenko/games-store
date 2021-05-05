import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './input.sass';

const Input = ({ className, invalid, isDark, type, name, value, onChange }) => {
  const classes = classNames({
    input: true,
    'input-invalid': invalid,
    'input-dark': isDark,
    [className]: className
  });

  return (
    <input className={classes} type={type} name={name} value={value} onChange={onChange} />
  );
};

Input.defaultProps = {
  type: 'test',
  invalid: false,
  isDark: false,
  className: '',
  onChange: () => { }
};

Input.propTypes = {
  invalid: PropTypes.bool,
  isDark: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
