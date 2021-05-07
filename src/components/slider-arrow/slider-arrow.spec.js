import React from 'react';
import { shallow } from 'enzyme';
import SliderArrow from './slider-arrow';
import { checkProps } from 'test-utils/index';

const props = {
  className: 'test-class',
  reversed: false,
  arrowAlt: false,
  onClick: () => { }
};

const setup = (props = {}) => {
  return shallow(<SliderArrow {...props} />)
};

describe('SliderArrow', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SliderArrow, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
