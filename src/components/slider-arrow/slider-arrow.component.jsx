import React from 'react';
import classNames from 'classnames'
// Styles
import './slider-arrow.styles.sass'
// Assets
import { ReactComponent as Arrow } from 'assets/images/icons/chevron.svg';

const SliderArrow = ({ className, reversed, arrowAlt, onClick }) => {
  const classes = classNames({
    'slider-arrow': true,
    'slider-arrow-reversed': reversed,
    'slider-arrow-alt': arrowAlt,
    [className]: className
  });

  return (
    <div className={classes} onClick={onClick}>
      <Arrow className="slider-arrow-icon" />
    </div>
  );
};

export default SliderArrow;
