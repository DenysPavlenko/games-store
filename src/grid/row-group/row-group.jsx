import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import RowGroupItem from './row-group-item/row-group-item';
// Styles
import './row-group.sass';

class RowGroup extends Component {
  static Item = RowGroupItem;

  render() {
    const { children, size, justifyCenter, alignCenter, noWrap, className } =
      this.props;

    const classes = classNames({
      'row-group': true,
      'row-group--justify-center': justifyCenter,
      'row-group--align-center': alignCenter,
      'row-group--nowrap': noWrap,
      [`row-group--${size}`]: size,
      [className]: className,
    });

    return (
      <div className={classes}>
        {React.Children.map(children, (child) => React.cloneElement(child, {}))}
      </div>
    );
  }
}

RowGroup.defaultProps = {
  size: '',
  justifyCenter: false,
  alignCenter: false,
  noWrap: false,
  className: '',
};

RowGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  justifyCenter: PropTypes.bool,
  alignCenter: PropTypes.bool,
  noWrap: PropTypes.bool,
  className: PropTypes.string,
};

export default RowGroup;
