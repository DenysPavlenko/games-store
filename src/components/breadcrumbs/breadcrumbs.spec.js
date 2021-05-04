import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumbs } from './breadcrumbs';
import { checkProps } from 'test-utils/index';

const props = {
  routes: ['genres'],
  history: {
    location: {
      pathname: '/categories/genres'
    },
  }
};

const setup = (props = {}) => {
  return shallow(<Breadcrumbs {...props} />)
};

describe('Breadcrumbs', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.breadcrumbs');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Breadcrumbs, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
