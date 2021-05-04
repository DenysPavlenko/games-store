import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import DropdownToggle from './dropdown-toggle/dropdown-toggle';
import DropdownBox from './dropdown-box/dropdown-box';
// Styles
import './dropdown.sass';

class Dropdown extends Component {
  dropdownRef = React.createRef();

  static Toggle = DropdownToggle;
  static Box = DropdownBox;
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  state = {
    isOpened: false
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = e => {
    const dropdown = this.dropdownRef;
    if (dropdown && !dropdown.contains(e.target)) {
      this.setState({ isOpened: false });
    }
  }

  toggleDropdown = () => this.setState(({ isOpened }) => ({ isOpened: !isOpened }));

  render() {
    const { children, className } = this.props;
    const classnames = classNames({
      'dropdown': true,
      [className]: className,
    });

    return (
      <div className={classnames} ref={ref => this.dropdownRef = ref}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {
            toggleDropdown: this.toggleDropdown,
            isOpened: this.state.isOpened
          })
        ))}
      </div>
    );
  }
}

export default Dropdown;
