/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { SignIn } from './sign-in';

const dummyProps = {
  signInWithEmail: () => {},
  signInWithGoogle: () => {},
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

const setup = (props = {}) => shallow(<SignIn {...props} />);

describe('SignIn', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('renders error message on error', () => {
    const wrapper = setup({
      ...dummyProps,
      user: { ...dummyProps.user, error: 'test error' },
    });
    const error = wrapper.find('Typography.text-danger');
    expect(error.length).toBe(1);
  });
  test('calls signInWithGoogle modal on button click', () => {
    const mockSignInWithGoogle = jest.fn();
    const wrapper = setup({
      ...dummyProps,
      signInWithGoogle: mockSignInWithGoogle,
    });
    const button = wrapper.find('.sign-in-buttons').childAt(1);
    button.simulate('click');
    expect(mockSignInWithGoogle.mock.calls.length).toBe(1);
  });

  describe('SignIn handlers', () => {
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
    test('handleSubmit stops execution if password is not valid', async () => {
      wrapper.setState({ password: '1', email: 'testEmail@gmail.com' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit stops execution if email is not valid', async () => {
      wrapper.setState({
        password: '12345123',
        email: 'invalidEmail#gmail.com',
      });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit signs user with email', async () => {
      const mockSignInWithEmail = jest.fn();
      wrapper.setProps({ signInWithEmail: mockSignInWithEmail });
      wrapper.setState({ email: 'testEmail@gmail.com', password: '1234123' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(mockSignInWithEmail.mock.calls.length).toBe(1);
    });
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SignIn, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
