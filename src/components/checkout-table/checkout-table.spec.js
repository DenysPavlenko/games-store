/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import CheckoutTable from './checkout-table';

const dummyProps = {
  total: 50,
};

const setup = (props = {}) => shallow(<CheckoutTable {...props} />);

describe('CheckoutTable', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.checkout-table');
    expect(component.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CheckoutTable, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
