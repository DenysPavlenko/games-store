import React from 'react';
import { shallow } from 'enzyme';
import PlateLeft from './plate-left';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  className: 'test-class'
}
const setup = (props = {}) => {
  return shallow(<PlateLeft {...props} />)
};

describe('PlateLeft', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(PlateLeft, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
