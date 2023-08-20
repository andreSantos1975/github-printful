import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedProducts.scss';


import { Card } from '../card/Card';

export const FeaturedProducts = ({ type }) => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filter][type][$eq]=${type}`, {
          headers: {
            Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
          },
        })
        setData(res.data.data)
     
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, []);

  //console.log('DATA FATURE', data)

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
