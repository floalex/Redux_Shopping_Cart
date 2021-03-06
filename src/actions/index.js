import products from './product-data.js';
// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
// This approach helps avoiding errors that will be difficult to debug
import * as types from '../constants/ActionTypes';

// action
const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

// dispatch action to make changes
export const getAllProducts = () => dispatch => {
  dispatch(receiveProducts(products));
};

const addCartAction = (productId) => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].quantity > 0) {
    dispatch(addCartAction(productId));
  }
};

export const removeFromCart = (productId, productQuantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  productQuantity
});

// export const removeFromCart = (productId, productQuantity) => (dispatch, getState) => {
//   dispatch(removeCartAction(productId, productQuantity));
// };

// combine dispatch action together
export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();
  dispatch({
    type: types.CHECKOUT_REQUEST,
    cart
  });
};

export const addNewProduct = (info) => ({ 
  type: types.ADD_PRODUCT_ITEM,
  info,
});

export const updateProduct = (productId, info) => ({ 
  type: types.EDIT_PRODUCT_ITEM,
  productId,
  info,
});

export const deleteProduct = (productId) => (dispatch, getState) => {
  // prevent deleting product when this product already in shopping cart
  if (!getState().cart.quantityById[productId] > 0) {
    dispatch({
      type: types.DELETE_PRODUCT,
      productId
    });
  }
};
