import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import './EditProducts.css'
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import CircularProgress from '@mui/material/CircularProgress';

const EditProducts = () => {
  const [loading, setLoading] = useState(true); 
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  
  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: "",
    },
    onSubmit: (values) => {
      axios
        .put(`https://northwind.vercel.app/api/products/${data.id}`, {
          ...values,
        })
        .then((res) => {
          toast.success("Item added");
          console.log(res);
        });
    },
  });

  return (
    <>
      {loading ? (
        <CircularProgress className="spinner" />
      ) : (
        <form className="edit_product_form" onSubmit={formik.handleSubmit}>
          <label className="nameLabel" htmlFor="name">Name:</label> <br/>
          <input
            className="name"
            id="name"
            name="name"
            type="text"
            placeholder="change name"
            onChange={formik.handleChange}
            value={formik.values.name} 
          /><br/>
          <label className="nameLabel" htmlFor="unitPrice">Price:</label> <br/>
          <input
            className="price"
            id="unitPrice"
            name="unitPrice"
            placeholder="change price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.unitPrice}
          /> <br/>
          <button className="changeBtn" type="submit">Change</button>
        </form>
      )}
      <Toaster/>
    </>
  );
};

export default EditProducts;
