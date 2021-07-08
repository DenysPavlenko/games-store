/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderPreviewLeft from './slider-preview-left';

const defProps = {
  setRef: () => {},
  children: <span />,
  slickSettings: {},
  sliderRight: {},
};

const setup = (props = {}) => mount(<SliderPreviewLeft {...props} />);

describe('SliderPreviewLeft', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(SliderPreviewLeft, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
