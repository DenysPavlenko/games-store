/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderPreviewRight from './slider-preview-right';

const dummyProps = {
  children: <span />,
  slickSettings: {},
  sliderLeft: {},
  nextSlide: () => {},
  prevSlide: () => {},
  setRef: () => {},
};

const setup = (props = {}) => mount(<SliderPreviewRight {...props} />);

describe('SliderPreviewRight', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp setRef returns undefined on click', () => {
    const { setRef } = SliderPreviewRight.defaultProps;
    expect(setRef()).toBeUndefined();
  });
  test('defaultProp nextSlide returns undefined on click', () => {
    const { nextSlide } = SliderPreviewRight.defaultProps;
    expect(nextSlide()).toBeUndefined();
  });
  test('defaultProp prevSlide returns undefined on click', () => {
    const { prevSlide } = SliderPreviewRight.defaultProps;
    expect(prevSlide()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SliderPreviewRight, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
