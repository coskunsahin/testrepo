import React, { Component } from 'react';
 
import Create from './components/Create';

import axios from 'axios';

import './App.css';
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        product1: []

       
      };
    }
    
  
    componentDidMount() {
      axios.get('https://localhost:5001/api/Product/findall')
        .then(res => {
          this.setState({ products: res.data });
          console.log(this.state.product1);
        });
    
    const useSortableData = (items, config = null) => {
      const [sortConfig, setSortConfig] = React.useState(config);
    
      const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableItems;
      }, [items, sortConfig]);
    
      const requestSort = (key) => {
        let direction = 'ascending';
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.direction === 'ascending'
        ) {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
    
      return { items: sortedItems, requestSort, sortConfig };
    };
    
    const ProductTable = (props) => {
      const { items, requestSort, sortConfig } = useSortableData(props.products);
      const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
      };

    }
    return (
      <table>
        <caption>Products</caption>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('name')}
                className={getClassNamesFor('name')}
              >
                Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('price')}
                className={getClassNamesFor('price')}
              >
                Price
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('stock')}
                className={getClassNamesFor('stock')}
              >
                In Stock
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  };
  

}