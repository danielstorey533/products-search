import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

import ProductsTable from './ProductsTable.jsx';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const parse = d => {
    d.additional_image_link = d.additional_image_link.split(',');
    return d;
  };

  useEffect(async () => {
    await loadProducts();
  }, []);


  const loadProducts = () => {
    d3.csv('./data/products.csv', parse).then((data) => {
      setProducts(data); 
      setFilteredProducts(data)})
  }


  return (
      <div id="container">
        <ProductsTable products={filteredProducts.splice(0, 100)}/>
      </div>
  );
}

export default App;
