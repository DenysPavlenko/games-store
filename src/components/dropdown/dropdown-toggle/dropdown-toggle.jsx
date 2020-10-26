import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-toggle.sass';

class DropdownToggle extends Component {
  toggleRef = React.createRef();

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    const toggle = this.toggleRef.current;
    const dropdown = toggle.closest('.dropdown');
    const dropdownBox = dropdown.querySelector('.dropdown-box');
    if (!dropdown.contains(e.target)) {
      toggle.classList.remove('is-active');
      dropdownBox.classList.remove('is-expanded');
    }
  }

  handleToggleClick = () => {
    const { disabled } = this.props;
    if (disabled) { return; }
    const toggle = this.toggleRef.current;
    const dropdown = toggle.closest('.dropdown');
    const dropdownBox = dropdown.querySelector('.dropdown-box');
    toggle.classList.toggle('is-active');
    dropdownBox.classList.toggle('is-expanded');
  }

  render() {
    const { children, className } = this.props;
    const classnames = classNames({
      'dropdown-toggle': true,
      [className]: className,
    });

    return (
      <div ref={this.toggleRef} className={classnames} onClick={this.handleToggleClick}>
        {children}
      </div>
    );
  }
}

export default DropdownToggle;