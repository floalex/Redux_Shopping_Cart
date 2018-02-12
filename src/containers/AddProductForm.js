import React, { Component } from "react";
import { connect } from 'react-redux';
import Form from '../components/Form';
import { addNewProduct } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: info => dispatch(addNewProduct(info))
  };
};

class AddProductForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
      displayed: false,
    };
  }
  
  handleNewProductSubmit = (info) => {
  	this.props.addNewProduct(info);
  	
  	this.toggleNewProduct();
  }
  
  toggleNewProduct = () => {
  	this.setState({displayed: !this.state.displayed});
  }
  
  render() {
  	if (this.state.displayed) {
  		return (
  		  <div style={{ marginBottom: 20 }}>
    			<Form 
    				header="Add New Product"
    				onSubmit={this.handleNewProductSubmit}
    				onCancel={this.toggleNewProduct}
    			/>
    		</div>
  		);
  	} else {
  		return (
  		  <div style={{ marginBottom: 20 }}>
    			<button className="button" onClick={this.toggleNewProduct}>
    				Add New Product
    			</button>
    		</div>
  		);
  	}
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AddProductForm);