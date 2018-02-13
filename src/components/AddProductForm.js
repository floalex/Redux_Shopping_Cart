import React, { Component } from "react";
import Form from '../components/Form';

class AddProductForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
      displayed: false,
    };
  }
  
  handleNewProductSubmit = (info) => {
  	this.props.addNewProduct(info); // conect to Redux in container
  	
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

export default AddProductForm;