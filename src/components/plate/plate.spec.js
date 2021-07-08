/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Plage from './plate';

const defProps = {
  children: <span />,
  className: 'test-class',
  onMouseOver: () => {},
  onMouseLeave: () => {},
};
const setup = (props = {}) => shallow(<Plage {...props} />);

describe('Plage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(Plage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
