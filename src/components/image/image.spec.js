import React from 'react';
import { shallow } from 'enzyme';
import Image from './image';
import { checkProps } from 'test-utils/index';

const props = {
  src: 'http://example.com',
  alt: 'example-image',
  className: 'test-class'
};

const setup = (props = {}) => {
  return shallow(<Image {...props} />)
};

describe('Image', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Image, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
