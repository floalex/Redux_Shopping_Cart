import React from 'react';
import Product from './Product';

const ProductItem = ({ product, onAddToCartClicked, onDeleteProductClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      onDeleteProductClicked={onDeleteProductClicked}
    />
    <button
      className="button"
      onClick={onAddToCartClicked}
      disabled={product.quantity > 0 ? '' : 'disabled'}>
      {product.quantity > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
);

export default ProductItem;