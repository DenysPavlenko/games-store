import React from 'react';
import classNames from 'classnames';
// Styles
import './row.sass';

const Row = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    'row': true,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Row;
