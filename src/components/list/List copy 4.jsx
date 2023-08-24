import React from 'react';
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({ subCats, maxPrice, sort, catId }) => {

  const { data, loading, error } = useFetch(`/products?populate=*`);

  console.log('data',data)

  // Filtrar produtos com base nos critérios selecionados
  const filteredProducts = data?.filter(item => {
    const meetsPriceCondition = item.attributes.price <= maxPrice;
    const meetsSubCategoryCondition = subCats.length === 0 || subCats.includes(item.attributes.women); // Substitua 'subCategoryId' pelo nome correto da propriedade
    return meetsPriceCondition && meetsSubCategoryCondition;
  });

  return (
    <div className='list'>
      {loading ? "loading..." : filteredProducts?.map(item => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List;
