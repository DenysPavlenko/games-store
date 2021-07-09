import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './social-icons.sass';

const SocialIcons = ({ socials, className }) => {
  const classes = classNames({
    'social-icons': true,
    [className]: className,
  });

  return (
    <div className={classes}>
      {socials.map(({ link, Icon }, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={idx} href={link} className="social-icons-icon">
          <Icon />
        </a>
      ))}
    </div>
  );
};

SocialIcons.defaultProps = {
  className: '',
};

SocialIcons.propTypes = {
  socials: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default SocialIcons;
