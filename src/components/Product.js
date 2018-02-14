import React from 'react';

const Product = ({ price, quantity, title, onDeleteProductClicked, onRemoveCartClicked }) => (
  <div className="product">
    {title} - ${price}{quantity ? ` x ${quantity}` : null}
    
    <button 
      style={{ marginLeft: 5 }} 
      onClick={onDeleteProductClicked ? onDeleteProductClicked : onRemoveCartClicked}> 
    {onDeleteProductClicked ? 'x' : 'Remove from cart'}
    </button>
  </div>
);

export default Product;