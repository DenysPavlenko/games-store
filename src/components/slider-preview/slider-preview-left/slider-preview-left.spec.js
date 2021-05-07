import React from 'react';
import { mount } from 'enzyme';
import SliderPreviewLeft from './slider-preview-left';
import { checkProps } from 'test-utils/index';

const props = {
  setRef: () => { }
};

const setup = (props = {}) => {
  return mount(<SliderPreviewLeft {...props} />)
};

describe('SliderPreviewLeft', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SliderPreviewLeft, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
