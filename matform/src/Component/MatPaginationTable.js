import React from 'react';  

import { makeStyles } from '@material-ui/core/styles';  

import Paper from '@material-ui/core/Paper';  

import Table from '@material-ui/core/Table';  

import TableBody from '@material-ui/core/TableBody';  

import TableCell from '@material-ui/core/TableCell';  

import TableContainer from '@material-ui/core/TableContainer';  

import TableHead from '@material-ui/core/TableHead';  

import TablePagination from '@material-ui/core/TablePagination';  

import TableRow from '@material-ui/core/TableRow';  

import axios from 'axios';    

import { useState, useEffect } from 'react'   

  
  

const useStyles = makeStyles({  

  root: {  

    width: '100%',  

  },  

  container: {  

    maxHeight: 440,  

  },  

});  

  

export default function MatPaginationTable() {  

  const classes = useStyles();  

  const [page, setPage] = React.useState(0);  

  const [data, setData] = useState([]);   

  const [rowsPerPage, setRowsPerPage] = React.useState(5);  

  useEffect(() => {    

        const GetData = async () => {    

          const result = await axios('https://localhost:5001/api/Product/findall');    

          setData(result.data);    

        }  

        GetData();    

        console.log(data);  
    }, [data]); 



  const handleChangePage = (event, newPage) => {  

    setPage(newPage);  

  };  


  

  const handleChangeRowsPerPage = event => {  

    setRowsPerPage(+event.target.value);  

    setPage(0);  

  };  

  

  return (  

    <Paper className={classes.root}>  

      <TableContainer className={classes.container}>  

        <Table stickyHeader aria-label="sticky table">  

        <TableHead>  

            <TableRow>  

              <TableCell>Id</TableCell>  

              <TableCell align="Left">Name</TableCell>  

              <TableCell align="right">Price</TableCell>  

              <TableCell align="right">Quantity</TableCell>  

              <TableCell align="right">Categoriyid</TableCell>  

              <TableCell align="right">CategoriyName</TableCell>  

               

            </TableRow>  

          </TableHead>  

          <TableBody>  

            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {  

              return (  

           <TableRow >  
                <TableCell component="th" scope="row">  

                  {row.id}  

                </TableCell>  

                <TableCell align="left">{row.name}</TableCell>  

                <TableCell align="right">{row.price}</TableCell>  

                <TableCell align="right">{row.quantity}</TableCell>  

                <TableCell align="right">{row.categoriid}</TableCell>  

                <TableCell align="right">{row.categoryName}</TableCell>  

               
              </TableRow>  

                 

              );  

            })}  

          </TableBody>  

        </Table>  

      </TableContainer>  

      <TablePagination  

        rowsPerPageOptions={[5, 10, 15,50]}  

        component="div"  

        count={data.length}  

        rowsPerPage={rowsPerPage}  
        page={page}  

        onChangePage={handleChangePage}  

        onChangeRowsPerPage={handleChangeRowsPerPage}  

      />  

    </Paper>  

  );  
        }