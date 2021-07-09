/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Footer from './footer';

const dummyProps = {
  image: 'http://example.com',
  className: 'test-class',
};
const setup = (props = {}) => shallow(<Footer {...props} />);

describe('Footer', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('scrolls to the top of the screen on arrow click', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.footer-up');
    global.scrollTo = jest.fn();
    component.simulate('click');
    expect(global.scrollTo).toHaveBeenCalled();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Footer, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
