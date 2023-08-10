import React, { useState } from 'react';
import './Product.scss';
import image1 from './image/list3.jpg';
import image2 from './image/list6.jpg';

export const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
   image1, image2
  ];

 

  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e=> setSelectedImage(1)}/>
        </div>
        <div className="manImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}
