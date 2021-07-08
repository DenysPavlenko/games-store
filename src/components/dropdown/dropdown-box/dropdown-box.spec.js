/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import DropdownBox from './dropdown-box';

const defProps = {
  children: <span />,
  isOpened: false,
  toggleDropdown: () => {},
  className: 'test-class',
};

const setup = (props = {}) => shallow(<DropdownBox {...props} />);

describe('DropdownBox', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('renders children if opened', () => {
    const wrapper = setup({ ...defProps, isOpened: true });
    const component = wrapper.find('span');
    expect(component.length).toBe(1);
  });
  test('renders null if not opened', () => {
    const wrapper = setup({ ...defProps, isOpened: false });
    expect(wrapper.children().length).toBe(0);
  });
  test('defaultProp toggleDropdown returns undefined', () => {
    const { toggleDropdown } = DropdownBox.defaultProps;
    expect(toggleDropdown()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(DropdownBox, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
