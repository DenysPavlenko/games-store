import React from 'react';
import { shallow } from 'enzyme';
import Figure from './figure';
import { checkProps } from 'test-utils/index';

const props = {
  image: 'http://example.com',
  className: 'test-class'
}
const setup = (props = {}) => {
  return shallow(<Figure {...props} />)
};

describe('Figure', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Figure, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
