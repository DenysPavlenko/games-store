/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import CartItem from './cart-item';

const dummyProps = {
  cartItem: {
    id: 3498,
    image: 'https://test.jpg',
    name: 'Grand Theft Auto V',
    price: 41,
    quantity: 1,
  },
  hideCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  className: 'test-class',
  inverted: false,
  control: false,
};

const setup = (props = {}) => shallow(<CartItem {...props} />);

describe('CartItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.cart-item');
    expect(component.length).toBe(1);
  });
  test('renders cart item control if "control" prop is true', () => {
    const wrapper = setup({ ...dummyProps, control: true });
    const component = wrapper.find('.cart-item-control');
    expect(component.length).toBe(1);
  });
  test('first control button calls removeItem on click', () => {
    const mockFn = jest.fn();
    const wrapper = setup({ ...dummyProps, control: true, removeItem: mockFn });
    const component = wrapper.find('.cart-item-control').childAt(0);
    component.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('second control button calls addItem on click', () => {
    const mockFn = jest.fn();
    const wrapper = setup({ ...dummyProps, control: true, addItem: mockFn });
    const component = wrapper.find('.cart-item-control').childAt(1);
    component.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('third control button calss clearItem on click', () => {
    const mockFn = jest.fn();
    const wrapper = setup({ ...dummyProps, control: true, clearItem: mockFn });
    const component = wrapper.find('.cart-item-control').childAt(2);
    component.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('total prints "Copy" if quantity === 1', () => {
    const wrapper = setup({
      ...dummyProps,
      cartItem: { ...dummyProps.cartItem, quantity: 1 },
    });
    const component = wrapper.find('.cart-item-total-title').dive();
    expect(component.text()).toBe('1 Copy');
  });
  test('total prints "Copies" if quantity > 1', () => {
    const wrapper = setup({
      ...dummyProps,
      cartItem: { ...dummyProps.cartItem, quantity: 2 },
    });
    const component = wrapper.find('.cart-item-total-title').dive();
    expect(component.text()).toBe('2 Copies');
  });
  test('defaultProp hideCart, addItem, removeItem, clearItem return undefined', () => {
    const { hideCart } = CartItem.defaultProps;
    expect(hideCart()).toBeUndefined();
    const { addItem } = CartItem.defaultProps;
    expect(addItem()).toBeUndefined();
    const { removeItem } = CartItem.defaultProps;
    expect(removeItem()).toBeUndefined();
    const { clearItem } = CartItem.defaultProps;
    expect(clearItem()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CartItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
