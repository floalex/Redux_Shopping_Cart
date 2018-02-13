import { connect } from 'react-redux';
import AddProductForm from '../components/AddProductForm';
import { addNewProduct } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addNewProduct: info => dispatch(addNewProduct(info))
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AddProductForm);