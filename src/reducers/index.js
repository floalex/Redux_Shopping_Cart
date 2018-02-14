import { combineReducers } from 'redux';
import products, * as fromProducts from './products';
import cart, * as fromCart from './cart';

export default combineReducers({
  products,
  cart,
}); 

const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);

export const getTotal = (state) => 
  getAddedIds(state)
    .reduce((accumulator, id) => 
      accumulator + getProduct(state, id).price * getQuantity(state, id), 0
    )
    .toFixed(2);

// copy products from products, quantity from cart
export const getCartProducts = (state) => 
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }));
    