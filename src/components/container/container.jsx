import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './container.sass';

const Container = ({ children, fluid, className, ...atrs }) => {
  const classes = classNames({
    'container': fluid ? false : true,
    'container-fluid': fluid,
    [className]: className
  });

  return (
    <div className={classes} {...atrs}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
