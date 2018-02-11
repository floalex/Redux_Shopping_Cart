import React from 'react';
import { getTotal, getCartProducts } from '../reducers';
import { checkout } from '../actions';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const CartManager = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={ () => checkout(products) }
  />
);

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout },
)(CartManager);