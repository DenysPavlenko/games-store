import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './home-page';

describe('HomePage', () => {
  test('renders without errors', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).not.toBeNull();
  });
});
