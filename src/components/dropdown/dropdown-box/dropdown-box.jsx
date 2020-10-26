import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './dropdown-box.sass';

const DropdownBox = ({ children, className }) => {
  const classnames = classNames({
    'dropdown-box': true,
    [className]: className,
  });

  return (
    <div className={classnames}>
      {children}
    </div>
  );
};

DropdownBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DropdownBox;