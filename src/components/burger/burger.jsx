import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './burger.sass';

const Burger = ({ className, onClick }) => {
  const classnames = classNames({
    'burger': true,
    [className]: className,
  });

  return (
    <div className={classnames} onClick={onClick}>
      <span></span>
    </div>
  );
};

Burger.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Burger;
