import React from 'react';
import { shallow } from 'enzyme';
import Plage from './plate';
import { checkProps } from 'test-utils/index';

const props = {
  children: <span></span>,
  className: 'test-class',
  onMouseOver: () => { },
  onMouseLeave: () => { },
}
const setup = (props = {}) => {
  return shallow(<Plage {...props} />)
};

describe('Plage', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(Plage, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
