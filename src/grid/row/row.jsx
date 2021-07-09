/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './row.sass';

const Row = ({ children, className, ...otherProps }) => {
  const classes = classNames({
    row: true,
    [className]: className,
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Row;
