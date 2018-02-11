import React from 'react';
import { getVisibleProducts } from '../reducers/products';
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products)
});

const ProductManager = ({ products }) => (
  <ProductsList title="Products">
    {products.map(product => 
      <ProductItem
        key={product.id}
        product={product}
      />
    )}
  </ProductsList>
);

export default connect(
  mapStateToProps,
)(ProductManager);