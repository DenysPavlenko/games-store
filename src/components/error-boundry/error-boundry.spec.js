import React from 'react';
import { mount } from 'enzyme';
import ErrorBoudry from './error-boundry';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>
};

const setup = (props = {}) => {
  return mount(<ErrorBoudry {...props} />)
};

describe('ErrorBoudry', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('renders <ErrorIndicator/> if has errors', () => {
    const wrapper = setup({ ...props });
    wrapper.instance().componentDidCatch();
    const errorIndicator = wrapper.find('ErrorIndicator');
    expect(errorIndicator).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ErrorBoudry, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
