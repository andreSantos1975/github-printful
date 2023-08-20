import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  console.log('DATA CARD', item)

  //O Outro Título Do Card HomePage Esta Sendo Passado No Home
  return (
    <div className='card'>
      <div className='image'>
        {item?.attributes.isNew && <span>Nova coleção</span>}
        <Link
          to={`/product/${item.id}`}
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
           <img src={img} alt="" className='mainImg' />
          {img2 && showSecondImage && <img src={img2} alt="" className='secondImg' />}
        </Link>
      </div>
      <h2>{item?.attributes.title}</h2>
      <div className='price'>
        <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
        <h3>${item?.attributes.price}</h3>
      </div>
    </div>
  );
};