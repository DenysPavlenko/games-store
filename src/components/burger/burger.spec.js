/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Burger from './burger';

const dummyProps = {
  className: 'test-class',
  onClick: () => {},
};

const setup = (props = {}) => shallow(<Burger {...props} />);

describe('burger', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.burger');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Burger, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
