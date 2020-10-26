import React from 'react';
import classNames from 'classnames';

const RowGroupItem = ({ children, flex1, className, ...otherProps }) => {
  const classes = classNames({
    'row-group__item': true,
    'row-group__item--flex-1': flex1,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default RowGroupItem;