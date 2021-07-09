/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderArrow from './slider-arrow';

const dummyProps = {
  className: 'test-class',
  reversed: false,
  arrowAlt: false,
  onClick: () => {},
};

const setup = (props = {}) => shallow(<SliderArrow {...props} />);

describe('SliderArrow', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SliderArrow, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
