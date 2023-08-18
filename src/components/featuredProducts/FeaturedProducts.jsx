import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedProducts.scss';
import image1 from '../featuredProducts/image/melzinha5.jpg';
import image2 from '../featuredProducts/image/melzinha10.jpg';
import image3 from '../featuredProducts/image/melzinha6.jpg';
import image4 from '../featuredProducts/image/melzinha8.jpg';
import image5 from '../featuredProducts/image/melzinha9.jpg';
import image16 from '../featuredProducts/image/melzinha16.jpg';

import { Card } from '../card/Card';

export const FeaturedProducts = ({ type }) => {
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
      image: image3,
      image2: image16,
      title: "Jaqueta de couro cor preta",
      isNew: true,
      oldPrice: 435,
      price: 345.90
    },
    {
      id: 3,
      image: image4,
      image2: null,
      title: "Another Product",
      isNew: true,
      oldPrice: 200,
      price: 150.00
    },
    {
      id: 4,
      image: image5,
      image2: null,
      title: "Yet Another Product",
      isNew: true,
      oldPrice: 300,
      price: 250.00
    },
  ];

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(process.env.REACT_APP_API_URL + "/products", {
          headers: {
            Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
          },
        })
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  },[]);

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} coleção</h1>
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
};
