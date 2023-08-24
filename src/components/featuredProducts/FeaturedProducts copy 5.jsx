import React from 'react';
import './FeaturedProducts.scss';

import { Card } from '../card/Card';
import useFetch from '../../hooks/useFetchs';

export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  console.log("data FeaturedProducts", data); //.Log dos produtos..........................................log

  // Filtrar os produtos em destaque
  const featuredProducts = data?.filter(item => item.attributes.type === 'destaque');

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} coleção</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className='botton'>
        {error ? "something went wrong!" : (loading ? "loading..."
          : featuredProducts.map(item => (
              <div key={item.id}>
                <Card item={item} />
              </div>
            ))
        )}
      </div>
    </div>
  );
};
