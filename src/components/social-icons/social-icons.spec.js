import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from 'test-utils/index';
import SocialIcons from './social-icons';

const defProps = {
  socials: [
    {
      Icon: '<span></span>',
      link: 'http://example.com',
    },
  ],
  className: 'test-class',
};

// eslint-disable-next-line react/jsx-props-no-spreading
const setup = (props = {}) => shallow(<SocialIcons {...props} />);

describe('SocialIcons', () => {
  test('renders without errors', () => {
    const wrapper = setup({ ...defProps });
    expect(wrapper).not.toBeNull();
  });
  test('does not throw warning with expected props', () => {
    const expectedProps = { ...defProps };
    const propsError = checkProps(SocialIcons, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
