import React from 'react';
import { shallow } from 'enzyme';
import { StripePayment } from './stripe-payment';
import { checkProps } from 'test-utils/index';
import * as firebaseUtils from 'services/firebase/firebase.utils';

const props = {
  cartItems: [],
  user: {
    currentUser: {
      displayName: 'John Doe',
      email: 'testEmail@gmail.com',
      avatar: 'https://avatar.jpg',
    },
    loading: false,
    error: null
  },
  clearCart: () => { },
};

const setup = (props = {}) => {
  return shallow(<StripePayment {...props} />)
};

describe('StripePayment', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('shows success modal and adds the purchase to the user purchase history', () => {
    const mockAddPurcaseToUserHistory = jest.fn();
    firebaseUtils.addPurcaseToUserHistory = mockAddPurcaseToUserHistory;
    const wrapper = setup({ ...props });
    const checkoutForm  = wrapper.find('Connect(Component)');
    checkoutForm.prop('isSuccess')();
    expect(mockAddPurcaseToUserHistory.mock.calls.length).toBe(1);
  });
  test('closes modal on and clears cart on modal close click', () => {
    const mockClearCart = jest.fn();
    const wrapper = setup({ ...props, clearCart: mockClearCart });
    wrapper.setState({ showModal: true });
    const modal = wrapper.find('Modal');
    modal.prop('closeModal')();
    expect(wrapper.state().showModal).toBe(false);
    expect(mockClearCart.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(StripePayment, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
