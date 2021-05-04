import React from 'react';
import { shallow } from 'enzyme';
import BuyProduct from './buy-product';
import { checkProps } from 'test-utils/index';

const props = {
  price: 100,
  name: 'test name',
  inCart: false,
  className: 'test-class',
  onCartClick: () => { },
  onButtonClick: () => { },
};

const setup = (props = {}) => {
  return shallow(<BuyProduct {...props} />)
};

describe('BuyProduct', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.buy-product');
    expect(component.length).toBe(1);
  });
  test('renders <Chip/> if product is in the cart', () => {
    const wrapper = setup({ ...props, inCart: true });
    const component = wrapper.find('Chip');
    expect(component.length).toBe(1);
  });
  test('renders purchase details if product is not in the cart', () => {
    const wrapper = setup({ ...props, inCart: false });
    const component = wrapper.find('.buy-product-price');
    expect(component.length).toBe(1);
  });
  test('onCartClick and onButtonClick return undefined on click', () => {
    const onCartClick = BuyProduct.defaultProps.onCartClick;
    expect(onCartClick()).toBeUndefined();
    const onButtonClick = BuyProduct.defaultProps.onButtonClick;
    expect(onButtonClick()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(BuyProduct, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
