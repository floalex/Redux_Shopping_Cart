import React, { Component } from "react";
import Product from './Product';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { updateProduct } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (info, productId) => dispatch(updateProduct(info, productId))
  };
};

class ProductItem extends Component {
	constructor(props) {
    super(props);
    this.state = {
      editOn: false,
    };
  }
  
  handleUpdateSubmit = (updatedInfo) => {
  	this.props.updateProduct(this.props.product.id, updatedInfo);
  	
  	this.toggleEditClick();
  }
  
	toggleEditClick = (e) => {
		this.setState({editOn: !this.state.editOn});
	}
	
	render () {	
	  // receive and set props from ProductManager
	  const { product, onAddToCartClicked, onDeleteProductClicked } = this.props;
	  
		if (this.state.editOn) {
			return (
				<Form 
					header="Edit Product"
					id={product.id}
          title={product.title} 
          price={product.price} 
          quantity={product.quantity}
					onSubmit={this.handleUpdateSubmit}
					onCancel={this.toggleEditClick}
				/>
			);
		} else {
			return (
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
					<button 
					  className="button"
					  style={{ marginLeft: 5 }}
					  onClick={this.toggleEditClick}>
						Edit
					</button>
				</div>
			);
		}
	}
}

export default connect(
  null,
  mapDispatchToProps,
)(ProductItem);