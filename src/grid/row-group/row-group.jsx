import React, { Component } from 'react';
import classNames from 'classnames';
// Components
import RowGroupItem from './row-group-item/row-group-item';
// Styles
import './row-group.sass';

class RowGroup extends Component {
  static Item = RowGroupItem;
  render() {
    const { children, size, justifyCenter, alignCenter, noWrap, className } = this.props;

    const classes = classNames({
      'row-group': true,
      'row-group--justify-center': justifyCenter,
      'row-group--align-center': alignCenter,
      'row-group--nowrap': noWrap,
      [`row-group--${size}`]: size,
      [className]: className
    });

    return (
      <div className={classes}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {})
        ))}
      </div>
    );
  }
}

export default RowGroup;