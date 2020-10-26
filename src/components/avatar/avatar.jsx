import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Styles
import './avatar.sass';

const Avatar = ({ image, className }) => {
  const classnames = classNames({
    'avatar': true,
    [className]: className,
  });

  return (
    <div className={classnames}>
      <figure className="avatar-image" style={image && { backgroundImage: `url(${image})` }}></figure>
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string
};

export default Avatar;