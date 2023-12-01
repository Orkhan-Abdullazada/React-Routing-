import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item,addtoFav }) => {


  return (
    <div id='card' className="card">
      <img className="card-img-top" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg" alt="Card image cap" />
      <div className="card-body">
        <Link to={`/${item.id}`} className="card-title">
          <h5>{item.name}</h5>
        </Link>
        <p className="card-text">{item.unitPrice} Azn</p>
        <button id='addFav' onClick={(e) => addtoFav(item.id)} className='addFav'>Add To Favorites</button>
      </div>
    </div>
  );
};

export default Card;
