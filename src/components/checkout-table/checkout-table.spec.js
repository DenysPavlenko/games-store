import React from 'react';
import { shallow } from 'enzyme';
import CheckoutTable from './checkout-table';
import { checkProps } from 'test-utils/index';

const props = {
  total: 50
};

const setup = (props = {}) => {
  return shallow(<CheckoutTable {...props} />)
};

describe('CheckoutTable', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.checkout-table');
    expect(component.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(CheckoutTable, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
