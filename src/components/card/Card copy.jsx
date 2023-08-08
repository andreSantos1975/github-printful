import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';

export const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          <img src={item.image} alt="" className='mainImg' />
          <img src={item.image2} alt="" className='secondImg' />
        </div>
        <h2>{item.title}</h2>
        <div className='price'>
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

