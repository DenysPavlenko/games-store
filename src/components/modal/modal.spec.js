/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Modal from './modal';

const defProps = {
  hidden: false,
  closeModal: () => {},
  children: <span />,
  small: false,
  loading: false,
  className: 'test-class',
};

const setup = (props = {}) => shallow(<Modal {...props} />);

describe('Modal', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('shows spinner on loading', () => {
    const wrapper = setup({ ...defProps, loading: true });
    const spinner = wrapper.find('Spinner');
    expect(spinner.length).toBe(1);
  });
  test('hides scroll and shows up on componentDidMount', () => {
    document.body.appendChild = jest.fn();
    const wrapper = setup({ ...defProps });
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(document.body.appendChild).toHaveBeenCalled();
  });
  test('toggles scroll on componentDidUpdate', () => {
    const wrapper = setup({ ...defProps });
    wrapper.setProps({ hidden: true });
    const instance = wrapper.instance();
    const mockFn = jest.fn();
    instance.toggleScroll = mockFn;
    instance.componentDidUpdate({ hidden: false });
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('shows scroll and removes itself from dom on componentWillUnmount', () => {
    document.body.removeChild = jest.fn();
    const wrapper = setup({ ...defProps });
    const instance = wrapper.instance();
    instance.componentWillUnmount();
    expect(document.body.removeChild).toHaveBeenCalled();
  });
  test('closes on overlay click', () => {
    const wrapper = setup({ ...defProps });
    const close = wrapper.find('.modal');
    const mockFn = jest.fn();
    wrapper.setProps({ closeModal: mockFn });
    close.simulate('click', {
      target: { classList: { contains: () => true } },
    });
    expect(mockFn.mock.calls.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Modal, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
