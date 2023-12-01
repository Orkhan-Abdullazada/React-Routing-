import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({product, deleteHandler}) => {
  return (
    <tr>
    <th scope='row'>{product.id}</th>
    <td>{product.name}</td>
    <td>{product.unitPrice} Azn</td>
    <td><Link to={`editproducts/${product.id}`}><button className='edit'>Edit</button></Link></td>
    <td><button className='delete'onClick={()=>{deleteHandler(product.id)}}>Delete</button></td>
  </tr>
  )
}

export default Item