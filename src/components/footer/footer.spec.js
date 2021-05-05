import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';
import { checkProps } from 'test-utils/index';

const props = {
  image: 'http://example.com',
  className: 'test-class'
}
const setup = (props = {}) => {
  return shallow(<Footer {...props} />)
};

describe('Footer', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('scrolls to the top of the screen on arrow click', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.footer-up');
    global.scrollTo = jest.fn()
    component.simulate('click');
    expect(global.scrollTo).toHaveBeenCalled();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Footer, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
