import React from 'react';
import { shallow } from 'enzyme';
import PlateRight from './plate-right';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  className: 'test-class'
}
const setup = (props = {}) => {
  return shallow(<PlateRight {...props} />)
};

describe('PlateRight', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(PlateRight, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
