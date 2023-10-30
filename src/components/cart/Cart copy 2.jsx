import React from 'react';
import axios from 'axios';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';

export const Cart = () => {

    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe("pk_test_51Nj4sZFpke7arqdJzn50rFsbRvS79wtFVYHDsuxWpPsFYt1KKsuLFtuW6zlTa75EJ6DGfxO9j5d4k3HdxOZLDtL300vYArxVHp");

    const handlePayment = async () => {
        try {
            const res = await axios.post("http://localhost:3001/checkout", {
                products,
                session_id: stripeSession.id, // Use o session_id real gerado pelo Stripe
                success_url: process.env.CLIENT_URL + "?success=true",
                cancel_url: process.env.CLIENT_URL + "?success=false",
            });
    
            window.location.href = res.data.checkoutUrl; // Redirecionar para a página de checkout do Stripe
        } catch (err) {
            console.error(err);
        }
    }
    

    return (
        <div className='cart'>
            <h1>Produtos no seu Carrinho</h1>
            {products?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} xR$ {item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCESSO DO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}