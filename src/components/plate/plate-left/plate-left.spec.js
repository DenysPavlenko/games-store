/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import PlateLeft from './plate-left';

const defProps = {
  children: <span />,
  className: 'test-class',
};
const setup = (props = {}) => shallow(<PlateLeft {...props} />);

describe('PlateLeft', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(PlateLeft, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
