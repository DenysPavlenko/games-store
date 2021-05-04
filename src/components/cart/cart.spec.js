import React from 'react';
import { shallow } from 'enzyme';
import { Cart } from './cart';
import { checkProps } from 'test-utils/index';

const props = {
  cartHidden: false,
  cartItems: [{
    id: 3498,
    image: 'https://test.jpg',
    name: 'Grand TheftAuto V',
    price: 41,
    quantity: 1
  }],
  hideCart: () => { },
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  totalCount: 2
};

const setup = (props = {}) => {
  return shallow(<Cart {...props} />)
};

describe('Cart', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.cart');
    expect(component.length).toBe(1);
  });
  test('renders <CartEmpty/> if cart is empty', () => {
    const wrapper = setup({ ...props, cartItems: [] });
    const component = wrapper.find('CartEmpty');
    expect(component.length).toBe(1);
  });
  test('renders cart content if cart is not empty', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.cart-content');
    expect(component.length).toBe(1);
  });
  test('calls history.push and hideCart on "Go to checkout" button click', () => {
    const mockHistory = { push: jest.fn() };
    const mockHideCart = jest.fn();
    const wrapper = setup({ ...props, history: mockHistory, hideCart: mockHideCart });
    const component = wrapper.find('.cart-footer-right Button');
    component.simulate('click');
    expect(mockHideCart.mock.calls.length).toBe(1);
    expect(mockHistory.push.mock.calls.length).toBe(1);
  });
  test('defaultProps hideCart, onButtonClick, removeItemFromCart and clearItemFromCart return undefined', () => {
    const hideCart = Cart.defaultProps.hideCart;
    expect(hideCart()).toBeUndefined();
    const addItemToCart = Cart.defaultProps.addItemToCart;
    expect(addItemToCart()).toBeUndefined();
    const removeItemFromCart = Cart.defaultProps.removeItemFromCart;
    expect(removeItemFromCart()).toBeUndefined();
    const clearItemFromCart = Cart.defaultProps.clearItemFromCart;
    expect(clearItemFromCart()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Cart, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
