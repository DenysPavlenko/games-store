/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import Row from './row';

const dummyProps = {
  children: <span />,
  className: '',
};

const setup = (props = {}) => shallow(<Row {...props} />);

describe('Row', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...dummyProps });
    const component = wrapper.find('.row');
    expect(component.length).toBe(1);
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...dummyProps };
    const propsError = checkProps(Row, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
