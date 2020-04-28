import React, { Component } from 'react'  
import paginationFactory from 'react-bootstrap-table2-paginator';
import CaptionElement from 'react-caption';
import BootstrapTable from 'react-bootstrap-table-next';  

import axios from 'axios';  

export class Bootstraptab extends Component {  


  
        state = {  
          
                products: [],  
                columns: [{  

                  dataField: 'id',  
                  text: 'Id'  

                },  

                {  

                  dataField: 'name',  

                  text: 'Name',  

                 sort:true  

                }, {  

                  dataField: 'price',  

                  text: 'Price',  

                  sort: true  

                },  

                {  

                        dataField: 'quantity',  

                        text: 'Quantity',  

                        sort: true  

                      },  

                      {  

                        dataField: 'categoriid',  

                        text: 'CategoriId',  

                        sort: true  

                      },  

                      {  

                        dataField: 'categoryName',  

                        text: 'CategoryName',  

                        sort: true  

                      },  

                     ]  



                     
              } 
 

              componentDidMount() {    

                axios.get('https://localhost:5001/api/Product/findall').then(response => {    

                  console.log(response.data);    

                  this.setState({    

                        products: response.data    

                  });    

                });    

              }   

        render() {  

                return (  

                        



                          

                        <div  style={{ marginTop: 20 }}>  

                        const CaptionElement = () => <h3 style={{ borderBlockStartStyle: '2em', textAlign: 'center', color: 'black', border: '1px solid purple', padding: '0.5em' }}>stok list</h3>;


                        <BootstrapTable   

                        striped  

                        hover  

                        keyField='id'   
                        data={ this.state.products }   
                        columns={ this.state.columns }
                        pagination={ paginationFactory() } 
                        caption={<CaptionElement />} />  
 
 
                      </div>  

                      

                )  

        }  
      
}  

  
export default Bootstraptab 