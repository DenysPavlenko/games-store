import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './image.sass';

const Image = ({ src, alt, className }) => {
  const classes = classNames({
    'image': true,
    [className]: className
  });

  return (
    <img src={src} alt={alt} className={classes} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Image;
