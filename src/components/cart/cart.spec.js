/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { Cart } from './cart';

const defProps = {
  cartHidden: false,
  cartItems: [
    {
      id: 3498,
      image: 'https://test.jpg',
      name: 'Grand TheftAuto V',
      price: 41,
      quantity: 1,
    },
  ],
  hideCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  history: {},
  totalCount: 2,
};

const setup = (props = {}) => shallow(<Cart {...props} />);

describe('Cart', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.cart');
    expect(component.length).toBe(1);
  });
  test('renders <CartEmpty/> if cart is empty', () => {
    const wrapper = setup({ ...defProps, cartItems: [] });
    const component = wrapper.find('CartEmpty');
    expect(component.length).toBe(1);
  });
  test('renders cart content if cart is not empty', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.cart-content');
    expect(component.length).toBe(1);
  });
  test('calls history.push and hideCart on "Go to checkout" button click', () => {
    const mockHistory = { push: jest.fn() };
    const mockHideCart = jest.fn();
    const wrapper = setup({
      ...defProps,
      history: mockHistory,
      hideCart: mockHideCart,
    });
    const component = wrapper.find('.cart-footer-right Button');
    component.simulate('click');
    expect(mockHideCart.mock.calls.length).toBe(1);
    expect(mockHistory.push.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Cart, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
