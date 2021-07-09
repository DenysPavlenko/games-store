/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Figure from './figure';

const dummyProps = {
  image: 'http://example.com',
  className: 'test-class',
};

const setup = (props = {}) => shallow(<Figure {...props} />);

describe('Figure', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Figure, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
