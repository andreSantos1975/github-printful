import React from 'react';
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({subCats, maxPrice, sort, catId}) => {

  // Verifique se sort é nulo ou indefinido, e defina como uma string vazia se for
  const sortParam = sort ? `&sort=price:${sort}` : '';

  const {data, loading, error} = useFetch( `/products?populate=*&[filters][destaque][id]=${catId}${subCats.map(
    item =>`&[filters][sub_categories][id][$eq]=${item}`
  )}}&[filters][price][$lte]=${maxPrice}${sortParam}`
  );
    
  //console.log("Listar subcategories", data)//....Obtém os dados do banco de dados Strapi.................log

  return (
    <div className='list'>
      {loading ? "loading..." : data?.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List;
