/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import DropdownToggle from './dropdown-toggle';

const dummyProps = {
  children: <span />,
  toggleDropdown: () => {},
  className: 'test-class',
};

const setup = (props = {}) => shallow(<DropdownToggle {...props} />);

describe('DropdownToggle', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp toggleDropdown returns undefined', () => {
    const { toggleDropdown } = DropdownToggle.defaultProps;
    expect(toggleDropdown()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(DropdownToggle, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
