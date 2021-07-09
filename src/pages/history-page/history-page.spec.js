/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { HistoryPage, HistoryContainer, HistoryPageInfo } from './history-page';

const dummyProps = {
  user: {
    currentUser: {
      displayName: 'John Doe',
      email: 'testEmail@gmail.com',
      avatar: 'https://avatar.jpg',
    },
    loading: false,
    error: null,
  },
};

const setup = (props = {}) => shallow(<HistoryPage {...props} />);
const setupContainer = (props = {}) => shallow(<HistoryContainer {...props} />);
const setupInfo = (props = {}) => shallow(<HistoryPageInfo {...props} />);

describe('HistoryPage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  describe('HistoryContainer', () => {
    test('renders without errors', () => {
      const wrapper = setupContainer({ ...dummyProps });
      expect(wrapper).not.toBeNull();
    });
    test('renders placeholders on loading', () => {
      const wrapper = setupContainer({
        ...dummyProps,
        user: { ...dummyProps.user, loading: true },
      });
      const placeholder = wrapper.find('CartItemPlaceholder').first();
      expect(placeholder.length).toBe(1);
    });
    test('renders error indicator on error', () => {
      const wrapper = setupContainer({
        ...dummyProps,
        user: { ...dummyProps.user, error: 'test error' },
      });
      const errorIndicator = wrapper.find('ErrorIndicator');
      expect(errorIndicator.length).toBe(1);
    });
    test('renders "You need to be signed in to see your history" message if user is not authorized', () => {
      const wrapper = setupContainer({
        ...dummyProps,
        user: { ...dummyProps.user, currentUser: null },
      });
      const info = wrapper.find('HistoryPageInfo');
      expect(info.prop('text')).toEqual(
        'You need to be signed in to see your history'
      );
    });
    test(`renders 'You haven't bought anything yet' message if user is not authorized`, () => {
      const wrapper = setupContainer({
        ...dummyProps,
        user: { ...dummyProps.user, currentUser: {} },
      });
      const info = wrapper.find('HistoryPageInfo');
      expect(info.prop('text')).toEqual(`You haven't bought anything yet`);
    });
    test('renders cart items if history is not empty', () => {
      const wrapper = setupContainer({
        ...dummyProps,
        user: { ...dummyProps.user, currentUser: { purchaseHistory: [{ id: 1 }] } },
      });
      const cartItem = wrapper.find('CartItem');
      expect(cartItem.length).toBe(1);
    });
  });
  describe('HistoryPageInfo', () => {
    test('renders without errors', () => {
      const wrapper = setupInfo({ text: 'test' });
      expect(wrapper).not.toBeNull();
    });
    test('renders text prop', () => {
      const wrapper = setupInfo({ text: 'test' });
      const title = wrapper.find('Typography');
      expect(title.dive().text()).toEqual('test');
    });
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(HistoryPage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
