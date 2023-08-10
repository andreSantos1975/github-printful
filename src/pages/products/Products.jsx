import React, { useState } from 'react';
import './Products.scss';
import image7 from './image/dog7.jpg';
import { List } from '../../components/list/List';
import { useParams } from 'react-router-dom';

export const Products = () => {

  const cardId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Produdos por Categoria</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Camisas</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2}/>
            <label htmlFor='1'>Casacos</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3}/>
            <label htmlFor='1'>Bonés</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filtrar por preço</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onClick={(e) =>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onClick={e =>setSort("asc")}/>
            <label htmlFor="asc">Menor (Preço)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price'  onClick={e =>setSort("desc")}/>
            <label htmlFor="desc">Maior (Preço)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src={image7} alt="" />
        <List cardId={cardId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
