const initState = {
  addedIds: [],
  quantityById: {}
};

const addedIds = (state=initState.addedIds, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const quantityById = (state=initState.quantityById, action) => {
   switch(action.type) {
    default:
      return state;
  }
};

export const getAddedIds = (state) => state.addedIds;

export const getQuantity = (state, id) => state.quantityById[id] || 0;

const cart = (state = initState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      };
  }
};

export default cart;