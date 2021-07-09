/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Button from './button';

const defProps = {
  children: <span />,
  btnLarge: false,
  btnBordered: false,
  btnArrow: false,
  btnBorderedLg: false,
  isDisabled: false,
  isLoading: false,
  isGoogleSignIn: false,
  className: 'test-class',
  href: undefined,
  onClick: () => {},
  type: 'button',
};

const setup = (props = {}) => shallow(<Button {...props} />);

describe('button', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.button');
    expect(component.length).toBe(1);
  });
  test('renders <button/> tag if href is not set', () => {
    const wrapper = setup({ ...defProps, href: undefined });
    const component = wrapper.find('button');
    expect(component.length).toBe(1);
  });
  test('renders <a/> tag if href is not set', () => {
    const wrapper = setup({ ...defProps, href: 'http://example.com' });
    const component = wrapper.find('a');
    expect(component.length).toBe(1);
  });
  test('renders <Spinner/> if isLoading is true', () => {
    const wrapper = setup({ ...defProps, isLoading: true });
    const component = wrapper.find('Spinner');
    expect(component.length).toBe(1);
  });
  test('renders <Arrow /> if btnArrow  is true', () => {
    const wrapper = setup({ ...defProps, btnArrow: true });
    const component = wrapper.find('.button-arrow-icon');
    expect(component.length).toBe(1);
  });
  test('renders <GoogleIcon /> if isGoogleSignIn is true', () => {
    const wrapper = setup({ ...defProps, isGoogleSignIn: true });
    const component = wrapper.find('.button-google-sign-in-icon-wrap');
    expect(component.length).toBe(1);
  });
  test('defaultProp onClick returns undefined on click', () => {
    const { onClick } = Button.defaultProps;
    expect(onClick()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Button, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
