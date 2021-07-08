/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './figure.sass';

const Figure = ({ image, className, ...otherProps }) => {
  const classes = classNames({
    figure: true,
    [className]: className,
  });

  return (
    <figure
      className={classes}
      style={image && { backgroundImage: `url(${image})` }}
      {...otherProps}
    />
  );
};

Figure.defaultProps = {
  className: '',
};

Figure.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Figure;
