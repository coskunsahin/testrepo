import React,{Component}  from 'react'  

import Table from '@material-ui/core/Table';  

import TableBody from '@material-ui/core/TableBody';  

import TableCell from '@material-ui/core/TableCell';  

import TableContainer from '@material-ui/core/TableContainer';  

import TableHead from '@material-ui/core/TableHead';  

import TableRow from '@material-ui/core/TableRow';  

import Paper from '@material-ui/core/Paper';  

import axios from 'axios';  

export class MatTable extends Component {  
    
      constructor(props) {  
    
        super(props)  
    
        this.state = {  
    
          ProductData: []  
    
      
    
        }  
    
      }  
    
      componentDidMount() {  
    
        axios.get('https://localhost:5001/api/Product/findall').then(response => {  
    
          console.log(response.data);  
    
          this.setState({  
    
            ProductData: response.data  
    
          });  
    
        });  
    
      }  
    
      render() {  
    
        console.log(this.state.ProductData);  
    
        return (  
    
          <TableContainer component={Paper}>  
    
            <Table stickyHeader  aria-label="sticky table">  
    
              <TableHead>  
    
                <TableRow>  
    
                  <TableCell>Id</TableCell>  
    
                  <TableCell align="center">Name</TableCell>  
    
                  <TableCell align="right">Price</TableCell>  
    
                  <TableCell align="right">quantity</TableCell>  
    
                  <TableCell align="right">categoriid"</TableCell>  
    
    
    
                  <TableCell style={{paddingRight:"60px"}} align="right" >categoryName</TableCell>  
    
                </TableRow>  
    
              </TableHead>  
    
              <TableBody>  
    
                {  
    
                  this.state.ProductData.map((p, index) => {  
    
                    return <TableRow key={index}>  
    
                      <TableCell component="th" scope="row">  
    
                        {p.id}  
    
                      </TableCell>  
    
                      <TableCell align="center">{p.name}</TableCell>  
    
                      <TableCell align="right">{p.price}</TableCell>  
    
                      <TableCell align="right">{p.quantity}</TableCell>  
    
                      <TableCell align="right">{p.categoriid}</TableCell>  
    
                    
    
                      <TableCell style={{paddingRight:"114px"}} align="right">{p.categoryName}</TableCell>  
    
                    </TableRow>  
    
                  })  
    
                }  
    
              </TableBody>  
    
            </Table>  
    
          </TableContainer>  
    
        );  
    
      }  
    
    }  

      
    
    export default MatTable 