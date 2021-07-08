import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-toggle.sass';

const DropdownToggle = ({ children, className, toggleDropdown }) => {
  const classnames = classNames({
    'dropdown-toggle': true,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={toggleDropdown}>
      {children}
    </div>
  );
};

DropdownToggle.defaultProps = {
  toggleDropdown: () => {},
  className: '',
};

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDropdown: PropTypes.func,
  className: PropTypes.string,
};

export default DropdownToggle;
