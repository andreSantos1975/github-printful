import React from 'react';
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({subCats, maxPrice, sort, catId}) => {

  console.log('Goeia', catId);//----------------------------------------log

  const {data, loading, error} = useFetch( `/products?populate=*&[filters][destaque][id]=${catId}${subCats.map(
    item =>`&[filters][sub_categories][id][$eq]=${item}`
    )}}&[filters][price][$lte]=${maxPrice}`
    );
    console.log("Listar subcategories", data)//.......................................log

  return (
    <div className='list'>
      {loading ? "loading..." : data?.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}


export default List;