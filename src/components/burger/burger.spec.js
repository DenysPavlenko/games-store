import React from 'react';
import { shallow } from 'enzyme';
import Burger from './burger';
import { checkProps } from 'test-utils/index';

const props = {
  className: 'test-class',
  onClick: () => { }
};

const setup = (props = {}) => {
  return shallow(<Burger {...props} />)
};

describe('burger', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.burger');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Burger, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
