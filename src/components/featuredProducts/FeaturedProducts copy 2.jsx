import React from 'react';
import './FeaturedProducts.scss';
import { Card } from '../card/Card';
import useFetch from '../../hooks/useFetchs';

export const FeaturedProducts = ({ type, printfulData }) => {
  const { data, loading, error } = useFetch(`/products?populate=*`);

  ///console.log('printfulData FeaturedProducts', printfulData);//--------printfulData FeaturedProducts-------log
  // Filtrar os produtos em destaque
  const featuredProducts = printfulData?.result || [];

  // Verificar se featuredProducts não é nulo e se tem a propriedade "sync_variants" que é uma matriz
  if (featuredProducts && Array.isArray(featuredProducts.sync_variants) && featuredProducts.sync_variants.length > 0) {
    // Acesse o primeiro item em sync_variants
    const firstVariant = featuredProducts.sync_variants[0];

    console.log('firstVariant FeaturedProducts', firstVariant);//--------printfulData FeaturedProducts-------log

    return (
      <div className='featuredProducts'>
        <div className='top'>
          <h1>{type} coleção</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
        </div>
        <div className='bottom'>
          {error ? "something went wrong!" : (loading ? "loading..." : <Card item={firstVariant} featuredProducts={featuredProducts} key={firstVariant.id} />)}
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
