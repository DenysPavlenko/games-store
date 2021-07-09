/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Typography from './typography';

const dummyProps = {
  children: <span />,
  component: 'p',
  variant: 'primary',
  className: 'test-class',
};

const setup = (props = {}) => shallow(<Typography {...props} />);

describe('Typography', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Typography, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
