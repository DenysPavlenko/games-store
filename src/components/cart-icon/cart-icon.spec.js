/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { CartIcon } from './cart-icon';

const dummyProps = {
  itemCount: 0,
  showCart: () => {},
};

const setup = (props = {}) => shallow(<CartIcon {...props} />);

describe('CartIcon', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.cart-icon');
    expect(component.length).toBe(1);
  });
  test('renders counter if cart is not empty', () => {
    const wrapper = setup({ ...dummyProps, itemCount: 1 });
    const component = wrapper.find('.cart-icon-count');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CartIcon, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
