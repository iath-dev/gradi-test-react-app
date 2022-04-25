import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'

import Product from './components/product/product';
import Spinner from './components/spinner/spinner';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (loading) {
      axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js')
        .then(res => {
          setLoading(false)
          setData(res.data);
        })
    }
  }, [loading])

  return (
    <Box
      // display='flex'
      // alignItems='center'
      // flexDirection='column'
      className='app-container'
    >
      {loading ? (
        <div className='loader'>
          <Spinner />
        </div>
      ) : (
        <Product data={data} />
      )}
    </Box>
  );
}

export default App;
