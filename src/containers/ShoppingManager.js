import React from 'react';
import './App.css';
import ProductManager from './ProductManager';
import CartManager from './CartManager';

const App = () => (
   <main>
  	<header className="header">
    	<h1>Welcome to the Shop!</h1>
  	</header>
    <ProductManager />
    <CartManager />
  </main>
);

export default App;

  // <ProductManager 
  //   	product_data={this.state.product_data}
  //   	add_to_cart={this.addToCart}
  //   	updateProduct={this.productUpdate}
  //   	deleteProduct={this.deleteProduct}
        // newProductInsert={this.addProduct}
  //   />
  //   <CartManager
  //   	cart_items={this.state.cart_items}
  //   	remove_from_cart={this.removeFromCart}
  //   	checkout={this.resetCart}
  //   />
