import React from 'react';
import './Products.scss';

export const Products = () => {
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Produdos Categoria</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2}/>
            <label htmlFor='1'>Skirts</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3}/>
            <label htmlFor='1'>Coarts</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filtrar por preço</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={100} />
            <span>100</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Ordenar por</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price'/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price'/>
            <label htmlFor="desc">Price (Hist first)</label>
          </div>
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}
