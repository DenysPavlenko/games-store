import React from 'react';
import classNames from 'classnames'
// Components
import Spinner from 'components/spinner/spinner.component';
// Styles
import './button.styles.sass'
// Assets
import { ReactComponent as Arrow } from 'assets/images/icons/arrow.svg';

const Button = ({ children, href, btnBordered, btnLarge, btnArrow, btnBorderedLg, isDisabled, className, isLoading, ...otherProps }) => {
  const classes = classNames({
    'button': true,
    'button-bordered': btnBordered,
    'button-bordered-lg': btnBorderedLg,
    'button-lg': btnLarge,
    'button-arrow': btnArrow,
    'button-disabled': isDisabled,
    'button-loading': isLoading,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} {...otherProps} disabled={!href && isDisabled}>
      {children}
      {btnArrow ? <Arrow className="button-arrow-icon" /> : null}
      {isLoading && <Spinner className="button-spinner" />}
    </Tag>
  );
};

export default Button;
