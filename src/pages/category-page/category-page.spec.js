/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { CategoryPage } from './category-page';

const dummyProps = {
  category: {
    loading: false,
    collection: [
      {
        id: 3498,
        image: 'https://image.jpg',
        name: 'Grand Theft Auto V',
        price: 41,
        rating: 4.48,
      },
    ],
    error: false,
    errorDetails: null,
  },
  categoryDetails: {
    loading: false,
    data: {
      id: 4,
      name: 'Action',
      rout: 'action',
      image: 'https://image.jpg',
      description: 'test description',
    },
    error: false,
    errorDetails: null,
  },
  fetchCategoryData: () => {},
  fetchCategoryDetailsData: () => {},
  history: {},
  match: {
    params: {
      categoriesRout: 'developers',
      categoryRout: 'test',
    },
  },
};

const setup = (props = {}) => shallow(<CategoryPage {...props} />);

describe('CategoryPage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });

  describe('data fetching on componentDidMount', () => {
    test('fetches category data', () => {
      const mockFetchCategoryData = jest.fn();
      setup({ ...dummyProps, fetchCategoryData: mockFetchCategoryData });
      expect(mockFetchCategoryData.mock.calls.length).toBe(1);
    });
    test('fetches category details data', () => {
      const mockFetchCategoryDetailsData = jest.fn();
      setup({
        ...dummyProps,
        fetchCategoryDetailsData: mockFetchCategoryDetailsData,
      });
      expect(mockFetchCategoryDetailsData.mock.calls.length).toBe(1);
    });
  });

  test('redirects to 404 page on categoryDetails 404 error', () => {
    const wrapper = setup({
      ...dummyProps,
      categoryDetails: { errorDetails: { message: '404' } },
    });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });
  test('redirects to 404 page on category 404 error', () => {
    const wrapper = setup({
      ...dummyProps,
      category: { errorDetails: { message: '404' } },
    });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });
  test('redirects to the game on card click', () => {
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
    const propsError = checkProps(CategoryPage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
