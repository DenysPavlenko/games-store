import React from 'react';
import { shallow } from 'enzyme';
import ReviewsListItem from './reviews-list-item';
import { checkProps } from 'test-utils/index';

const props = {
  title: 'test title',
  name: 'test-name',
  rating: '5',
};

const setup = (props = {}) => {
  return shallow(<ReviewsListItem {...props} />)
};

describe('ReviewsListItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(ReviewsListItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
