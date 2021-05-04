import React from 'react';
import { shallow } from 'enzyme';
import CartEmpty from './cart-empty';
import { checkProps } from 'test-utils/index';

const props = {
  inverted: false,
  className: 'test-class',
};

const setup = (props = {}) => {
  return shallow(<CartEmpty {...props} />)
};

describe('CartEmpty', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.cart-empty');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(CartEmpty, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
