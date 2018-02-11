import React from 'react';
import { getTotal, getCartProducts } from '../reducers';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const CartManager = ({ products, total }) => (
  <Cart
    products={products}
    totla={total}
  />
);

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
)(CartManager);