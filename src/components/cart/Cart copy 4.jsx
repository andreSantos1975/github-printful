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
               // Realiza a solicitação de pagamento usando Stripe ou outro provedor
        const stripe = await stripePromise;

        // Obtenha as informações do cartão do usuário de um formulário seguro
        const cardInfo = {
            number: '4242424242424242', // Número do cartão de teste do Stripe
            exp_month: 12, // Mês de expiração (entre 1 e 12)
            exp_year: 2023, // Ano de expiração (quatro dígitos)
            cvc: '123', // Código de verificação do cartão
        };
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardInfo,
            });
    
            if (error) {
                console.error(error);
                return;
            }
    
            // Se a transação com o provedor de pagamento for bem-sucedida,
            // agora você pode criar um pedido na Printful
            const printfulOrder = {
                products: products.map(item => ({
                    title: item.title,
                    price: item.price,
                    quantity: item.quantity,
                    printful_variant_id: item.variant_id, // Adicione o ID da variante da Printful
                })),
            };
    
            // Realiza a solicitação para criar um novo pedido na Printful
            const printfulRes = await axios.post("http://localhost:3001/checkout", printfulOrder);
    
            // Redireciona para a URL de checkout do Stripe
            window.location.href = printfulRes.data.checkoutUrl;
        } catch (err) {
            console.error(err);
        }
    };
    
    

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
