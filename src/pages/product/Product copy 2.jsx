import React, { useState } from 'react';
import './Product.scss';
import image1 from './image/list3.jpg';
import image2 from './image/list6.jpg';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    image1, image2
  ];



  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImage(1)} />
        </div>
        <div className="manImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span className='price'>$299</span>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>

        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => (prev + 1))}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon />  ADD TO WIST LIST
          </div>
          <div className="item">
            <BalanceIcon />  ADD TO COMPARY
          </div>
        </div>
        <div className="info">
          <span>Vendedor: Polo</span>
          <span>Produto tipo: T-Shist</span>
          <span>Tag: T-Shist homem top</span>
        </div>
         <th />
         <div className="details">
          <span>DETALHES</span>
          <hr />
          <span>INFORMAÇÃO ADICIONAL</span>
          <hr />
          <span>FAQ</span>
         </div>
      </div>
    </div>
  )
}