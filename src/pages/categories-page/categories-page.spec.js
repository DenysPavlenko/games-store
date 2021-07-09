/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { CategoriesPage } from './categories-page';

const dummyProps = {
  data: {
    loading: false,
    collection: [
      {
        id: 18893,
        rout: 'feral-interactive',
        name: 'Feral Interactive',
        image: 'https://image.jpg',
        total: 1,
        games: [
          {
            id: 3439,
            slug: 'life-is-strange-episode-1-2',
            name: 'Life is Strange',
            added: 8357,
          },
        ],
      },
    ],
    error: false,
  },
  fetchCategoriesData: () => {},
  history: {},
  match: {
    params: {
      categoriesRout: 'developers',
    },
    url: '/',
  },
};

const setup = (props = {}) => shallow(<CategoriesPage {...props} />);

describe('CategoriesPage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });

  describe('data fetching', () => {
    let mockFetchCategoriesData;
    beforeEach(() => {
      jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
      mockFetchCategoriesData = jest.fn();
    });
    afterEach(() => {
      jest.clearAllMocks();
      mockFetchCategoriesData = null;
    });
    test('fetches developers data', () => {
      setup({
        ...dummyProps,
        fetchCategoriesData: mockFetchCategoriesData,
        match: {
          ...dummyProps.match,
          params: { categoriesRout: 'developers' },
        },
      });
      expect(mockFetchCategoriesData.mock.calls.length).toBe(1);
    });
    test('fetches genres data', () => {
      setup({
        ...dummyProps,
        fetchCategoriesData: mockFetchCategoriesData,
        match: { ...dummyProps.match, params: { categoriesRout: 'genres' } },
      });
      expect(mockFetchCategoriesData.mock.calls.length).toBe(1);
    });
    test('fetches genres data', () => {
      setup({
        ...dummyProps,
        fetchCategoriesData: mockFetchCategoriesData,
        match: { ...dummyProps.match, params: { categoriesRout: 'platforms' } },
      });
      expect(mockFetchCategoriesData.mock.calls.length).toBe(1);
    });
  });
  test('redirects to 404 page', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
    const wrapper = setup({
      ...dummyProps,
      match: { ...dummyProps.match, params: { categoriesRout: 'test' } },
    });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });
  test('redirects to the list of games on card click', () => {
    const mockHistoryPush = jest.fn();
    const wrapper = setup({
      ...dummyProps,
      history: { push: mockHistoryPush },
    });
    const card = wrapper.find('withRouter(Card)');
    card.simulate('click');
    expect(mockHistoryPush.mock.calls.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CategoriesPage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
