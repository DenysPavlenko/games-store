import React from 'react';
import { shallow } from 'enzyme';
import { ProductPage, ProductTableItem } from './product-page';
import { checkProps } from 'test-utils/index';

const props = {
  game: {
    loading: false,
    data: {
      id: 1,
      price: 41,
      rout: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      genres: ['Action', 'Shooter'],
      developers: ['Rockstar Games', 'Rockstar North'],
      publishers: ['Rockstar Games'],
      platforms: ['PC', 'PlayStation 4', 'PlayStation 3', 'Xbox 360', 'Xbox One'],
      description: 'test description',
      released: '2013-09-17',
      rating: 4.48,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 2069,
          percent: 58.73
        }
      ],
      'image': 'https://test.jpg',
      'previews': [
        'https://test.jpg',
        'https://test2.jpg',
      ]
    },
    error: false,
    errorDetails: null
  },
  cartItems: [
    {
      id: 1,
      image: 'https://test.jpg',
      name: 'Grand Theft Auto V',
      price: 41,
      quantity: 1
    }
  ],
  fetchGameDetails: () => { },
  addItemToCart: () => { },
  match: { params: { gameId: '2' } }
};

const setup = (props = {}) => shallow(<ProductPage {...props} />);
const setupTableItem = (props = {}) => shallow(<ProductTableItem {...props} />);

describe('ProductPage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });

  describe('on componentDidMount', () => {
    test('fetches data', () => {
      const mockFetchGameDetails = jest.fn();
      setup({ ...props, fetchGameDetails: mockFetchGameDetails });
      expect(mockFetchGameDetails.mock.calls.length).toBe(1);
    });
    test('checks if product is in the cart', () => {
      const wrapper = setup({ ...props, match: { params: { gameId: '1' } } });
      expect(wrapper.state().inCart).toBe(true);
    });
  });

  describe('on componentDidUpdate', () => {
    test('informs user if product was removed from cart', () => {
      const wrapper = setup({ ...props });
      wrapper.setProps({ cartItems: [] })
      expect(wrapper.state().inCart).toBe(false);
    });
    test('checks if product is in the cart', () => {
      const wrapper = setup({ ...props, match: { params: { gameId: '1' } } });
      expect(wrapper.state().inCart).toBe(true);
    });
  });

  test('redirects to 404 page on 404 error', () => {
    const wrapper = setup({ ...props, game: { ...props.game, errorDetails: { message: '404' } } });
    const redirect = wrapper.find('Redirect');
    expect(redirect.length).toBe(1);
  });
  test('renders error indicator on error', () => {
    const wrapper = setup({ ...props, game: { ...props.game, error: true } });
    const errorIndicator = wrapper.find('ErrorIndicator');
    expect(errorIndicator.length).toBe(1);
  });
  test('renders placeholder indicator on loading', () => {
    const wrapper = setup({ ...props, game: { ...props.game, loading: true } });
    const placeholder = wrapper.find('ProductPagePlaceholder');
    expect(placeholder.length).toBe(1);
  });

  test('adds item to cart on cart click', () => {
    const mockAddItemToCart = jest.fn();
    const wrapper = setup({ ...props, addItemToCart: mockAddItemToCart });
    const buyProduct = wrapper.find('BuyProduct');
    buyProduct.prop('onCartClick')();
    expect(mockAddItemToCart.mock.calls.length).toBe(1);
  });
  test('redirects to the checkout page on "Buy now" button click', () => {
    const mockHistoryPush = jest.fn();
    const wrapper = setup({ ...props, history: { push: mockHistoryPush } });
    const buyProduct = wrapper.find('BuyProduct');
    buyProduct.prop('onButtonClick')();
    expect(mockHistoryPush.mock.calls.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ProductPage, expectedProps);
    expect(propsError).toBeUndefined();
  });

  describe('ProductTableItem', () => {
    test('renders without errors', () => {
      const wrapper = setupTableItem({ title: 'Genre', property: ['Action', 'Shooter'] });
      expect(wrapper).not.toBeNull();
    });
    test('adds "s" to the title if there are more then 1 preview', () => {
      const wrapper = setupTableItem({ title: 'Genre', property: ['Action', 'Shooter'] });
      const title = wrapper.find('.product-table-item').childAt(0);
      expect(title.dive().text()).toEqual('Genres');
    });
    test('doesn not add "s" to the title if there 1 preview', () => {
      const wrapper = setupTableItem({ title: 'Genre', property: 'Action' });
      const title = wrapper.find('.product-table-item').childAt(0);
      expect(title.dive().text()).toEqual('Genre');
    });
    test('concatenates properties if there are more then 1 property', () => {
      const wrapper = setupTableItem({ title: 'Genre', property: ['Action', 'Shooter'] });
      const title = wrapper.find('.product-table-item').childAt(1);
      expect(title.dive().text()).toEqual('Action, Shooter');
    });
    test('shows 1 property if there is 1 property', () => {
      const wrapper = setupTableItem({ title: 'Genre', property: 'Action' });
      const title = wrapper.find('.product-table-item').childAt(1);
      expect(title.dive().text()).toEqual('Action');
    });
  });

});
