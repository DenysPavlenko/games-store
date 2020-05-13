import React from 'react';
import classNames from 'classnames';
// Styles
import './container.styles.sass'

const Container = ({ children, fluid, className, ...atrs }) => {
  const classes = classNames({
    'container': fluid ? false : true,
    'container-fluid': fluid,
    [className]: className
  })

  return (
    <div className={classes} {...atrs}>
      {children}
    </div>
  );
};

export default Container;
