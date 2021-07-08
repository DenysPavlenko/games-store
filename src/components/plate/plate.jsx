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

  render() {
    const { children, className, onMouseOver, onMouseLeave } = this.props;
    const classes = classNames({
      plate: true,
      [className]: className,
    });

    return (
      <div
        className={classes}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onFocus={() => {}}
      >
        {React.Children.map(children, (child) => React.cloneElement(child, {}))}
      </div>
    );
  }
}

Plate.defaultProps = {
  className: '',
  onMouseOver: () => {},
  onMouseLeave: () => {},
};

Plate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default Plate;
