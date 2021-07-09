/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Container from './container';

const dummyProps = {
  children: <div />,
  fluid: false,
  className: '',
};

const setup = (props = {}) => shallow(<Container {...props} />);

describe('Container', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.container');
    expect(component.length).toBe(1);
  });
  test('renders fluid container', () => {
    const wrapper = setup({ ...dummyProps, fluid: true });
    const component = wrapper.find('.container-fluid');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Container, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
