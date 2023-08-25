import React from 'react';
import image1 from './image/list4.jpg';
import image2 from './image/list5.jpg';
import image16 from './image/list2.jpg';
import './Cart.scss';

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Cart = () => {

    const data = [
        {
            id: 1,
            image: image1,
            title: "Moleton com capuz cor verde",
            desc: "Camiseta cavada da cor preta",
            isNew: true,
            oldPrice: 435,
            price: 345.90
        },
        {
            id: 2,
            image: image2,
            title: "Moleton com capuz cor verde",
            desc: "Camiseta cavada da cor preta",
            isNew: true,
            oldPrice: 835,
            price: 745.90
        },
        {
            id: 3,
            image: image16,
            title: "Moleton com capuz cor verde",
            desc: "Camiseta cavada da cor preta",
            isNew: true,
            oldPrice: 435,
            price: 345.90
        },
    ]
    return (
        <div className='cart'>
            <h1>Produtos no seu Carrinho</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.image} alt="" />
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
