import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './spinner.sass';

const Spinner = ({ className }) => {
  const classes = classNames({
    'spinner': true,
    [className]: className
  });

  return (
    <div className={classes}></div>
  );
};

Spinner.defaultProps = {
  className: '',
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
