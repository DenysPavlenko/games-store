import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-box.sass';

const DropdownBox = ({ children, className, isOpened, toggleDropdown }) => {
  const classnames = classNames({
    'dropdown-box': true,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={toggleDropdown}>
      {isOpened ?
        children
        :
        null
      }
    </div>
  );
};

DropdownBox.defaultProps = {
  isOpened: false,
  toggleDropdown: () => { },
};

DropdownBox.propTypes = {
  children: PropTypes.node.isRequired,
  isOpened: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default DropdownBox;
