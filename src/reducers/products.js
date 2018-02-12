import { combineReducers } from 'redux';
import { 
  RECEIVE_PRODUCTS, 
  ADD_TO_CART,
  ADD_PRODUCT_ITEM,
} from '../constants/ActionTypes';

const products = (state, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default: 
      return state;
  }
};

const byId = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      }; 
    case ADD_PRODUCT_ITEM:
      const nextId = Object.keys(state).reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
      return {
        ...state,
        [nextId]: {id: nextId, ...action.info}
      }; 
    default: 
      const { productId } = action;  // const productId = action.productId
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    case ADD_PRODUCT_ITEM:
      const nextId = state.reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
      return [...state, nextId]; 
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state, id) => {
  return state.byId[id];
};

export const getVisibleProducts = (state) =>
  state.visibleIds.map(id => getProduct(state, id));