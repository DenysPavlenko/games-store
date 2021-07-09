/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { CheckoutPage } from './checkout-page';

const dummyProps = {
  cartItems: [
    {
      id: 3498,
      image: 'https://image.jpg',
      name: 'Grand Theft Auto V',
      price: 41,
      quantity: 1,
    },
  ],
  hideCart: () => {},
  removeItemFromCart: () => {},
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  totalCount: 1,
};

const setup = (props = {}) => shallow(<CheckoutPage {...props} />);

describe('CategoryPage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('redirects to 404 page if there are no cart items', () => {
    const wrapper = setup({ ...dummyProps, cartItems: [] });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });

  test('defaultProp hideCart returns undefined on click', () => {
    const { hideCart } = CheckoutPage.defaultProps;
    expect(hideCart()).toBeUndefined();
  });
  test('defaultProp removeItemFromCart returns undefined on click', () => {
    const { removeItemFromCart } = CheckoutPage.defaultProps;
    expect(removeItemFromCart()).toBeUndefined();
  });
  test('defaultProp addItemToCart returns undefined on click', () => {
    const { addItemToCart } = CheckoutPage.defaultProps;
    expect(addItemToCart()).toBeUndefined();
  });
  test('defaultProp clearItemFromCart returns undefined on click', () => {
    const { clearItemFromCart } = CheckoutPage.defaultProps;
    expect(clearItemFromCart()).toBeUndefined();
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CheckoutPage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
