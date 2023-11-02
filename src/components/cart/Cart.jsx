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

    const [recipient, setRecipient] = useState({
        name: "",
        address: "",
        city: "",
        state_code: "",
        country_code: "",
        zip: "",
    });


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
                    name: recipient.name,
                    address: recipient.address,
                    city: recipient.city,
                    state_code: recipient.state_code,
                    country_code: recipient.country_code,
                    zip: recipient.zip
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

    const handleRecipientChange = (e) => {
        const { name, value } = e.target;
        setRecipient({ ...recipient, [name]: value });
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
            <button onClick={toggleModal}>INDICAR ENDEREÇO DE ENTREGA</button>

            {/* Modal de formulário */}
            {isModalOpen && (
                <div className="modal">

                    <form>
                        <h3>Endereço de Entrega:</h3>
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" name="name" value={recipient.name} onChange={handleRecipientChange} />
                        </div>
                        <div className="form-group">
                            <label>Endereço:</label>
                            <input type="text" name="address" value={recipient.address} onChange={handleRecipientChange} />
                        </div>
                        <div className="form-group">
                            <label>Cidade:</label>
                            <input type="text" name="city" value={recipient.city} onChange={handleRecipientChange} />
                        </div>
                        <div className="form-group">
                            <label>Estado:</label>
                            <input type="text" name="state_code" value={recipient.state_code} onChange={handleRecipientChange} />
                        </div>
                        <div className="form-group">
                            <label>País:</label>
                            <input type="text" name="country_code" value={recipient.country_code} onChange={handleRecipientChange} />
                        </div>
                        <div className="form-group">
                            <label>CEP:</label>
                            <input type="text" name="zip" value={recipient.zip} onChange={handleRecipientChange} />
                        </div>
                    </form>




                </div>

            )}
            <button onClick={handlePayment}>PROCESSO DO CHECKOUT</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}
