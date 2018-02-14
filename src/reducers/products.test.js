// since there are 2 reducers in products reducer, import them as one
import reducer, * as products from './products';
import { shallow } from 'enzyme';

describe('reducers', () => {
  describe('products', () => {
    let state;
    
    describe('get all the products from data', () => {
      
      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_PRODUCTS',
          products: [
            {
              id: 1,
              title: 'Product 1',
              quantity: 1,
            },
            {
              id: 2,
              title: 'Product 2',
              quantity: 2,
            },
          ],
        });
      });
      
      it('contains the products from the action', () => {
        expect(products.getProduct(state, 1)).toEqual({
          id: 1,
          title: 'Product 1',
          quantity: 1,
        });
        expect(products.getProduct(state, 2)).toEqual({
          id: 2,
          title: 'Product 2',
          quantity: 2,
        });
      });
      
      it('does not contain other products not in state', () => {
        expect(products.getProduct(state, 3)).toEqual(undefined);
      });
      
      it('lists all of the products as visible', () => {
        expect(products.getVisibleProducts(state)).toEqual([
          {
            id: 1,
            title: 'Product 1',
            quantity: 1,
          },
          {
            id: 2,
            title: 'Product 2',
            quantity: 2,
          },
        ]);
      });
      
      describe('when the product is added into the cart', () => {
        beforeEach(() => {
          state = reducer(state, {type: 'ADD_TO_CART', productId: 2});
        });
        
        it('subtracts the quantity from the inventory', () => {
          expect(products.getVisibleProducts(state)).toEqual([
            {
              id: 1,
              title: 'Product 1',
              quantity: 1,
            },
            {
              id: 2,
              title: 'Product 2',
              quantity: 1,
            },
          ]);
        });
        
      });
      
    });
    
  });
});