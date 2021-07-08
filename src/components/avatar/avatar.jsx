import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Figure from 'components/figure/figure';
// Styles
import './avatar.sass';

const Avatar = ({ image, className }) => {
  const classnames = classNames({
    avatar: true,
    [className]: className,
  });

  return (
    <div className={classnames}>
      <Figure className="avatar-image" image={image} />
    </div>
  );
};

Avatar.defaultProps = {
  className: '',
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Avatar;
