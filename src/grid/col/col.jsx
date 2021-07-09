/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
// Styles
import './col.sass';

const Col = (props) => {
  const colProps = { ...props };
  const DEVICE_SIZES = ['col', 'xs', 'sm', 'md', 'lg', 'xl'];

  const spans = [];
  const offsets = [];
  const orders = [];
  DEVICE_SIZES.forEach((brkPoint) => {
    const propValue = colProps[brkPoint];
    if (!propValue) {
      return;
    }
    delete colProps[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === 'object') {
      ({ span, offset, order } = propValue);
    } else if (propValue) {
      span = propValue;
    }
    const infix = brkPoint !== 'col' ? `-${brkPoint}` : '';
    if (span) {
      spans.push(span === true ? `col${infix}` : `col${infix}-${span}`);
    }
    if (offset) {
      offsets.push(`offset${infix}-${offset}`);
    }
    if (order) {
      orders.push(`order${infix}-${order}`);
    }
  });

  const { children, className, ...otherProps } = colProps;
  const classes = classNames(className, ...spans, ...offsets, ...orders);
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Col;
