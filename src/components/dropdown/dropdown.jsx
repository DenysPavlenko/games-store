import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import DropdownToggle from './dropdown-toggle/dropdown-toggle';
import DropdownBox from './dropdown-box/dropdown-box';
import DropdownClose from './dropdown-close/dropdown-close';
// Styles
import './dropdown.sass';

class Dropdown extends Component {
  static Toggle = DropdownToggle;
  static Box = DropdownBox;
  static Close = DropdownClose;
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { children, className, disabled } = this.props;
    const classnames = classNames({
      'dropdown': true,
      [className]: className,
    });

    return (
      <div className={classnames}>
        {React.Children.map(children, child => (
          React.cloneElement(child, { disabled })
        ))}
      </div>
    );
  }
}

export default Dropdown;