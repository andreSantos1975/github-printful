import React from 'react';
import './FeaturedProducts.scss';
import image1 from '../featuredProducts/image/melzinha6.jpg';
import image2 from '../featuredProducts/image/melzinha9.jpg';
import image3 from '../featuredProducts/image/melzinha5.jpg';
import image4 from '../featuredProducts/image/melzinha8.jpg';

import { Card } from '../card/Card';


export const FeaturedProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      image1: image1,
      title: "Jaqueta de couro cor preta",
      isNew: true,
      oldPrice: 435,
      price: 345.90
    },

    {
      id: 2,
      image2: image2,
      title: "Jaqueta de couro cor preta",
      isNew: true,
      oldPrice: 435,
      price: 345.90
    },

    {
      id: 3,
      image3: image3,
      title: "Jaqueta de couro cor vermelha",
      isNew: true,
      oldPrice: 435,
      price: 345.90
    },

    {
      id: 4,
      image4: image4,
      title: "Jaqueta de couro cor preta",
      isNew: true,
      oldPrice: 435,
      price: 345.90
    },

  ]

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type}Produtos</h1>
        <p>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className='botton'>
        {data.map(item =>
          <Card item={item} key={item.id} />
        )}
      </div>
    </div>
  )
}
