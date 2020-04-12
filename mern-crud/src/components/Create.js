import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

 

 export class Create extends Component {
    constructor() {
    super();
    this.state = {
     
      name: '',
      quantity: '',
      price:'',
      categoriid: '',
      categoryName: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  name, quantity,price, categoriid,categoryName} = this.state;

    axios.post('https://localhost:5001/api/Product/CreateMaster', {name, quantity,price, categoriid,categoryName
 })
 .then(res => {
  console.log(res);
  console.log(res.data);
})
}
  render(){
    const { name, quantity, price, categoriid,categoryName } = this.state;
    return(
        <div>
        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Product List</Link></h4>
        <form onSubmit={this.onSubmit}>

     
<label>Name:
  
<input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />

</label>
<label>quantity:
<input type="text" className="form-control" name="quantity" value={quantity} onChange={this.onChange} placeholder="quantity" />

</label>
<label>Price:
<input type="text" className="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />

  </label>
  <label>Categori Id:
  <input type="text" className="form-control" name="categoriid" value={categoriid} onChange={this.onChange} placeholder="Categori Id" />
  </label>
  <label>Categori Name:
  <input type="text" className="form-control" name="categoriname" value={categoryName} onChange={this.onChange} placeholder="Categori Name" />
  </label>

 
  <button type="submit" className="btn btn-default"color="primary">Submit</button>
  </form>
    </div>
)

}
}

export default Create;