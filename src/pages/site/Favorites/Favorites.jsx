import React, { useState, useEffect } from 'react';
import './Favorites.css'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
  );

  const handleDelete = (id) => {
    
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorite', JSON.stringify(updatedFavorites));
  
  };

  const handleClearAll = () => {

    setFavorites([]);
    localStorage.removeItem('favorite');
    
  };

  return (
    <>
    <button onClick={handleClearAll} className='clearAllBtn'>Clear All</button>
      <div className='cards'>
        {favorites.map((item) => (
          <div id='card' className="card" key={item.id}>
            <img className="card-img-top" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg" alt="Card image cap" />
            <div className="card-body">
              <Link to={`/${item.id}`} className="card-title">
                <h5>{item.name}</h5>
              </Link>
              <p className="card-text">{item.unitPrice} Azn</p>
              <button onClick={() => handleDelete(item.id)} className='favdeleteBtn'>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Favorites;
