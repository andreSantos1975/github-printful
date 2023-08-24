import React from 'react';
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({subCats, maxPrice, sort, catId}) => {

 // const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${catId}`);
 const { data, loading, error } = useFetch(`/products?populate=*`);
  console.log("data products", data)//..................................................................log

  return (
    <div className='list'>
      {loading ? "loading..." : data?.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}


export default List;