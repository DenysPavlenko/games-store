import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import PlateLeft from './plate-left/plate-left';
import PlateRight from './plate-right/plate-right';
// Styles
import './plate.sass';

class Plate extends React.Component {
  static Left = PlateLeft;
  static Right = PlateRight;
  static defaultProps = {
    className: '',
    onClick: () => { }
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

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