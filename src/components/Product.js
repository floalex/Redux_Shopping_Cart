import React from 'react';

const Product = ({ price, quantity, title, onDeleteProductClicked }) => (
  <div className="product">
    {title} - ${price}{quantity ? ` x ${quantity}` : null}
    
    <button style={{ marginLeft: 5 }} onClick={onDeleteProductClicked}> x</button>
  </div>
);

export default Product;