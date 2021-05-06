import React from 'react';
import { shallow } from 'enzyme';
import PlatePlaceholder from './plate-placeholder';

describe('PlatePlaceholder', () => {
  test('renders without errors', () => {
    expect(shallow(<PlatePlaceholder />)).not.toBeNull();
  });
});
