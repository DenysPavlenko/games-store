import React from 'react';
import { shallow } from 'enzyme';
import DropdownBox from './dropdown-box';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  isOpened: false,
  toggleDropdown: () => { },
  className: 'test-class'
};

const setup = (props = {}) => {
  return shallow(<DropdownBox {...props} />)
};

describe('DropdownBox', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('renders children if opened', () => {
    const wrapper = setup({ ...props, isOpened: true });
    const component = wrapper.find('span');
    expect(component.length).toBe(1);
  });
  test('renders null if not opened', () => {
    const wrapper = setup({ ...props, isOpened: false });
    expect(wrapper.children().length).toBe(0);
  });
  test('defaultProp toggleDropdown returns undefined', () => {
    const toggleDropdown = DropdownBox.defaultProps.toggleDropdown;
    expect(toggleDropdown()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(DropdownBox, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
