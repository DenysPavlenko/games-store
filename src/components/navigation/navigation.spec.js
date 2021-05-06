import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import Navigation, { UnconnectedNavigation } from './navigation';
import { checkProps, storeFactory } from 'test-utils/index';

const props = {
  user: {
    currentUser: {
      displayName: 'John Doe',
      avatar: 'https://avatar.jpg',
    },
    loading: false,
    error: false
  },
};

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(
    <Router>
      <Navigation store={store} />
    </Router>
  ).dive().dive().dive().dive().dive();
};

describe('Navigation', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('renders user-dropdown if user is authorized', () => {
    const wrapper = setup({ ...props });
    const button = wrapper.find('.navigation-user-dropdown');
    expect(button.length).toBe(1);
  });
  test('renders "Sign in" button if user is not authorized', () => {
    const wrapper = setup({ ...props, user: { ...props.user, currentUser: null } });
    const button = wrapper.find('Button.navigation-button');
    expect(button.length).toBe(1);
  });
  test('shows sign in modal on "Sign In" button click', () => {
    const wrapper = setup({ ...props, user: { ...props.user, currentUser: null } });
    const button = wrapper.find('Button.navigation-button');
    button.simulate('click');
    const signInSignUpModal = wrapper.find('Connect(SignInSignUpModal)');
    expect(signInSignUpModal.prop('showModal')).toBe(true);
  });
  test('closes sign in modal on modal close click', () => {
    const wrapper = setup({ ...props, user: { ...props.user, currentUser: null } });
    const signInSignUpModal = wrapper.find('Connect(SignInSignUpModal)');
    signInSignUpModal.invoke('closeModal')();
    expect(signInSignUpModal.prop('showModal')).toBe(false);
  });
  test('closes sign in modal on modal close click', () => {
    const wrapper = setup({ ...props, user: { ...props.user, currentUser: null } });
    const signInSignUpModal = wrapper.find('Connect(SignInSignUpModal)');
    signInSignUpModal.invoke('closeModal')();
    expect(signInSignUpModal.prop('showModal')).toBe(false);
  });
  test('toggles menu on burger click', () => {
    const wrapper = setup({ ...props });
    const burger = wrapper.find('.navigation-burger');
    burger.simulate('click');
    const navigationMenu = wrapper.find('.navigation-menu');
    expect(navigationMenu.hasClass('is-active')).toBe(true);
  });
  test('hides menu on navigation list item click', () => {
    const wrapper = setup({ ...props });
    const burger = wrapper.find('.navigation-burger');
    burger.simulate('click');
    const navigationListItem = wrapper.find('.navigation-list-item').first();
    navigationListItem.simulate('click');
    const navigationMenu = wrapper.find('.navigation-menu');
    expect(navigationMenu.hasClass('is-active')).toBe(false);
  });
  test('closes modal on user sign', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    const wrapper = setup({ ...props, user: { ...props.user, currentUser: null } });
    const signInSignUpModal = wrapper.find('Connect(SignInSignUpModal)');
    const button = wrapper.find('Button.navigation-button');
    button.simulate('click');
    wrapper.setProps({ user: { ...props.user } });
    expect(signInSignUpModal.prop('showModal')).toBe(false);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(UnconnectedNavigation, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
