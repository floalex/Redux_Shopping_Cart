import React, { Component } from "react";
import Product from './Product';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId, productQuantity) => dispatch(removeFromCart(productId, productQuantity))
  };
};

class CartItem extends Component {
  onRemoveCartClicked = () => {
  	this.props.removeFromCart(this.props.product.id, this.props.product.quantity);
  }
  

	render () {	
	  // receive and set props from Cart
	  const { product } = this.props;
	  
		return (
			<div style={{ marginBottom: 20 }}>
			  <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          onRemoveCartClicked={this.onRemoveCartClicked}
        />
			</div>
		);
	}
}

export default connect(
  null,
  mapDispatchToProps,
)(CartItem);