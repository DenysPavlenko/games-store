/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Plate from './plate';

const dummyProps = {
  children: <span />,
  className: 'test-class',
  onMouseOver: () => {},
  onMouseLeave: () => {},
};
const setup = (props = {}) => shallow(<Plate {...props} />);

describe('Plate', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    expect(wrapper).not.toBeNull();
  });
  test('defaultProp onMouseLeave returns undefined on click', () => {
    const { onMouseLeave } = Plate.defaultProps;
    expect(onMouseLeave()).toBeUndefined();
  });
  test('defaultProp onMouseOver returns undefined on click', () => {
    const { onMouseOver } = Plate.defaultProps;
    expect(onMouseOver()).toBeUndefined();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Plate, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
