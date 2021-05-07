import React from 'react';
import { shallow } from 'enzyme';
import Typography from './typography';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  component: 'p',
  variant: 'primary',
  className: 'test-class',
};

const setup = (props = {}) => {
  return shallow(<Typography {...props} />)
};

describe('Typography', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Typography, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
