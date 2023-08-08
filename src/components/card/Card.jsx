import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  return (
    <div className='card'>
      <div className='image'>
        <Link
          to={`/product/${item.id}`}
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src={item.image} alt="" className='mainImg' />
          {item.image2 && showSecondImage && <img src={item.image2} alt="" className='secondImg' />}
        </Link>
      </div>
      <h2>{item.title}</h2>
      <div className='price'>
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </div>
  );
};
