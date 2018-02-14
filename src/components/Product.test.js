import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const compoenent = shallow(
    <Product {...props} />
  );
  
  return {
    component: compoenent
  };
};

describe('Product compoenent', () => {
  it('should render title and price', () => {
    it('should render title and price', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99 })
      expect(component.text()).toBe('Test Product - $9.99')
    })
  });
  
  describe('when we add product to cart', () => {
    it('should render title, price, and quantity', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99, quantity: 1 })
      expect(component.text()).toBe('Test Product - $9.99 x 1Remove from cart')
    });
  });
});