import React from 'react';
import classNames from 'classnames';
import './typography.styles.sass';
import PropTypes from 'prop-types';

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

Typography.propTypes = {
  component: 'p',
  className: '',
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Typography;
