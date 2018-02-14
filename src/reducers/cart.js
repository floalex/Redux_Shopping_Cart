import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
} from '../constants/ActionTypes';

const initState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state=initState.addedIds, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      // don't add duplicate product id in the cart
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_FROM_CART:
      return state.filter(id => 
        id !== action.productId
      );
    default:
      return state;
  }
};

const quantityById = (state=initState.quantityById, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      return {        
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    case REMOVE_FROM_CART:
      delete state[action.productId];
      return {
        ...state
      };
    default:
      return state;
    }
};

// get state by accessing id in cart
export const getAddedIds = (state) => state.addedIds;

// get state by accessing quantity by id in cart
export const getQuantity = (state, id) => state.quantityById[id] || 0;

const cart = (state = initState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initState;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
};

export default cart;