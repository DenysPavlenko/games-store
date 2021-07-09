/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Col from './col';

const dummyProps = {
  lg: 12,
  sm: 6,
};

const setup = (props = {}) => shallow(<Col {...props} />);

describe('Column', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.col-sm-6.col-lg-12');
    expect(component.length).toBe(1);
  });
  test('accepts prop as an object', () => {
    const wrapper = setup({ md: { order: 1 } });
    const component = wrapper.find('.order-md-1');
    expect(component.length).toBe(1);
  });
  test('doesn`t add infix on `col` prop', () => {
    const wrapper = setup({ col: true });
    const component = wrapper.find('.col');
    expect(component.length).toBe(1);
  });
  test('accepts offset as a parameter', () => {
    const wrapper = setup({ md: { offset: 1 } });
    const component = wrapper.find('.offset-md-1');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Col, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
