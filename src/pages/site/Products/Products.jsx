import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';
import Card from '../Card/Card';
import toast, { Toaster } from 'react-hot-toast';
import CircularProgress from '@mui/material/CircularProgress';

const Products = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [favorite, setFavorite] = useState(localStorage.getItem('favorite') ? JSON.parse(localStorage.getItem('favorite')) : []);

  const addtoFav = (id) => {
    let item = data.find((item) => item.id === id);
    let isExit = favorite.some((item) => item.id === id);

    if (!isExit) {
      const updatedFavorites = [...favorite, item];
      setFavorite(updatedFavorites);
      localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
      toast.success('Product added to favorites');
    } else {
      toast.error("Product already in favorites!")
    }
  };

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  const searchProduct = data.filter(product => product.name.toLowerCase().trim()
    .includes(search.toLowerCase().trim()));

  return (
    <>
      <input
        type="text"
        className='input'
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <CircularProgress className="spinner" />
      ) : (
        <div className='cards'>
          {searchProduct.map((item, index) => (
            <Card item={item} key={index} addtoFav={addtoFav} />
          ))}
        </div>
      )}
      <Toaster />
    </>
  );
};

export default Products;
