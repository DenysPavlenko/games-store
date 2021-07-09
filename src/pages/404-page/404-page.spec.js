/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './404-page';

const setup = (props = {}) => shallow(<PageNotFound {...props} />);

describe('PageNotFound', () => {
  test('renders without errors', () => {
    const wrapper = setup();
    expect(wrapper).not.toBeNull();
  });
});
