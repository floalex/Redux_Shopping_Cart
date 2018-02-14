import React from 'react';
import CartItem from './CartItem';

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const cartItems = hasProducts ? (
    products.map(product =>
      <CartItem
        key={product.id}
        product={product}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div>{cartItems}</div>
      <p>Total: ${total}</p>
      <button 
        className="button"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  );
};


export default Cart;