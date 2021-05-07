import React from 'react';
import { mount } from 'enzyme';
import SliderPreviewRight from './slider-preview-right';
import { checkProps } from 'test-utils/index';

const props = {
  setRef: () => { }
};

const setup = (props = {}) => {
  return mount(<SliderPreviewRight {...props} />)
};

describe('SliderPreviewRight', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SliderPreviewRight, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
