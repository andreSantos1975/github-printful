import React from 'react';
import './FeaturedProducts.scss';
//import PrintfulTest from '../../printfulTest';

import { Card } from '../card/Card';
import useFetch from '../../hooks/useFetchs';

export const FeaturedProducts = ({ type, printfulData }) => {

const { data, loading, error } = useFetch(`/products?populate=*`);

 /// Filtrar os produtos em destaque
 const featuredProducts = printfulData?.result || [];

  console.log("data FeaturedProducts", featuredProducts)//........................................................log

return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} coleção</h1>
        <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className='botton'>
        {error ? "something went wrong!" : (loading ? "loading..."
          : featuredProducts?.map(item =>
            <Card item={item} key={item.id} />
          ))}
      </div>

    </div>
  )
};
