/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SliderPreviewRight from './slider-preview-right';

const defProps = {
  setRef: () => {},
};

const setup = (props = {}) => mount(<SliderPreviewRight {...props} />);

describe('SliderPreviewRight', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(SliderPreviewRight, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
