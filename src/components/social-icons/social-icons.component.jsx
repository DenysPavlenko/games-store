import React from 'react';
import classNames from 'classnames'
// Styles
import './social-icons.styles.sass'

const SocialIcons = ({ socials, className }) => {
  const classes = classNames({
    'social-icons': true,
    [className]: className
  });

  return (
    <div className={classes}>
      {socials.map(({ link, Icon }, idx) => (
        <a key={idx} href={link} className="social-icons-icon"><Icon /></a>
      ))}
    </div>
  );
};

export default SocialIcons;
