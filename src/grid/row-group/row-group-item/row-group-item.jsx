/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RowGroupItem = ({ children, flex1, className, ...otherProps }) => {
  const classes = classNames({
    'row-group__item': true,
    'row-group__item--flex-1': flex1,
    [className]: className,
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

RowGroupItem.defaultProps = {
  flex1: false,
  className: '',
};

RowGroupItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flex1: PropTypes.bool,
};

export default RowGroupItem;
