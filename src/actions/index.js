import products from './product-data.js';
// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
// This approach helps avoiding errors that will be difficult to debug
import * as types from '../constants/ActionTypes';

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const getAllProducts = () => dispatch => {
  dispatch(receiveProducts(products));
};
