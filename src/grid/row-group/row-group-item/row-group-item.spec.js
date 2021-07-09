/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import RowGroupItem from './row-group-item';

const dummyProps = {
  children: <span />,
  className: '',
  flex1: false,
};

const setup = (props = {}) => shallow(<RowGroupItem {...props} />);

describe('RowGroupItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.row-group__item');
    expect(component.length).toBe(1);
  });
  test('renders with row-group__item--flex-1 class', () => {
    const wrapper = setup({ ...dummyProps, flex1: true });
    const component = wrapper.find('.row-group__item--flex-1');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(RowGroupItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
