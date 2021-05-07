import React from 'react';
import { shallow } from 'enzyme';
import SocialIcons from './social-icons';
import { checkProps } from 'test-utils/index';

const props = {
  socials: [
    {
      Icon: '<span></span>',
      link: 'http://example.com'
    },
  ],
  className: 'test-class',
};

const setup = (props = {}) => {
  return shallow(<SocialIcons {...props} />)
};

describe('SocialIcons', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...props });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...props };
    const propsError = checkProps(SocialIcons, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
