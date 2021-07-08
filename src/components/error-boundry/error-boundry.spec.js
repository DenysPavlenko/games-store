/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ErrorBoudry from './error-boundry';

const defProps = {
  children: <span />,
};

const setup = (props = {}) => mount(<ErrorBoudry {...props} />);

describe('ErrorBoudry', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('renders <ErrorIndicator/> if has errors', () => {
    const wrapper = setup({ ...defProps });
    wrapper.instance().componentDidCatch();
    const errorIndicator = wrapper.find('ErrorIndicator');
    expect(errorIndicator).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(ErrorBoudry, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
