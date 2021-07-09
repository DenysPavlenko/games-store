/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Dropdown from './dropdown';

// eslint-disable-next-line react/prop-types
const TestComponent = ({ toggleDropdown, isOpened }) => (
  <span className="test-component" onClick={toggleDropdown}>
    {isOpened.toString()}
  </span>
);

const dummyProps = {
  children: <TestComponent />,
  className: 'test-class',
};

const setup = (props = {}) => mount(<Dropdown {...props} />);

describe('Dropdown', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('should toggle dropdown on click', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.test-component');
    component.simulate('click');
    expect(component.text()).toBe('true');
  });
  test('should close dropdown when clicking outside it', () => {
    const wrapper = setup({ ...dummyProps });
    wrapper.setState({ isOpened: true });
    jest
      .spyOn(document, 'addEventListener')
      .mockImplementation(() =>
        wrapper.instance().handleClickOutside({ target: document.body })
      );
    wrapper.instance().componentDidMount();
    expect(wrapper.state().isOpened).toBe(false);
  });
  test('should not close dropdown when clicking outside it', () => {
    const wrapper = setup({ ...dummyProps });
    wrapper.setState({ isOpened: true });
    jest.spyOn(document, 'addEventListener').mockImplementation(() =>
      wrapper.instance().handleClickOutside({
        target: wrapper.find('.dropdown').getDOMNode(),
      })
    );
    wrapper.instance().componentDidMount();
    expect(wrapper.state().isOpened).toBe(true);
  });
  test('should remove click listener on unmount', () => {
    const remover = jest.spyOn(document, 'removeEventListener');
    const wrapper = setup({ ...dummyProps });
    wrapper.unmount();
    expect(remover).toHaveBeenCalled();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Dropdown, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
