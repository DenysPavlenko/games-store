/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ColumnGroup from './column-group';

const dummyProps = {
  children: <span />,
  className: '',
  size: '',
};

const setup = (props = {}) => shallow(<ColumnGroup {...props} />);

describe('ColumnGroup', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.column-group');
    expect(component.length).toBe(1);
  });
  test('adds size class', () => {
    const wrapper = setup({ ...dummyProps, size: 'md' });
    const component = wrapper.find('.column-group--md');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(ColumnGroup, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
