import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import PlateLeft from './plate-left/plate-left';
import PlateRight from './plate-right/plate-right';
// Styles
import './plate.sass';

class Plate extends Component {
  static Left = PlateLeft;
  static Right = PlateRight;
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
  };

  render() {
    const { children, className, onMouseOver, onMouseOut } = this.props;
    const classes = classNames({
      'plate': true,
      [className]: className
    });

    return (
      <div className={classes} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {})
        ))}
      </div>
    )
  }
};

export default Plate;
