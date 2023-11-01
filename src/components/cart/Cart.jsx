import React, { useState } from 'react';
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

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");


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
                recipient: {
                    address,
                    city,
                },
                success_url: process.env.CLIENT_URL + "?success=true",
                cancel_url: process.env.CLIENT_URL + "?success=false",
            });
    
            window.location.href = res.data.checkoutUrl; // Redirecionar para a página de checkout do Stripe
        } catch (err) {
            console.error(err);
        }
    }
    

    // Estado para controlar se o modal está aberto
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir ou fechar o modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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
            <button onClick={toggleModal}>INDICAR ENDEREÇO DE ENTREGA</button>

            {/* Modal de formulário */}
            {isModalOpen && (
                <div className="modal">
                    <form>
                        {/* Adicione campos para o endereço de entrega */}
                        <h3>Endereço de Entrega:</h3>
                        <div className="form-group">
                            <label>Address:</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>

                        {/* Outros campos e botões aqui */}
                    </form>

                </div>
            )}
            <button onClick={handlePayment}>PROCESSO DO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}
