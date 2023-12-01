import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import './AddProducts.css'
import toast, { Toaster } from 'react-hot-toast'
import CircularProgress from '@mui/material/CircularProgress';

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      unitPrice: ''
    },
    onSubmit: values => {
      if (!values.name || !values.unitPrice) {
        toast.error('Please fill out all fields.');
        return;
      }

      setLoading(true);  

      axios.post('https://northwind.vercel.app/api/products', { ...values })
        .then(res => {
          console.log(res);
          toast.success('Product added successfully!');
        })
        .catch(error => {
          console.error(error);
          toast.error('An error occurred while adding the product.');
        })
        .finally(() => {
          setLoading(false);  
        });
    }
  });

  return (
    <div className="form-container">
      {loading ? (
        <CircularProgress className="spinner" />
      ) : (
        <form className='form-add' onSubmit={formik.handleSubmit}>
          <label className='name' htmlFor="name">Name</label> <br />
          <input
            placeholder='Add name'
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          /> <br />

          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}

          <label className='price' htmlFor="unitPrice">Price</label> <br />
          <input
            placeholder='Add price'
            id="unitPrice"
            name="unitPrice"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
            onBlur={formik.handleBlur}
          /> <br />

          {formik.touched.unitPrice && formik.errors.unitPrice ? (
            <div className="error-message">{formik.errors.unitPrice}</div>
          ) : null}

          <button className='submitBtn' type="submit">Submit</button>
          <Toaster />
        </form>
      )}
    </div>
  );
};

export default AddProducts;
