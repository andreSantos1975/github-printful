import React from 'react';
import './Banner.scss';

import image1 from './imgBanner/melzinha18.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={image1}
        alt="Banner"
        style={{ maxWidth: '1348px', height: '380px' }}
      />
    </div>
  );
};

export default Banner;
