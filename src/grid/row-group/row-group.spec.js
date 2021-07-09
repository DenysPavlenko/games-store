/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import RowGroup from './row-group';

const dummyProps = {
  children: <span />,
  className: '',
  size: '',
  justifyCenter: false,
  alignCenter: false,
  noWrap: false,
};

const setup = (props = {}) => shallow(<RowGroup {...props} />);

describe('RowGroup', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.row-group');
    expect(component.length).toBe(1);
  });
  test('adds size class', () => {
    const wrapper = setup({ ...dummyProps, size: 'md' });
    const component = wrapper.find('.row-group--md');
    expect(component.length).toBe(1);
  });
  test('adds justify-center class', () => {
    const wrapper = setup({ ...dummyProps, justifyCenter: true });
    const component = wrapper.find('.row-group--justify-center');
    expect(component.length).toBe(1);
  });
  test('adds align-center class', () => {
    const wrapper = setup({ ...dummyProps, alignCenter: true });
    const component = wrapper.find('.row-group--align-center');
    expect(component.length).toBe(1);
  });
  test('adds nowrap class', () => {
    const wrapper = setup({ ...dummyProps, noWrap: true });
    const component = wrapper.find('.row-group--nowrap');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(RowGroup, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
