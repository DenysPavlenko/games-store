/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { Breadcrumbs } from './breadcrumbs';

const defaultProps = {
  routes: ['genres'],
  history: {
    location: {
      pathname: '/categories/genres',
    },
  },
};

const setup = (props = {}) => shallow(<Breadcrumbs {...props} />);

describe('Breadcrumbs', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defaultProps });
    const component = wrapper.find('.breadcrumbs');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defaultProps };
    const propsError = checkProps(Breadcrumbs, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
