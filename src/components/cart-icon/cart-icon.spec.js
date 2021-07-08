/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { CartIcon } from './cart-icon';

const defProps = {
  itemCount: 0,
  showCart: () => {},
};

const setup = (props = {}) => shallow(<CartIcon {...props} />);

describe('CartIcon', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.cart-icon');
    expect(component.length).toBe(1);
  });
  test('renders counter if cart is not empty', () => {
    const wrapper = setup({ ...defProps, itemCount: 1 });
    const component = wrapper.find('.cart-icon-count');
    expect(component.length).toBe(1);
  });
  test('defaultProp showCart return undefined', () => {
    const { showCart } = CartIcon.defaultProps;
    expect(showCart()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(CartIcon, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
