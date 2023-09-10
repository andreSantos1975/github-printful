import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ featuredProducts }) => {

  return (
    <div className='card'>
      {featuredProducts.map((product, index) => (
        <div key={index} className='product'>
          <div className='image'>
            <Link to={`/product/${product.sync_product.id}`}>
              <img src={product.sync_product.thumbnail_url} alt="" className='mainImg' />
            </Link>
          </div>
          <h2>{product.sync_product.name}</h2>
          <div className='price'>
            <h3>R${product.sync_variants[0].retail_price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
