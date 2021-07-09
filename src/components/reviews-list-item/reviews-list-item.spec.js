/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import ReviewsListItem from './reviews-list-item';

const dummyProps = {
  title: 'test title',
  name: 'test-name',
  rating: '5',
};

const setup = (props = {}) => shallow(<ReviewsListItem {...props} />);

describe('ReviewsListItem', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(ReviewsListItem, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
