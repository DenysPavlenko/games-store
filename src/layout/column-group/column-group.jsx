import React, { Component } from 'react';
import classNames from 'classnames';
// Components
import ColumnGroupItem from './column-group-item/column-group-item';
// Styles
import './column-group.sass';

class ColumnGroup extends Component {
  static Item = ColumnGroupItem;
  render() {
    const { children, size, className } = this.props;

    const classes = classNames({
      'column-group': true,
      [`column-group--${size}`]: size,
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

export default ColumnGroup;