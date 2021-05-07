import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Styles
import './typography.sass';

const Typography = ({ children, component, variant, className, ...otherProps }) => {
  const classes = classNames({
    [variant]: variant,
    [className]: className
  })

  const Tag = component;
  return (
    <Tag className={classes || null} {...otherProps}>{children}</Tag>
  );

};

Typography.defaultProps = {
  component: 'p',
  className: '',
  children: '',
};

Typography.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Typography;
