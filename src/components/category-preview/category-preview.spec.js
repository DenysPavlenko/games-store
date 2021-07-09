/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import CategoryPreview from './category-preview';

const dummyProps = {
  data: {
    id: 1,
    name: 'Action',
    rout: 'action',
    image: 'https://test.jpg',
    description: 'Test description',
  },
  isLoading: false,
  hasError: false,
};

const setup = (props = {}) => shallow(<CategoryPreview {...props} />);

describe('CategoryPreview', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('Container');
    expect(component.length).toBe(1);
  });
  test('renders <ErrorIndicator/> on error', () => {
    const wrapper = setup({ ...dummyProps, hasError: true });
    const component = wrapper.find('ErrorIndicator');
    expect(component.length).toBe(1);
  });
  test('renders <PlatePlaceholder/> on loading', () => {
    const wrapper = setup({ ...dummyProps, isLoading: true });
    const component = wrapper.find('PlatePlaceholder');
    expect(component.length).toBe(1);
  });
  test('returns description text without <p></p> tag wrapper', () => {
    const wrapper = setup({
      ...dummyProps,
      data: { ...dummyProps.data, description: '<p>Test description</p>' },
    });
    const component = wrapper.find('Container PlateRight').childAt(1).dive();
    expect(component.text()).toBe('Test description');
  });

  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(CategoryPreview, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
