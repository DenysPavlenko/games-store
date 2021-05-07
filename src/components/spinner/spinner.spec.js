import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './spinner';
import { checkProps } from 'test-utils/index';

const props = {
  className: 'test-class',
  lg: false,
  accent: false
};

const setup = (props = {}) => {
  return shallow(<Spinner {...props} />)
};

describe('Spinner', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Spinner, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
