import React from 'react';
import './List.scss';

import image1 from './image/melzinha5.jpg';
import image2 from './image/melzinha10.jpg';
import image3 from './image/melzinha6.jpg';
import image4 from './image/melzinha8.jpg';
import image5 from './image/melzinha9.jpg';
import image6 from './image/melzinha16.jpg';
import image16 from './image/melzinha9.jpg';

import { Card } from '../card/Card';

export const List = () => {

    const data = [
        {
          id: 1,
          image: image1,
          image2: image2,
          title: "Moleton com capuz cor verde",
          isNew: true,
          oldPrice: 435,
          price: 345.90
        },
        {
          id: 2,
          image: image2,
          image2: image16,
          title: "Jaqueta de couro cor preta",
          isNew: true,
          oldPrice: 435,
          price: 345.90
        },
        {
          id: 3,
          image: image3,
          image2: image2,
          title: "Another Product",
          isNew: true,
          oldPrice: 200,
          price: 150.00
        },
        {
          id: 4,
          image: image4,
          image2: null,
          title: "Yet Another Product",
          isNew: true,
          oldPrice: 300,
          price: 250.60
        },
        {
            id: 5,
            image: image5,
            image2: null,
            title: "Yet Another Product",
            isNew: true,
            oldPrice: 300,
            price: 250.60
          },
          {
            id: 6,
            image: image6,
            image2: null,
            title: "Yet Another Product",
            isNew: true,
            oldPrice: 300,
            price: 250.60
          },
      ];
    
  return (
    <div className='list'>{data?.map(item => (
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}
