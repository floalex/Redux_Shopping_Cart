import React from 'react';
import { shallow } from 'enzyme';
import ShoppingManager from './ShoppingManager';

it('renders without crashing', () => {
  shallow(<ShoppingManager />);
});
