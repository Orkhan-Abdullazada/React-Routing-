import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './ProductsDetail.css'

const ProductsDetail = () => {
  const {id} = useParams()
const[item,setItem]=useState({})
useEffect(()=>{
  axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res=>{
    setItem(res.data)
  })
},[])
  return (
    <div className='detail'>
      <img src="https://ozmo.com.tr/wp-content/custom_uploads/paylasimci-ozmo.png" alt="" />
      <div className='detail-text'> 
        <h5>{item.name}</h5>
        <p><b>Price : </b> {item.unitPrice} Azn</p>
        <p><b>Description : </b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, labore nihil voluptates corporis corrupti veritatis, consectetur sunt reprehenderit natus atque et? Quasi, asperiores! Repellat libero rerum neque nisi debitis expedita, et ipsam excepturi nulla officia suscipit ullam, iure maiores deleniti veritatis quam distinctio. Hic quo quis expedita amet ad voluptatum.</p>
        
        </div> 
      </div>
  )
}

export default ProductsDetail