import React from 'react';
import './FeaturedProducts.scss';
import { Card } from '../card/Card';
import useFetch from '../../hooks/useFetchs';

export const FeaturedProducts = ({ type, printfulData }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  console.log('printfulData FeaturedProducts', printfulData);//--------printfulData FeaturedProducts-------log

  if (printfulData && Array.isArray(printfulData)) {
    // Mapear os dados e acessar a propriedade "result" de cada elemento
    const featuredProducts = printfulData.map(item => item.result);

    console.log('FeaturedProducts featuredProducts', featuredProducts); // Log dos produtos em destaque
    console.log(featuredProducts);//--------printfulData FeaturedProducts-------log

    return (
      <div className='featuredProducts'>
        <div className='top'>
          <h1>{type} coleção</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
        </div>
        <div className='bottom'>
          {error ? "something went wrong!" : (loading ? "loading..." : <Card featuredProducts={featuredProducts} />)}
        </div>
      </div>
    );
  } else {
    // Lidar com o caso em que featuredProducts.sync_variants não é uma matriz ou está vazio
    return (
      <div className='featuredProducts'>
        <div className='top'>
          <h1>{type} coleção</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
        </div>
        <div className='bottom'>
          {error ? "something went wrong!" : (loading ? "loading..." : "No sync_variants data")}
        </div>
      </div>
    );
  }
};
