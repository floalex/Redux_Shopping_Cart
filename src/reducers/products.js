import { combineReducers } from 'redux';
import { 
  RECEIVE_PRODUCTS, 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_ITEM,
  EDIT_PRODUCT_ITEM,
  DELETE_PRODUCT,
} from '../constants/ActionTypes';

const product = (product, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...product,
        quantity: product.quantity - 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...product,
        quantity: product.quantity + action.productQuantity,
      };
    case EDIT_PRODUCT_ITEM:
      return {
        ...product,
        ...action.info
      };
    default: 
      return product;
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
    case DELETE_PRODUCT:
      delete state[action.productId];
      return {
        ...state,
      };
    default: 
      const { productId } = action;  // const productId = action.productId
      if (productId) {
        return {
          ...state,
          [productId]: product(state[productId], action)
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
    case DELETE_PRODUCT:
      return state.filter(id => 
        id !== action.productId
      );
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