/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { store } from 'redux/store';
import { checkProps } from 'test-utils/index';
import CheckoutForm, {
  UnconnectedCheckoutForm,
  initialState,
} from './checkout-form';

const dummyProps = {
  user: {
    currentUser: {
      displayName: 'John Doe',
      email: 'testEmail@gmail.com',
      avatar: 'https://avatar.jpg',
    },
  },
  isSuccess: () => {},
  stripe: {
    createPaymentMethod: () => ({
      error: false,
      paymentMethod: { type: 'visa' },
    }),
  },
  elements: {
    getElement: () => ({ _complete: true, clear: () => {} }),
  },
};

const state = {
  name: 'John Doe',
  email: 'testEmail@gmail.com',
  address: 'test address',
  terms: true,
  nameInvalid: false,
  emailInvalid: false,
  addressInvalid: false,
  cardInvalid: false,
  formErrors: false,
  isLoading: false,
};

const setup = (props = {}) =>
  shallow(<UnconnectedCheckoutForm {...props} />, {
    disableLifecycleMethods: false,
  });

const stripePromise = loadStripe('testId');
const connectedSetup = (props = {}) =>
  mount(
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <CheckoutForm {...props} />
      </Elements>
    </Provider>
  );

describe('CheckoutForm', () => {
  test('renders without errors', () => {
    const wrapper = connectedSetup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('sets user name and email on signIn', () => {
    const wrapper = setup({ ...dummyProps });
    wrapper.instance().componentDidUpdate({ user: { currentUser: null } });
    expect(wrapper.state().name).toEqual(dummyProps.user.currentUser.displayName);
    expect(wrapper.state().email).toEqual(dummyProps.user.currentUser.email);
  });
  test('clears user name and email on signOut', () => {
    const wrapper = setup({ ...dummyProps, user: { currentUser: null } });
    wrapper.instance().componentDidUpdate({
      user: { currentUser: { ...dummyProps.user.currentUser } },
    });
    expect(wrapper.state().name).toEqual('');
    expect(wrapper.state().email).toEqual('');
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(UnconnectedCheckoutForm, expectedProps);
    expect(propsError).toBeUndefined();
  });

  describe('CheckoutForm card input', () => {
    test('sets cardInvalid on change', () => {
      const wrapper = setup({ ...dummyProps });
      const cardElement = wrapper.find('CardElement');
      cardElement.simulate('change', { error: 'test error' });
      expect(wrapper.state().cardInvalid).toBe('test error');
    });
  });

  describe('CheckForm form handlers', () => {
    let wrapper;
    let instance;
    beforeEach(() => {
      wrapper = setup({ ...dummyProps });
      instance = wrapper.instance();
    });
    test('handleInput sets input`s value to the state', () => {
      instance.handleInput({
        target: { name: 'name', type: 'text', value: 'John Doe' },
      });
      expect(wrapper.state().name).toBe('John Doe');
    });
    test('handleInput sets input`s error to the state', () => {
      wrapper.setState({ formErrors: true });
      instance.handleInput({
        target: { name: 'name', type: 'text', value: '' },
      });
      expect(wrapper.state().nameInvalid).toBe(true);
    });
    test('handleCheck sets terms to true', () => {
      wrapper.setState({ formErrors: true });
      instance.handleCheck({ target: { checked: true } });
      expect(wrapper.state().terms).toBe(true);
    });

    test('handleSubmit stops execution if stripe is undefined', async () => {
      wrapper.setProps({ stripe: undefined });
      const result = await instance.handleSubmit({ preventDefault: () => {} });
      expect(result).toBeUndefined();
    });
    test('handleSubmit stops execution if elements._complete is false', async () => {
      wrapper.setProps({
        elements: {
          getElement: () => ({ _complete: false }),
        },
      });
      const result = await instance.handleSubmit({ preventDefault: () => {} });
      expect(result).toBeUndefined();
    });
    test('handleSubmit stops execution if there are form errors', async () => {
      wrapper.setState({ ...state, name: '' });
      const result = await instance.handleSubmit({ preventDefault: () => {} });
      expect(result).toBeUndefined();
    });
    test('handleSubmit stops execution if terms is false', async () => {
      wrapper.setState({ ...state, terms: false });
      const result = await instance.handleSubmit({ preventDefault: () => {} });
      expect(result).toBeUndefined();
    });
    test('handleSubmit sets isLoading to true before stripe request', async () => {
      console.log = jest.fn();
      wrapper.setState({ ...state });
      instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().isLoading).toBe(true);
    });
    test('handleSubmit logs error and sets isLoading to false if stripe.createPaymentMethod returns error', async () => {
      console.log = jest.fn();
      const error = 'test error';
      wrapper.setState({ ...state });
      wrapper.setProps({ stripe: { createPaymentMethod: () => ({ error }) } });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().isLoading).toBe(false);
      expect(console.log).toHaveBeenCalledWith('[Error]', error);
    });
    test('handleSubmit logs paymentMethod, sets state to the initialState, calls isSuccess method', async () => {
      console.log = jest.fn();
      const mockIsSuccess = jest.fn();
      wrapper.setState({ ...state });
      wrapper.setProps({ ...dummyProps, isSuccess: mockIsSuccess });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state()).toEqual(initialState);
      expect(mockIsSuccess.mock.calls.length).toBe(1);
      expect(console.log).toHaveBeenCalledWith('[PaymentMethod]', {
        type: 'visa',
      });
    });
  });
});
