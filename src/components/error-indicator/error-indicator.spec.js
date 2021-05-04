import React from 'react';
import { shallow } from 'enzyme';
import ErrorIndicator from './error-indicator';

describe('ErrorIndicator', () => {
  test('renders without errors', () => {
    expect(shallow(<ErrorIndicator />)).not.toBeNull();
  });
});
