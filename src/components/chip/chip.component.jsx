import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './chip.styles.sass';

const Chip = ({ children, className }) => {
  const classes = classNames({
    'chip': true,
    [className]: className
  });
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Chip;
