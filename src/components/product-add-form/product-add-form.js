// import './product-add-form.css';
import './product-add-form.scss';
import { Component } from 'react';

class ProductAddForm extends Component {
  state = {
    name: '',
    sale: '',
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
  };

  static onLog = () => {
    console.log('onLog');
  };

  render() {
    const { name, sale } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new product</h3>
        <form className="add-form d-flex" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            name="name"
            placeholder="name"
            value={name}
            minLength={3}
            required
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            name="sale"
            placeholder="sale"
            value={sale}
            required
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

ProductAddForm.onLog();

export default ProductAddForm;
