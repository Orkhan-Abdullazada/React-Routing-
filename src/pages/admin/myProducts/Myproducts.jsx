import React, { useEffect, useState } from 'react';
import './Myproducts.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Myproducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('asc');
  const [search, setSearch] = useState('');

  const deleteHandler = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(() => {
        const updatedData = data.filter(product => product.id !== id);
        setData(updatedData);
        toast.success("Product deleted!");
      })
      .catch(err => {
        console.error('Error deleting product:', err);
        toast.error("Error deleting product");
      });
  };

  const sortData = (type) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const priceA = a.unitPrice;
      const priceB = b.unitPrice;
      return type === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setData(sortedData);
    setSortType(type);
  };

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
        toast.error("Error fetching products");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const searchProducts = data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input
        type="text"
        className='input'
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={"addproducts"}>
        <button className='addBtn'>
          Add Product
        </button>
      </Link>
      <button className='sort' onClick={() => sortData(sortType === 'asc' ? 'desc' : 'asc')}>
        {sortType === 'asc' ? 'Azalan' : 'Artan'}
      </button>

      {loading ? (
        <CircularProgress className="spinner" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {searchProducts.map((product, index) => (
              <Item deleteHandler={deleteHandler} product={product} key={index} />
            ))}
          </tbody>
        </table>
      )}
      <Toaster />
    </>
  );
};

export default Myproducts;
