import React from 'react';
import { shallow } from 'enzyme';
import { UserDropdownMenu } from './user-dropdown-menu';
import { checkProps } from 'test-utils/index';

const props = {
  userSignOut: () => { }
};

const setup = (props = {}) => {
  return shallow(<UserDropdownMenu {...props} />)
};

describe('UserDropdownMenu', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(UserDropdownMenu, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
