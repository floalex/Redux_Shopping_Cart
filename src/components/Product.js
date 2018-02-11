import React from 'react';

const Product = ({ price, quantity, title }) => (
  <div className="product">
    {title} - ${price}{quantity ? ` x ${quantity}` : null}
  </div>
);

export default Product;