import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './card';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  onClick: () => { }
};

const setup = (props = {}) => {
  return shallow(<Card {...props} />)
};

describe('Card', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    const component = wrapper.find('.card');
    expect(component.length).toBe(1);
  });
  test('defaultProp onClick returns undefined on click', () => {
    const onClick = Card.defaultProps.onClick;
    expect(onClick()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Card, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
