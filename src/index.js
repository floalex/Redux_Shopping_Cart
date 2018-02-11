import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { getAllProducts } from './actions';
import ShoppingManager from './containers/ShoppingManager';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

// need thunk to dispatch functions instead of action object
store.dispatch(getAllProducts());

render(
  <Provider store={store}>
    <ShoppingManager />
  </Provider>,
  document.getElementById('app')
);

