import React from 'react';
import { shallow } from 'enzyme';
import CartItemPlaceholder from './cart-item-placeholder';

describe('CartItemPlaceholder', () => {
  test('renders without errors', () => {
    expect(shallow(<CartItemPlaceholder />)).not.toBeNull();
  });
});
