import React, { useState, useEffect } from 'react';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import getPrintfulData from '../../printfulApi';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Product = () => {
  const id = useParams().id;
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade
  const [productData, setProductData] = useState([]); // Inicialize como um array vazio
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chame a função getPrintfulData para buscar os dados do produto, passando o "id"
        const response = await getPrintfulData(id);
        console.log('response.data no Product', response); // Log do objeto completo

        // Verifique se response é um array e tem pelo menos um item
        if (Array.isArray(response) && response.length > 0) {
          // Acesse os objetos sync_product e sync_variants dentro de cada elemento do array
          const productDataArray = response.map(item => ({
            syncProduct: item.result.sync_product,
            syncVariants: item.result.sync_variants,
          }));
          console.log('productDataArray no Product:', productDataArray);

          // Defina os dados do produto no estado
          setProductData(productDataArray);
        }

        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API Printful:', error);
        setLoading(false);
      }
    };

    // Chame a função fetchData para buscar os dados do produto
    fetchData();
  }, [id]);

  // Resto do seu componente
  return (
    <div className='product'>
      {loading ? "loading..." : (
        <>
          <div className='left'>
            <div className="images">
            
              {/* Adicione mais imagens conforme necessário */}
            </div>
            <div className="manImg">
              {/* Renderize as informações do produto com base no array productData */}
              {productData.map((item, index) => (
                <div key={index}>
                  <h1>{item.syncProduct.name}</h1>
                  {/* Renderize outras informações do produto */}
                </div>
              ))}
            </div>
          </div>
          <div className='right'>
            {/* Renderize as informações do produto com base no array productData */}
            {productData.map((item, index) => (
              <div key={index}>
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
                        // Se você precisar passar dados específicos do objeto sync_product para addToCart, faça aqui
                      })
                    )
                  }
                >
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                {/* Resto do seu código */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
