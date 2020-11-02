import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './figure.sass';

const Figure = ({ image, className, ...otherProps }) => {
  const classes = classNames({
    'figure': true,
    [className]: className
  });

  return (
    <figure className={classes} style={image && { backgroundImage: `url(${image})` }} {...otherProps}></figure>
  );
};

Image.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string
}

export default Figure;