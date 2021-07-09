/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ColumnGroupItem = ({ children, flex1, className, ...otherProps }) => {
  const classes = classNames({
    'column-group__item': true,
    'column-group__item--flex-1': flex1,
    [className]: className,
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

ColumnGroupItem.defaultProps = {
  flex1: false,
  className: '',
};

ColumnGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flex1: PropTypes.bool,
};

export default ColumnGroupItem;
