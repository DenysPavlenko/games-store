import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './avatar';
import { checkProps } from 'test-utils/index';

const props = {
  image: 'http://example.com',
  classnames: 'test-class'
};

const setup = (props = {}) => {
  return shallow(<Avatar {...props} />)
};

describe('Avatar', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.avatar');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Avatar, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
