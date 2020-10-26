import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownClose extends Component {
  closeRef = React.createRef();

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  handleCloseClick = () => {
    const close = this.closeRef.current;
    const dropdown = close.closest('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown__toggle');
    const dropdownBox = dropdown.querySelector('.dropdown__box');
    dropdownToggle.classList.remove('is-active');
    dropdownBox.classList.remove('is-expanded');
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={this.closeRef} onClick={this.handleCloseClick}>
        {children}
      </div>
    );
  }
}

export default DropdownClose;