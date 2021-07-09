/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ProgressItem from './progress-item';

const dummyProps = {
  title: 'test title',
  radius: 36,
  percents: 50,
};
const setup = (props = {}) => shallow(<ProgressItem {...props} />);

describe('ProgressItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(ProgressItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
