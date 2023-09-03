import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';



export const Card = ({ item }) => {

  console.log('Hello World Card');

  const [showSecondImage, setShowSecondImage] = useState(false);

   console.log("Card está sendo renderizado");

  return (
    <div className='card'>
      <div className='image'>
        {item?.isNew && <span>Nova coleção</span>}
        <Link
          to={`/product/${item.id}`}
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src={item.thumbnail_url} alt="" className='mainImg' />
          {item?.img2 && showSecondImage && <img src={item.img2.thumbnail_url} alt="" className='secondImg' />}
        </Link>
      </div>
      <h2>{item.name}</h2>
      <div className='price'>
        <h3>R${item.oldPrice || item?.price + 20}</h3>
        <h3>R${item?.price}</h3>
      </div>
    </div>
  );
};
