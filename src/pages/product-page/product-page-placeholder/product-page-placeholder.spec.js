import React from 'react';
import { shallow } from 'enzyme';
import ProductPagePlaceholder from './product-page-placeholder';

describe('ProductPagePlaceholder', () => {
  test('renders without errors', () => {
    const wrapper = shallow(<ProductPagePlaceholder />);
    expect(wrapper).not.toBeNull();
  });
});
