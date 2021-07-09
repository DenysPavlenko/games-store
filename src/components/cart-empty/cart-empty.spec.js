/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import CartEmpty from './cart-empty';

const dummyProps = {
  inverted: false,
  className: 'test-class',
};

const setup = (props = {}) => shallow(<CartEmpty {...props} />);

describe('CartEmpty', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.cart-empty');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CartEmpty, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
