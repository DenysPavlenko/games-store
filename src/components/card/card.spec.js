/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import { Card } from './card';

const defProps = {
  children: <span />,
  image: 'assets/images/image.jpg',
  onClick: () => {},
};

const setup = (props = {}) => shallow(<Card {...props} />);

describe('Card', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.card');
    expect(component.length).toBe(1);
  });
  test('defaultProp onClick returns undefined on click', () => {
    const { onClick } = Card.defaultProps;
    expect(onClick()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Card, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
