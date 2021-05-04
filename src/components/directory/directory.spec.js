import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Directory } from './directory';
import { checkProps } from 'test-utils/index';

const props = {
  categories: {
    genres: {
      loading: true,
      collection: [],
      error: false,
      errorDetails: null
    },
  },
  fetchCategoriesData: () => { }
};

const setup = (props = {}) => {
  return mount(
    <Router>
      <Directory {...props} />
    </Router>
  )
};

describe('Directory', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('calls fetchCategoriesData', () => {
    const mockFn = jest.fn();
    setup({ ...props, fetchCategoriesData: mockFn });
    expect(mockFn.mock.calls.length).toBe(3);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Directory, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
