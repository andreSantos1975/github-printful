import React from 'react';
import './FeaturedProducts.scss';

import { Card } from '../card/Card';
import useFetch from '../../hooks/useFetchs';

export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  console.log("data FeaturedProducts", data)//........................................................log

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} coleção</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className='botton'>
        {error ? "something went wrong!" : (loading ? "loading..."
          : data?.map(item => {
            console.log("Price:", item.attributes.price);
            console.log("Type:", item.attributes.type);

            return <Card item={item} key={item.id} />;
          }))
        }
      </div>
    </div>
  );
};
