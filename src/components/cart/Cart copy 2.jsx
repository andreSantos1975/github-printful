import React from 'react';

import './Cart.scss';

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';

export const Cart = () => {

   const products = useSelector(state=>state.cart.products)
    return (
        <div className='cart'>
            <h1>Produtos no seu Carrinho</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.image} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">1 x R${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>R$ 1.239,89</span>
            </div>
            <button>PROCESSO DO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}
