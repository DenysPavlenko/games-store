import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  btnLarge: false,
  btnBordered: false,
  btnArrow: false,
  btnBorderedLg: false,
  isDisabled: false,
  isLoading: false,
  isGoogleSignIn: false,
  className: 'test-class',
  href: undefined,
  onClick: () => { },
  type: 'button',
};

const setup = (props = {}) => {
  return shallow(<Button {...props} />)
};

describe('button', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.button');
    expect(component.length).toBe(1);
  });
  test('renders <button/> tag if href is not set', () => {
    const wrapper = setup({ ...props, href: undefined });
    const component = wrapper.find('button');
    expect(component.length).toBe(1);
  });
  test('renders <a/> tag if href is not set', () => {
    const wrapper = setup({ ...props, href: 'http://example.com' });
    const component = wrapper.find('a');
    expect(component.length).toBe(1);
  });
  test('renders <Spinner/> if isLoading is true', () => {
    const wrapper = setup({ ...props, isLoading: true });
    const component = wrapper.find('Spinner');
    expect(component.length).toBe(1);
  });
  test('renders <Arrow /> if btnArrow  is true', () => {
    const wrapper = setup({ ...props, btnArrow: true });
    const component = wrapper.find('.button-arrow-icon');
    expect(component.length).toBe(1);
  });
  test('renders <GoogleIcon /> if isGoogleSignIn is true', () => {
    const wrapper = setup({ ...props, isGoogleSignIn: true });
    const component = wrapper.find('.button-google-sign-in-icon-wrap');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Button, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
