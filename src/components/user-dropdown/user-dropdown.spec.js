import React from 'react';
import { shallow } from 'enzyme';
import UserDropdown from './user-dropdown';
import { checkProps } from 'test-utils/index';

const props = {
  userName: 'test-name',
  avatar: 'http://example.com',
};

const setup = (props = {}) => {
  return shallow(<UserDropdown {...props} />)
};

describe('UserDropdown', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(UserDropdown, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
