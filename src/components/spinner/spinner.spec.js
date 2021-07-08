/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Spinner from './spinner';

const defProps = {
  className: 'test-class',
  lg: false,
  accent: false,
};

const setup = (props = {}) => shallow(<Spinner {...props} />);

describe('Spinner', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Spinner, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
