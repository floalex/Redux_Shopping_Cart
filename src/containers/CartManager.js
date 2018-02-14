import React from 'react';
import { getTotal, getCartProducts } from '../reducers';
import { checkout } from '../actions';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

const CartManager = ({ products, total, removeFromCart, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={ () => checkout(products) }
  />
);

export default connect(
  mapStateToProps,
  { checkout },
)(CartManager);