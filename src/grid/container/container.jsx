import React from 'react';
import classNames from 'classnames';
// Styles
import './container.sass'

const Container = ({ children, fluid, className, ...otherProps }) => {
  const classes = classNames({
    'container': fluid ? false : true,
    'container-fluid': fluid,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;
