import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  //console.log('DATA CARD', item)//.............................................log

  // Extrair as URLs das imagens do objeto item
  const mainImageUrl = process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url;
  const secondImageUrl = item.attributes?.img2 ? process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url : null;

  return (
    <div className='card'>
      <div className='image'>
        {item?.attributes.isNew && <span>Nova coleção</span>}
        <Link
          to={`/product/${item.id}`}
          onMouseEnter={() => setShowSecondImage(true)}
          onMouseLeave={() => setShowSecondImage(false)}
        >
          <img src={mainImageUrl} alt="" className='mainImg' />
          {secondImageUrl && showSecondImage && <img src={secondImageUrl} alt="" className='secondImg' />}
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
