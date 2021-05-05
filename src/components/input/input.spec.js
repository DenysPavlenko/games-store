import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';
import { checkProps } from 'test-utils/index';

const props = {
  invalid: false,
  isDark: false,
  className: 'test-class',
  type: 'text',
  name: 'text',
  value: 'some text',
  onChange: () => { }
};

const setup = (props = {}) => {
  return shallow(<Input {...props} />)
};

describe('Input', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp onChange returns undefined on click', () => {
    const onChange = Input.defaultProps.onChange;
    expect(onChange()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Input, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
