/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Image from './image';

const dummyProps = {
  src: 'http://example.com',
  alt: 'example-image',
  className: 'test-class',
};

const setup = (props = {}) => shallow(<Image {...props} />);

describe('Image', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Image, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
