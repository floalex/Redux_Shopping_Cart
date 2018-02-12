import React from 'react';

const Product = ({ price, quantity, title, onDeleteProductClicked }) => (
  <div className="product">
    {title} - ${price}{quantity ? ` x ${quantity}` : null}
    
    <button onClick={onDeleteProductClicked}> x</button>
  </div>
);

export default Product;