import React from 'react';
import classNames from 'classnames'
// Styles
import './button.styles.sass'
// Assets
import { ReactComponent as Arrow } from 'assets/images/icons/arrow.svg';

const Button = ({ children, href, btnBordered, btnLarge, btnArrow, btnBorderedLg, className, ...otherProps }) => {
  const classes = classNames({
    'button': true,
    'button-bordered': btnBordered,
    'button-bordered-lg': btnBorderedLg,
    'button-lg': btnLarge,
    'button-arrow': btnArrow,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} {...otherProps}>
      {children}
      {btnArrow ? <Arrow className="button-arrow-icon" /> : null}
    </Tag>
  );
};

export default Button;