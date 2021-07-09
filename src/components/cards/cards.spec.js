/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Cards from './cards';

const dummyProps = {
  children: <span />,
  isLoading: false,
  hasError: false,
  placeholdersToShow: 2,
};

const setup = (props = {}) => shallow(<Cards {...props} />);

describe('Cards', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.cards');
    expect(component.length).toBe(1);
  });
  test('renders <ErrorIndicator/> on error', () => {
    const wrapper = setup({ ...dummyProps, hasError: true });
    const component = wrapper.find('ErrorIndicator');
    expect(component.length).toBe(1);
  });
  test('renders <CardPlaceholder/> on loading', () => {
    const wrapper = setup({
      ...dummyProps,
      isLoading: true,
      placeholdersToShow: 2,
    });
    const component = wrapper.find('CardPlaceholder');
    expect(component.length).toBe(2);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Cards, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
