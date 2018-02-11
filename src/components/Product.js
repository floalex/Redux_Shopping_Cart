import React from 'react';

const Product = ({ price, quantity, title }) => (
  <div className="product">
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
);

export default Product;