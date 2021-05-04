import React from 'react';
import { shallow } from 'enzyme';
import Chip from './chip';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  className: 'test-class',
};

const setup = (props = {}) => {
  return shallow(<Chip {...props} />)
};

describe('Chip', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.chip');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Chip, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
