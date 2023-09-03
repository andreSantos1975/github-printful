import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  console.log('Item no componente Card:', item); // ITEM NO COMPONENTE CARD-------------- log

  return (
    <div className='card'>
      <div className='image'>
        {item?.attributes.isNew && <span>Nova coleção</span>}
        <Link
          to={`/product/${item.id}`}
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src={item.thumbnail_url} alt="" className='mainImg' />
          {item.attributes?.img2 && showSecondImage && <img src={item.attributes.img2.thumbnail_url} alt="" className='secondImg' />}
        </Link>
      </div>
      <h2>{item.attributes?.title}</h2>
      <div className='price'>
        <h3>R${item.oldPrice || item.attributes?.price + 20}</h3>
        <h3>R${item.attributes?.price}</h3>
      </div>
    </div>
  );
};
