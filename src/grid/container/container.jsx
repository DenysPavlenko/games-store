/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './container.sass';

const Container = ({ children, fluid, className, ...otherProps }) => {
  const classes = classNames({
    container: !fluid,
    'container-fluid': fluid,
    [className]: className,
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  fluid: false,
  className: '',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
