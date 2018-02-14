import { shallow } from 'enzyme';
import cart from './cart';

describe('reducers', () => {
  describe('cart', () => {
    const initState = {
      addedIds: [],
      quantityById: {}
    };
    
    it ('should provide the initial state', () => {
      expect(cart(undefined, {})).toEqual(initState);
    });
    
    it ('should handle ADD_TO_CART action', () => {
      expect(cart(initState, {type: 'ADD_TO_CART', productId: 1})).toEqual({
        addedIds: [1],
        quantityById: {1: 1}
      });
    });
    
    it ('should handle CHECKOUT_REQUEST action', () => {
      expect(cart({}, {type: 'CHECKOUT_REQUEST'})).toEqual(initState);
    });
  });
  
  describe('when the product is already in cart', () => {
    it ('should handle ADD_TO_CART action without duplicating the product in the cart', () => {
      const state = {
        addedIds: [1, 2],
        quantityById: { 1: 1, 2: 1}
      };
      
      expect(cart(state, {type: 'ADD_TO_CART', productId: 2})).toEqual({
        addedIds: [1, 2],
        quantityById: { 1: 1, 2: 2}
      });
    });
  });
});