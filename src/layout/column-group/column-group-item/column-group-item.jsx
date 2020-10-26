import React from 'react';
import classNames from 'classnames';

const ColumnGroupItem = ({ children, flex1, className, ...otherProps }) => {
  const classes = classNames({
    'column-group__item': true,
    'column-group__item--flex-1': flex1,
    [className]: className
  });

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default ColumnGroupItem;