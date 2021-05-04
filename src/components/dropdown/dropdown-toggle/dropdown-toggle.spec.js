import React from 'react';
import { shallow } from 'enzyme';
import DropdownToggle from './dropdown-toggle';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  toggleDropdown: () => { },
  className: 'test-class'
};

const setup = (props = {}) => {
  return shallow(<DropdownToggle {...props} />)
};

describe('DropdownToggle', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp toggleDropdown returns undefined', () => {
    const toggleDropdown = DropdownToggle.defaultProps.toggleDropdown;
    expect(toggleDropdown()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(DropdownToggle, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
