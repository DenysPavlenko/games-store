/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Input from './input';

const defProps = {
  invalid: false,
  isDark: false,
  className: 'test-class',
  type: 'text',
  name: 'text',
  value: 'some text',
  onChange: () => {},
};

const setup = (props = {}) => shallow(<Input {...props} />);

describe('Input', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp onChange returns undefined on click', () => {
    const { onChange } = Input.defaultProps;
    expect(onChange()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Input, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
