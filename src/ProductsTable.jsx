import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="right">{row.gtin}</TableCell>
          <TableCell align="right">{row.gender}</TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.sale_price}</TableCell>
          <TableCell align="right"><img height = "200" src={row.image_link}></img></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    {row.additional_image_link ? row.additional_image_link.map((imageRow) => (
                      <img height = "200" src={imageRow}></img>
                    )) : null}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  } 

export default function ProductsTable(props) {
  console.log(props);
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Title</TableCell>
              <TableCell align="right">GTIN</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Sale Price</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.products.map((product) => (
              <Row key={product.gtin} row={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  
