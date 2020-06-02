import React from 'react';
import classNames from 'classnames'
// Components
import Spinner from 'components/spinner/spinner.component';
// Styles
import './button.styles.sass'
// Assets
import { ReactComponent as Arrow } from 'assets/images/icons/arrow.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/icons/google.svg';

const Button = ({ children, href, btnBordered, btnLarge, btnArrow, btnBorderedLg, isDisabled, className, isLoading, isGoogleSignIn, ...otherProps }) => {
  const classes = classNames({
    'button': true,
    'button-bordered': btnBordered,
    'button-bordered-lg': btnBorderedLg,
    'button-lg': btnLarge,
    'button-arrow': btnArrow,
    'button-disabled': isDisabled,
    'button-loading': isLoading,
    'button-google-sign-in': isGoogleSignIn,
    [className]: className
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag href={href} className={classes} {...otherProps} disabled={!href && isDisabled}>
      {isLoading &&
        <>
          <Spinner className="button-spinner" />
          <span>Please wait...</span>
        </>
      }
      {!isLoading && !isGoogleSignIn && children}
      {!isLoading && !isGoogleSignIn && btnArrow ? <Arrow className="button-arrow-icon" /> : null}
      {isGoogleSignIn &&
        <>
          <div className="button-google-sign-in-icon-wrap">
            <GoogleIcon className="button-google-sign-in-icon" />
          </div>
          <span className="button-google-sign-in-text">{children}</span>
        </>
      }
    </Tag>
  );
};

export default Button;
