import React from 'react';
import { shallow } from 'enzyme';
import ProgressItem from './progress-item';
import { checkProps } from 'test-utils/index';

const props = {
  title: 'test title',
  radius: 36,
  percents: 50,
}
const setup = (props = {}) => {
  return shallow(<ProgressItem {...props} />)
};

describe('ProgressItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ProgressItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
