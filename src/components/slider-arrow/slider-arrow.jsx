import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './slider-arrow.sass';
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

SliderArrow.defaultProps = {
  className: '',
  reversed: false,
  arrowAlt: false,
  onClick: () => { }
};

SliderArrow.propTypes = {
  className: PropTypes.string,
  reversed: PropTypes.bool,
  arrowAlt: PropTypes.bool,
  onClick: PropTypes.func
};

export default SliderArrow;
