import React from 'react';
import { shallow } from 'enzyme';
import CardPlaceholder from './card-placeholder';

describe('CardPlaceholder', () => {
  test('renders without errors', () => {
    expect(shallow(<CardPlaceholder />)).not.toBeNull();
  });
});
