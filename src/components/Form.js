import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
      fields: {
      	title: this.props.title || "",
      	price: this.props.price || "",
      	quantity: this.props.quantity || ""
      }
    };
  }
  
  updateFields = (e) => {
  	const updatedInfo = Object.assign({}, this.state.fields);
  	updatedInfo[e.target.name] = e.target.value;
  	this.setState({
  		fields: updatedInfo,
		});
  }
  
  handleSubmit = (e) => {
  	e.preventDefault();
    this.props.onSubmit(this.state.fields);
  }
  
  render() {
  	return (
  		<div>
	  		<h3>{this.props.header}</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>
						<input type="text"
									 name="title"
									 id="title"
									 value={this.state.fields.title}
									 onChange={this.updateFields}
						/>
					</div>
					<div>
						<label>Price</label>
						<input type="text"
									 name="price"
									 id="price"
									 value={this.state.fields.price}
									 onChange={this.updateFields}
						/>
					</div>
					<div>
						<label>Quantity</label>
						<input type="text"
									 name="quantity"
									 id="quantity"
									 value={this.state.fields.quantity}
									 onChange={this.updateFields}
						/>
					</div>
					<input type="submit" value="Submit"/>
					<button style={{ marginLeft: 5 }} onClick={this.props.onCancel}>Cancel</button>
				</form>
			</div>
		);
  }
}

export default Form;