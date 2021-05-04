import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { DirectoryCollection } from './directory-collection';
import { checkProps } from 'test-utils/index';

const props = {
  collection: [{
    id: 18893,
    rout: 'feral-interactive',
    name: 'Feral Interactive',
    image: 'https://test.jpg',
    total: 6,
    games: [
      {
        id: 3439,
        slug: 'life-is-strange-episode-1-2',
        name: 'Life is Strange',
        added: 8357
      }
    ]
  }],
  isLoading: false,
  hasError: false,
  title: 'Test title',
  rootName: 'test-root',
};

const setup = (props = {}) => {
  return mount(
    <Router>
      <DirectoryCollection {...props} />
    </Router>
  )
};

describe('DirectoryCollection', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('renders 5 placeholders on "xl" resolution', () => {
    const wrapper = setup({ ...props, currentBreakpoint: 'xl', isLoading: true });
    const placeholders = wrapper.find('.directory-collection CardPlaceholder');
    expect(placeholders.length).toBe(5);
  });
  test('renders 4 placeholders on "lg" resolution', () => {
    const wrapper = setup({ ...props, currentBreakpoint: 'lg', isLoading: true });
    const placeholders = wrapper.find('.directory-collection CardPlaceholder');
    expect(placeholders.length).toBe(4);
  });
  test('renders 3 placeholders on "md" resolution', () => {
    const wrapper = setup({ ...props, currentBreakpoint: 'md', isLoading: true });
    const placeholders = wrapper.find('.directory-collection CardPlaceholder');
    expect(placeholders.length).toBe(3);
  });
  test('renders 4 placeholders on "sm" resolution', () => {
    const wrapper = setup({ ...props, currentBreakpoint: 'sm', isLoading: true });
    const placeholders = wrapper.find('.directory-collection CardPlaceholder');
    expect(placeholders.length).toBe(4);
  });
  test('calls fetchCategoriesData', () => {
    const mockHistory = { push: jest.fn() };
    const wrapper = setup({ ...props, history: mockHistory });
    const button = wrapper.find('.directory-collection-heading Button');
    button.simulate('click');
    expect(mockHistory.push.mock.calls.length).toBe(1);
  });
  test('calls fetchCategoriesData', () => {
    const mockHistory = { push: jest.fn() };
    const wrapper = setup({ ...props, history: mockHistory });
    const card = wrapper.find('.directory-collection Card').childAt(0);
    card.simulate('click');
    expect(mockHistory.push.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(DirectoryCollection, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
