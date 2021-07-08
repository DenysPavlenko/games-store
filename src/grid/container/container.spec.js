import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';
import { checkProps } from 'test-utils/index';

const props = {
  children: <div></div>,
  fluid: false,
  className: '',
};

const setup = (props = {}) => {
  return shallow(<Container {...props} />)
};

describe('Container', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.container');
    expect(component.length).toBe(1);
  });
  test('renders fluid container', () => {
    const wrapper = setup({ ...props, fluid: true });
    const component = wrapper.find('.container-fluid');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Container, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
