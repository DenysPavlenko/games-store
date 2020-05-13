import React from 'react';
import classNames from 'classnames'
// Components
import PlateLeft from './plate-left/plate-left.component';
import PlateRight from './plate-right/plate-right.component';
// Styles
import './plate.styles.sass';

class Plate extends React.Component {
  static Left = PlateLeft;
  static Right = PlateRight;

  render() {
    const { children, className, onClick } = this.props;
    const classes = classNames({
      'plate': true,
      [className]: className
    })

    return (
      <div className={classes} onClick={onClick}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {})
        ))}
      </div>
    )
  }
};

export default Plate;