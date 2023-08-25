import React, { useState } from 'react';
import './Product.scss';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetchs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {

  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()
  const { data, loading } = useFetch(`/products/${id}?populate=*`);
  //console.log('data product???', data);//Retorna todos os produtos do banco de dados do Strapi..........log

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
          <button
            className='add'
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity
                }))}>
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