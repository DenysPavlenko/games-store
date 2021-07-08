import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Spinner from 'components/spinner/spinner';
// Styles
import './button.sass';
// Assets
import { ReactComponent as Arrow } from 'assets/images/icons/arrow.svg';
import { ReactComponent as GoogleIcon } from 'assets/images/icons/google.svg';

const Button = ({
  children,
  href,
  btnBordered,
  btnLarge,
  btnArrow,
  btnBorderedLg,
  isDisabled,
  className,
  isLoading,
  isGoogleSignIn,
  onClick,
  type,
}) => {
  const classes = classNames({
    button: true,
    'button-bordered': btnBordered,
    'button-bordered-lg': btnBorderedLg,
    'button-lg': btnLarge,
    'button-arrow': btnArrow,
    'button-disabled': isDisabled,
    'button-loading': isLoading,
    'button-google-sign-in': isGoogleSignIn,
    [className]: className,
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      className={classes}
      disabled={!href && (isDisabled || isLoading)}
      onClick={onClick}
      type={type}
    >
      {isLoading && (
        <>
          <Spinner className="button-spinner" />
          <span>Please wait...</span>
        </>
      )}
      {!isLoading && !isGoogleSignIn && children}
      {!isLoading && !isGoogleSignIn && btnArrow ? (
        <Arrow className="button-arrow-icon" />
      ) : null}
      {isGoogleSignIn && (
        <>
          <div className="button-google-sign-in-icon-wrap">
            <GoogleIcon className="button-google-sign-in-icon" />
          </div>
          <span className="button-google-sign-in-text">{children}</span>
        </>
      )}
    </Tag>
  );
};

Button.defaultProps = {
  btnLarge: false,
  btnBordered: false,
  btnArrow: false,
  btnBorderedLg: false,
  isDisabled: false,
  isLoading: false,
  isGoogleSignIn: false,
  className: '',
  href: '',
  onClick: () => {},
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnLarge: PropTypes.bool,
  btnBordered: PropTypes.bool,
  btnArrow: PropTypes.bool,
  btnBorderedLg: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isGoogleSignIn: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
