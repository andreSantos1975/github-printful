// Banner.js
import React from 'react';
import './Banner.scss';

import image1 from './imgBanner/melzinha18.jpg';

const Banner = () => {

    const data = [
        image1
      ];

  return (
    <div className="banner">
    
      <img src={image1} alt="Banner" />
    </div>
  );
};

export default Banner;