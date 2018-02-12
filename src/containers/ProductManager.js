import React from 'react';
import { getVisibleProducts } from '../reducers/products';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products)
});

const ProductManager = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product => 
      <ProductItem
        key={product.id}
        product={product}
        // call imported functions directly from components, using arrow functions.
        onAddToCartClicked={ () => addToCart(product.id) }
      />
    )}
  </ProductsList>
);

// connecting state.products with the component
export default connect(
  mapStateToProps,
  { addToCart },
)(ProductManager);