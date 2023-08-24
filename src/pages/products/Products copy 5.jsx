import React, { useState } from 'react';
import './Products.scss';
import image7 from './image/dog7.jpg';
import List from '../../components/list/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetchs';

export const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`/sub-categories?[filters][destaque][id][$eq]=${catId}`);
  console.log("data products categoria", data)//..................................................................log
  console.log("data products categoria catId", catId)//..................................................................log

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter(item => item !== value)
    );
  }


  console.log("SELECTED-SUB-CATEGORIA", selectedSubCats);//......................................log
  
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Produdos por Categoria</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filtrar por preço</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onClick={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onClick={e => setSort("asc")} />
            <label htmlFor="asc">Menor (Preço)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onClick={e => setSort("desc")} />
            <label htmlFor="desc">Maior (Preço)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src={image7} alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}
