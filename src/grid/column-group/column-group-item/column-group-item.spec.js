/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ColumnGroupItem from './column-group-item';

const dummyProps = {
  children: <span />,
  className: '',
  flex1: false,
};

const setup = (props = {}) => shallow(<ColumnGroupItem {...props} />);

describe('ColumnGroupItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.column-group__item');
    expect(component.length).toBe(1);
  });
  test('renders with column-group__item--flex-1 class', () => {
    const wrapper = setup({ ...dummyProps, flex1: true });
    const component = wrapper.find('.column-group__item--flex-1');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(ColumnGroupItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
