import React, { useState, useEffect } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss';

import image1 from '../slider/image/dog1.jpg'
import image2 from '../slider/image/dog2.jpg'
import image3 from '../slider/image/dog3.jpg'

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [image1, image2, image3];
  const totalSlides = data.length;
  const slideInterval = 5000; // Defina o intervalo de tempo em milissegundos (5 segundos neste exemplo)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    // Função para avançar automaticamente para o próximo slide após o intervalo definido
    const nextSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);

    // Limpe o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => {
      clearInterval(nextSlideInterval);
    };
  }, [totalSlides, slideInterval]);

  return (
    <div className='slider'>
      <div className='container' style={{
        transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
        width: `${totalSlides * 100}%`
      }}>
        {data.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Slide ${index}`}
            style={{ maxWidth: `${100 / totalSlides}%`, height: 'auto' }}
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
