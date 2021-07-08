/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { SignInSignUpModal } from './sign-in-sign-up-modal';

const props = {
  showModal: false,
  closeModal: () => {},
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

const setup = (props = {}) =>
  shallow(<SignInSignUpModal {...props} />);

describe('SignInSignUpModal', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('shows SignUp component and "Use an existing account" message', () => {
    const wrapper = setup({ ...props });
    let title = wrapper.find('.sign-in-sign-up-modal-title');
    title.simulate('click');
    const signUp = wrapper.find('Connect(SignUp)');
    expect(signUp.length).toBe(1);
    title = wrapper.find('.sign-in-sign-up-modal-title');
    expect(title.dive().text()).toEqual('Use an existing account');
  });
  test('shows SignUp component and "Use an existing account" message', () => {
    const wrapper = setup({ ...props });
    let title = wrapper.find('.sign-in-sign-up-modal-title');
    title.simulate('click');
    title.simulate('click');
    const signUp = wrapper.find('Connect(SignIn)');
    expect(signUp.length).toBe(1);
    title = wrapper.find('.sign-in-sign-up-modal-title');
    expect(title.dive().text()).toEqual('Create a new account');
  });
  test('shows signIn on modal close', () => {
    const wrapper = setup({ ...props });
    const modal = wrapper.find('Modal');
    modal.prop('onExited')();
    const signIn = wrapper.find('Connect(SignIn)');
    expect(signIn.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SignInSignUpModal, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
