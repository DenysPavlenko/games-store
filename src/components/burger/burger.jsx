import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './burger.sass';

const Burger = ({ className, onClick }) => {
  const classnames = classNames({
    burger: true,
    [className]: className,
  });

  return (
    <button type="button" className={classnames} onClick={onClick}>
      <span />
    </button>
  );
};

Burger.defaultProps = {
  className: '',
};

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Burger;
