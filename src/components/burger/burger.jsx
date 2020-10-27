import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './burger.sass';

const Burger = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  const classnames = classNames({
    'burger': true,
    [className]: className,
  });

  return (
    <div ref={ref} className={classnames} {...otherProps}>
      <span></span>
    </div>
  );
});

Burger.propTypes = {
  className: PropTypes.string
};

export default Burger;
