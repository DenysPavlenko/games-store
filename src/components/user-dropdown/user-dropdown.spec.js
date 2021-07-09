/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import UserDropdown from './user-dropdown';

const dummyProps = {
  userName: 'test-name',
  avatar: 'http://example.com',
};

const setup = (props = {}) => shallow(<UserDropdown {...props} />);

describe('UserDropdown', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(UserDropdown, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
