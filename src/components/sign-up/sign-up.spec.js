/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { SignUp } from './sign-up';

const state = {
  name: 'Test name',
  email: 'testEmail@gmail.com',
  password: '123321',
  confirmPassword: '123321',
};

const dummyProps = {
  signUpWithEmail: () => {},
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

const setup = (props = {}) => shallow(<SignUp {...props} />);

describe('SignUp', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('shows message "Passwords don`t match" message if passwords do not match', () => {
    const wrapper = setup({ ...dummyProps });
    wrapper.setState({
      ...state,
      password: '123',
      confirmPassword: '321',
      formErrors: true,
    });
    const p = wrapper.find('.sign-up-form .text-danger');
    expect(p.dive().text()).toEqual("Passwords don't match");
  });
  test('shows error message on user authentication error', () => {
    const wrapper = setup({
      ...dummyProps,
      user: { ...dummyProps.user, error: 'error message' },
    });
    const p = wrapper.find('.sign-up-form .text-danger');
    expect(p.dive().text()).toEqual('error message');
  });

  describe('handlers', () => {
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
    test('handleSubmit stops execution if name is not valid', async () => {
      wrapper.setState({ ...state, name: '1' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit stops execution if email is not valid', async () => {
      wrapper.setState({ ...state, email: 'wrongEmail#gmail.com' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit stops execution if password is not valid', async () => {
      wrapper.setState({ ...state, password: '1' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit stops execution if password and confirm password do not match', async () => {
      wrapper.setState({ ...state, password: '123', confirmPassword: '321' });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(wrapper.state().formErrors).toBe(true);
    });
    test('handleSubmit signs user with email', async () => {
      const mockSignUpWithEmail = jest.fn();
      wrapper.setProps({ signUpWithEmail: mockSignUpWithEmail });
      wrapper.setState({ ...state });
      await instance.handleSubmit({ preventDefault: () => {} });
      expect(mockSignUpWithEmail.mock.calls.length).toBe(1);
    });
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(SignUp, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
