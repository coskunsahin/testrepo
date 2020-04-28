import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }

  componentDidMount() {
    axios.get('https://localhost:5001/api/Product/Find/'+this.props.match.params.id)
      .then(res => {
        this.setState({products: res.data });
        console.log(this.state.products);
      });
  }

  delete(id){
    console.log(id);
    axios.get('https://localhost:5001/api/Product/delete/' +id)
    .then((result) => {
      this.props.history.push("/")
    });
}

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.state.products.id}
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Products List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.products.name}</dd>
              <dt>quantity:</dt>
              <dd>{this.state.products.quantity}</dd>
              <dt>price:</dt>
              <dd>{this.state.products.price}</dd>
              <dt>categoriid:</dt>
              <dd>{this.state.products.categoriid}</dd>
              <dt>categoriname:</dt>
              <dd>{this.state.products.categoriname}</dd>
            </dl>
            <Link to={`/edit/${this.state.products.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.products.id)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;