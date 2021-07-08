/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Chip from './chip';

const defProps = {
  children: <span />,
  className: 'test-class',
};

const setup = (props = {}) => shallow(<Chip {...props} />);

describe('Chip', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    const component = wrapper.find('.chip');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Chip, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
