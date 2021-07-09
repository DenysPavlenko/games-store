/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import BuyProduct from './buy-product';

const dummyProps = {
  price: 100,
  name: 'test name',
  inCart: false,
  className: 'test-class',
  onCartClick: () => {},
  onButtonClick: () => {},
};

const setup = (props = {}) => shallow(<BuyProduct {...props} />);

describe('BuyProduct', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.buy-product');
    expect(component.length).toBe(1);
  });
  test('renders <Chip/> if product is in the cart', () => {
    const wrapper = setup({ ...dummyProps, inCart: true });
    const component = wrapper.find('Chip');
    expect(component.length).toBe(1);
  });
  test('renders purchase details if product is not in the cart', () => {
    const wrapper = setup({ ...dummyProps, inCart: false });
    const component = wrapper.find('.buy-product-price');
    expect(component.length).toBe(1);
  });
  test('onCartClick and onButtonClick return undefined on click', () => {
    const { onCartClick } = BuyProduct.defaultProps;
    expect(onCartClick()).toBeUndefined();
    const { onButtonClick } = BuyProduct.defaultProps;
    expect(onButtonClick()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(BuyProduct, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
