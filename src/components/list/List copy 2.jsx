import React from 'react';
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({subCats, maxPrice, sort, catId}) => {

  const { data, loading, error } = useFetch(
    `/sub-categories?id_in=${subCats.join(',')}`
  );
    
  console.log("Listar subcategories", data)//...........................................log

  return (
    <div className='list'>
      {loading ? "loading..." : data?.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}


export default List;