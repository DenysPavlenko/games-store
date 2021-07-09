/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { ScrollToTop } from './scroll-to-top';

const dummyProps = {
  children: <span />,
  location: { pathname: '/test' },
};

const setup = (props = {}) => mount(<ScrollToTop {...props} />);

describe('ScrollToTop', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('scrolls to top on page change', () => {
    const mockScrollTo = jest.fn();
    window.scrollTo = mockScrollTo;
    const wrapper = setup({ ...dummyProps });
    wrapper.instance().componentDidUpdate({ location: { pathname: '/test2' } });
    expect(mockScrollTo.mock.calls.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(ScrollToTop, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
