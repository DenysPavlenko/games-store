/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { Directory } from './directory';

const defProps = {
  categories: {
    genres: {
      loading: true,
      collection: [],
      error: false,
      errorDetails: null,
    },
  },
  fetchCategoriesData: () => {},
};

const setup = (props = {}) =>
  mount(
    <Router>
      <Directory {...props} />
    </Router>
  );

describe('Directory', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('calls fetchCategoriesData', () => {
    const mockFn = jest.fn();
    setup({ ...defProps, fetchCategoriesData: mockFn });
    expect(mockFn.mock.calls.length).toBe(3);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Directory, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
