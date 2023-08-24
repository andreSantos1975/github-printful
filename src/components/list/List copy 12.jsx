import React, { useEffect, useState } from 'react';  // Adicionei useState
import './List.scss';
import useFetch from '../../hooks/useFetchs';

import { Card } from '../card/Card';

export const List = ({ subCats, maxPrice, sort, catId }) => {
  const [apiUrl, setApiUrl] = useState('');  // Estado para armazenar a URL da API
  const { data, loading, error } = useFetch(apiUrl);  // Use a URL da API do estado

  useEffect(() => {
    // Atualize a URL da API com os parâmetros atualizados
    const newUrl = `/products?populate=*&[filters][destaque][id]=${catId}${subCats
      .map(item => `&[filters][sub_categories][id][$eq]=${item}`)
      .join('')}&[filters][price][$lte]=${maxPrice}&sort=price:${sort || 'id:asc'}`;
    setApiUrl(newUrl);  // Atualize o estado com a nova URL da API
  }, [subCats, maxPrice, sort, catId]);

  console.log("Listar subcategories", data); //.......................................log

  return (
    <div className='list'>
      {loading ? 'loading...' : data?.map(item => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
