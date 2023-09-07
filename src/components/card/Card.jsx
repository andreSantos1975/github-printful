import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

export const Card = ({ item, featuredProducts }) => {
   // Acesse sync_variants e sync_product de featuredProducts
   const syncVariants = featuredProducts.sync_variants || [];
   const syncProduct = featuredProducts.sync_product || {};

   console.log('syncVariants no Card', syncVariants);//--------------------------log
   console.log('syncProduct no Card', syncProduct);//--------------------------log
   
   console.log('syncProduct no Card - Name', featuredProducts.sync_product.name);//--------------------------log
   console.log('syncProduct no Card - Retail Price', item.retail_price);//--------------------------log


  return (
    <div className='card'>
      <div className='image'>
        {item?.isNew && <span>Nova coleção</span>}
        <Link to={`/product/${item.id}`}>
          <img src={featuredProducts.sync_product.thumbnail_url} alt="" className='mainImg' />
        </Link>
      </div>
      <h2>{item.name}</h2> {/* Acessando o nome do produto */}
      <div className='price'>
        <h3>R${item.retail_price}</h3> {/* Acessando o preço do produto */}
      </div>
    </div>
  );
};