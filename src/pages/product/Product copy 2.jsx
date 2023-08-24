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
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImage(data?.attributes?.img?.data?.attributes?.url)} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImage(data?.attributes?.img2?.data?.attributes?.url)} />

        </div>
        <div className="manImg">
          <img src={data?.attributes[selectedImage].data?.attributes?.url} alt="" />
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
        </div></>)}
    </div>
  )
}