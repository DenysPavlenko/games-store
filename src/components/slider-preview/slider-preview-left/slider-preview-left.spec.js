/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderPreviewLeft from './slider-preview-left';

const dummyProps = {
  setRef: () => {},
  children: <span />,
  slickSettings: {},
  sliderRight: {},
};

const setup = (props = {}) => mount(<SliderPreviewLeft {...props} />);

describe('SliderPreviewLeft', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp setRef returns undefined on click', () => {
    const { setRef } = SliderPreviewLeft.defaultProps;
    expect(setRef()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SliderPreviewLeft, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
