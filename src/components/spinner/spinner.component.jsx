import React from 'react';
import classNames from 'classnames'
// Styles
import './spinner.styles.sass';

const Spinner = ({ className }) => {
  const classes = classNames({
    'spinner': true,
    [className]: className
  });

  return (
    <div className={classes}></div>
  );
};

export default Spinner;