import React from 'react';
import { shallow } from 'enzyme';
import Cards from './cards';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  isLoading: false,
  hasError: false,
  placeholdersToShow: 2,
};

const setup = (props = {}) => {
  return shallow(<Cards {...props} />)
};

describe('Cards', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.cards');
    expect(component.length).toBe(1);
  });
  test('renders <ErrorIndicator/> on error', () => {
    const wrapper = setup({ ...props, hasError: true });
    const component = wrapper.find('ErrorIndicator');
    expect(component.length).toBe(1);
  });
  test('renders <CardPlaceholder/> on loading', () => {
    const wrapper = setup({ ...props, isLoading: true, placeholdersToShow: 2 });
    const component = wrapper.find('CardPlaceholder');
    expect(component.length).toBe(2);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Cards, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
