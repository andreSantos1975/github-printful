import React, { useState } from 'react';
import './Product.scss';
//import image1 from './image/list3.jpg';
//import image2 from './image/list6.jpg';


import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetchs';

export const Product = () => {

  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log('data product???', data);//.........................................................

  return (

    <div className='product'>
      {loading ? "loading..." : (<><div className='left'>
        <div className="images">
          <img
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
            alt=""
            onClick={() => setSelectedImage("img")}
          />
          <img
            src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
            alt=""
            onClick={() => setSelectedImage("img2")}
          />
        </div>
        <div className="manImg">
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImage].data?.attributes?.url} alt="" />

        </div>
      </div>
        <div className='right'>
          <h1>{data?.attributes?.title}</h1>
          <span className='price'>{data?.attributes?.price}</span>
          <p>{data?.attributes?.desc}</p>

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
        </div></>)}
    </div>
  )
}