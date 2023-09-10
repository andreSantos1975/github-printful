import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item, featuredProducts }) => {
  // Acesse sync_variants e sync_product de featuredProducts
  const syncVariants = featuredProducts[0].sync_variants || [];
  const syncProduct = featuredProducts[0].sync_product || {};
  const syncProduct2 = featuredProducts[1].sync_product || {};




  console.log('syncProduct no Card', syncProduct);//--------------------------log
  console.log('syncProduct2 no Card', syncProduct2);//--------------------------log




  return (
    <div className='card'>
      <div className='image'>
        <Link to=''>
          <img src={syncProduct.thumbnail_url} alt="" className='mainImg' />
        </Link>

      </div>
      <h2>{syncProduct.name}</h2>
      <div className='price'>
        <h3>R${syncVariants[0].retail_price}</h3>
      </div>
    </div>
  );
};