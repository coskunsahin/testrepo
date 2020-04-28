import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products: {}
    };
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Product/Update'+this.props.match.params.id)
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.productss);
      });
  }

  onChange = (e) => {
    const state = this.state.products
    state[e.target.name] = e.target.value;
    this.setState({products:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, quantity, price, categoriid, categoriname} = this.state.products;

    axios.put('http://localhost:65388/api/products/?id='+this.props.match.params.id, {  name, quantity, price, categoriid, categoriname })
      .then((result) => {
        this.props.history.push("/Show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT productss
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.products.id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> products List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label >name:</label>
                <input type="text" className="form-control" name="name" value={this.state.products.name} onChange={this.onChange} placeholder="name" />
              </div>
              <div className="form-group">
                <label >quantity:</label>
                <input type="text" className="form-control" name="quantity" value={this.state.products.quantity} onChange={this.onChange} placeholder="quantity" />
              </div>
              <div className="form-group">
                <label >price:</label>
                <input type="text" className="form-control" name="price" value={this.state.products.price} onChange={this.onChange} placeholder="price" />
              </div>
              <div className="form-group">
                <label >categoriid:</label>
                <input type="text" className="form-control" name="categoriid" value={this.state.products.categoriid} onChange={this.onChange} placeholder="categoriid" />
              </div>
              <div className="form-group">
                <label >categoriname:</label>
                <input type="text" className="form-control" name="categoriname" value={this.state.products.categoriname} onChange={this.onChange} placeholder="categoriname" />
              </div>
         
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;