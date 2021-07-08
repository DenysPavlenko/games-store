import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './spinner.sass';

const Spinner = ({ lg, accent, className }) => {
  const classes = classNames({
    spinner: true,
    'spinner-lg': lg,
    'spinner-accent': accent,
    [className]: className,
  });

  return <div className={classes} />;
};

Spinner.defaultProps = {
  lg: false,
  accent: false,
  className: '',
};

Spinner.propTypes = {
  className: PropTypes.string,
  lg: PropTypes.bool,
  accent: PropTypes.bool,
};

export default Spinner;
