import React from 'react';
import { mount } from 'enzyme';
import { ScrollToTop } from './scroll-to-top';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  location: { pathname: '/test' }
};

const setup = (props = {}) => {
  return mount(<ScrollToTop {...props} />)
};

describe('ScrollToTop', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('scrolls to top on page change', () => {
    const mockScrollTo = jest.fn();
    window.scrollTo = mockScrollTo;
    const wrapper = setup({ ...props });
    wrapper.instance().componentDidUpdate({ location: { pathname: '/test2' }});
    expect(mockScrollTo.mock.calls.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ScrollToTop, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
