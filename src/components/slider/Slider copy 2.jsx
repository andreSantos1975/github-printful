import React, { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss';

import image1 from '../slider/image/dog1.jpg'
import image2 from '../slider/image/dog2.jpg'
import image3 from '../slider/image/dog3.jpg'





export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const data = [
      image1, image2, image3
    ];
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };
  
    return (
      <div className='slider'>
        <div className='container' style={{
          transform: `translateX(-${currentSlide * (100 / data.length)}%)`,
          width: `${data.length * 100}%`
        }}>
          {data.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Slide ${index}`}
              style={{ maxWidth: `${100 / data.length}%`, height: 'auto' }}
            />
          ))}
        </div>
  
        <div className='icons'>
          <div className='icon' onClick={prevSlide}>
            <WestOutlinedIcon />
          </div>
          <div className='icon' onClick={nextSlide}>
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    );
  };
  