import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon';
import { checkProps } from 'test-utils/index';

const props = {
  itemCount: 0,
  showCart: () => { }
};

const setup = (props = {}) => {
  return shallow(<CartIcon {...props} />)
};

describe('CartIcon', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.cart-icon');
    expect(component.length).toBe(1);
  });
  test('renders counter if cart is not empty', () => {
    const wrapper = setup({ ...props, itemCount: 1 });
    const component = wrapper.find('.cart-icon-count');
    expect(component.length).toBe(1);
  });
  test('defaultProp showCart return undefined', () => {
    const showCart = CartIcon.defaultProps.showCart;
    expect(showCart()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(CartIcon, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
