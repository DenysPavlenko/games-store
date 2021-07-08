/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Avatar from './avatar';

const defaultProps = {
  image: 'http://example.com',
  classnames: 'test-class',
};

const setup = (props = {}) => shallow(<Avatar {...props} />);

describe('Avatar', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defaultProps });
    const component = wrapper.find('.avatar');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(Avatar, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
